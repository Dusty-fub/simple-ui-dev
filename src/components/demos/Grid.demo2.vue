<demo>
    指定 
</demo>
<template>
  <Row>
    <Col :span='2' />
    <Col :span='22' />
  </Row>
  <Row>
    <Col :span='3' />
    <Col :span='18' />
    <Col :span='3' />
  </Row>
  <Row>
    <Col :span='3' />
    <Col :span='18' />
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
