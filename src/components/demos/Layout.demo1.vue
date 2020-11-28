<demo>
    二分
</demo>
<template>
  <Row>
    <Col />
  </Row>
  <Row>
    <Col>左</Col>
    <Col>右</Col>
  </Row>
  <Row>
    <Col />
    <Col />
    <Col />
  </Row>
  <Row>
    <Col />
    <Col />
    <Col />
    <Col />
  </Row>
</template>
<script lang='ts'>
import Row from "/src/lib/Row.vue";
import Col from "/src/lib/Col.vue";
export default {
  components: { Row, Col },
};
</script>

<style lang="scss" scoped>
</style>