<demo>
    示例 1
</demo>
<template>
  <Collapse>
    <CollapseItem title="title1">
      <div>
        有一个关于被怀疑偷窃的工人的老故事：每天傍晚，在他离开工厂的时候，他推
        在前面得手推车都会受到细致的检查。守卫什么也找不到；它永远是空的。最终，
        他恍然大悟：工人偷的就是手推车本身。
      </div>
    </CollapseItem>
    <CollapseItem title="title2">
      <div>
        一名男子坚信自己是稻穗，于是被带到精神病院接受治疗。经过几年治疗，男子终于相信自己不是稻穗而是个人，于是他出院了。
        可是没过几分钟，他就跑了回来，神情慌张。医生问他：“你怎么了？”病人说，“门外有一只母鸡，我怕它把我吃了！”
        医生说：“你不是很清楚你不是稻穗而是人吗？” 病人说：“我当然知道，可是鸡知道吗？”
      </div>
    </CollapseItem>
    <CollapseItem title="title3"></CollapseItem>
    <CollapseItem title="title4"></CollapseItem>
    <CollapseItem title="title5"></CollapseItem>
  </Collapse>
</template>
<script lang="ts">
/**
 *  参数：title
 *  类型：String
 *  默认值：'标题'
 */
import Collapse from "/src/lib/collapse/Collapse.vue";
import CollapseItem from "/src/lib/collapse/CollapseItem.vue";
export default {
  components: { Collapse, CollapseItem },
};
</script>
<style lang="scss" scoped></style>
