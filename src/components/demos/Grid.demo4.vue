<demo>
    间隔
</demo>
<template>
  <Row :gutter='3'>
    <Col :span='4' />
    <Col :span='16' />
    <Col :span='4' />
  </Row>
  <Row :gutter='3'>
    <Col :span='4' />
    <Col
      :span='10'
      :offset='6'
    />
    <Col :span='4' />
  </Row>
</template>
<script lang='ts'>
import Row from "/src/lib/Row.vue";
import Col from "/src/lib/Col.vue";
export default {
  components: { Row, Col },
};
</script>
