<template >
  <div class="gulu-tabs">
    <div
      class="gulu-tabs-nav"
      ref='container'
    >
      <div
        class="gulu-tabs-nav-item"
        :class="{'gulu-tabs-nav-selected':selected[index]}"
        v-for='(t,index) in titles'
        :key='index'
        @click="select(t)"
        :ref='el=>{if(selected[index])selectedItem=el}'
      >
        {{t}}
      </div>
      <div
        class="gulu-tabs-nav-indicator"
        ref='indicator'
      ></div>
    </div>

    <div class="gulu-tabs-content">
      <component
        :is="defaults[current]"
        :key="current"
      />
    </div>

  </div>
</template>

<script lang='ts'>
import Tab from "./Tab.vue";
import { onMounted, reactive, ref, nextTick } from "vue";
export default {
  setup(props, ctx) {
    let defaults = reactive(ctx.slots.default());

    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    let current = ref(0);
    const markSelected = () => {
      let hasSelected = false;
      let s = defaults.map((tag, index) => {
        if (tag.props.hasOwnProperty("selected")) {
          current.value = index;
          hasSelected = true;
        }
        return tag.props.hasOwnProperty("selected");
      });
      !hasSelected && (s[0] = true);
      return s;
    };
    let selected = reactive({ ...markSelected() });

    const select = async (title: string) => {
      delete defaults[current.value].props.selected;
      selected[current.value] = false;
      current.value = defaults.findIndex((tag) => {
        return tag.props.title === title;
      });
      defaults[current.value].props.selected = "";
      selected[current.value] = true;

      await nextTick();
      updateIndicator();
    };

    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const updateIndicator = () => {
      if (selectedItem.value !== null && indicator.value !== null) {
        const {
          width,
          left: currentLeft,
        } = selectedItem.value.getBoundingClientRect();
        const { left: containerLeft } = container.value.getBoundingClientRect();
        const indicatorLeft = currentLeft - containerLeft;

        indicator.value.style.width = width + "px";
        indicator.value.style.left = indicatorLeft + "px";
      }
    };
    onMounted(() => {
      updateIndicator();
    });

    return {
      container,
      indicator,
      selectedItem,
      titles,
      defaults,
      selected,
      current,
      select,
    };
  },
};
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
    }
    &-selected {
      color: $blue;
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;

      transition: left 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>