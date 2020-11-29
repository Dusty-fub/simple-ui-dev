<demo>
    偏移
</demo>
<template>
  <Row>
    <Col :span='3' />
    <Col :span='18' />
  </Row>
  <Row>
    <Col :span='3' />
    <Col
      :span='18'
      :offset='3'
    />
  </Row>
</template>
<script lang='ts'>
import Row from "/src/lib/Row.vue";
import Col from "/src/lib/Col.vue";
export default {
  components: { Row, Col },
};
</script>
