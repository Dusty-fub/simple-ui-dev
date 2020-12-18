<demo>
    示例 2 手风琴
</demo>
<template>
  <Collapse :accordion="true">
    <CollapseItem title="title1" :isUnfold="true">
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
    <CollapseItem title="title3">
      <div>
        三个朋友在酒吧喝酒；第一个说“在我身上发生了一件恐怖的事，在旅行社，我想说‘一张去匹兹堡的票！’可我说的是“一张去兹匹堡的票！’”
        第二个人应道：“那不算什么！早饭时，我想和我老婆说‘亲爱的，能把糖递给我吗？’可我说的是‘你这个婊子，你毁了我全部的生活！’”
        第三个总结道，“还是先听听我身上发生的事吧。攒了一夜的勇气，我打算在早饭的时候，和我老婆说你对你老婆说过的那些话，可最终我说出来的是，‘亲爱的，能把糖递给我吗？’”
      </div>
    </CollapseItem>
    <CollapseItem title="title4">
      <div>“行李架上的包裹是什么？”</div>
      <div>“是麦菇芬。”</div>
      <div>“那是干什么用的？”</div>
      <div>“杀死高原上的狮子。”</div>
      <div>“可高原上没有狮子。”</div>
      <div>“你看，麦菇芬起作用了。”</div>
    </CollapseItem>
  </Collapse>
</template>
<script lang="ts">
/**
 *  参数：accordion
 *  类型：Boolean
 *  说明：是否开启“手风琴模式”（每次只能展示一个模块）
 *  默认值：false
 *
 */
import Collapse from "/src/lib/collapse/Collapse.vue";
import CollapseItem from "/src/lib/collapse/CollapseItem.vue";
export default {
  components: { Collapse, CollapseItem },
};
</script>
<style lang="scss" scoped></style>
