<demo>
    间隔
</demo>
<template>
  <Row :gutter='1'>
    <Col :span='3' />
    <Col :span='18' />
  </Row>
</template>
<script lang='ts'>
import Row from "/src/lib/Row.vue";
import Col from "/src/lib/Col.vue";
export default {
  components: { Row, Col },
};
</script>
