<template>
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
        :ref='el=>{if(el)navItems[index]=el}'
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
import { onMounted, onUpdated, reactive, ref } from "vue";
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
      return defaults.map((tag, index) => {
        if (tag.props.hasOwnProperty("selected")) {
          current.value = index;
        }
        return tag.props.hasOwnProperty("selected");
      });
    };
    let selected = reactive({ ...markSelected() });

    const select = (title: string) => {
      delete defaults[current.value].props.selected;
      selected[current.value] = false;
      const selectedIndex = defaults.findIndex((tag) => {
        return tag.props.title === title;
      });
      current.value = selectedIndex;
      defaults[current.value].props.selected = "";
      selected[current.value] = true;
    };

    const navItems = reactive<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const updateIndicator = () => {
      const result = navItems.filter((div) => {
        return div.classList.contains("gulu-tabs-nav-selected");
      })[0];
      const { width, left: currentLeft } = result.getBoundingClientRect();
      indicator.value.style.width = width + "px";

      const { left: containerLeft } = container.value.getBoundingClientRect();
      const indicatorLeft = currentLeft - containerLeft;

      indicator.value.style.left = indicatorLeft + "px";
    };
    onMounted(() => {
      updateIndicator();
    });

    onUpdated(() => {
      updateIndicator();
    });

    return {
      container,
      indicator,
      navItems,
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
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>