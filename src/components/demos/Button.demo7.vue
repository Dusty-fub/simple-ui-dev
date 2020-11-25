<demo>
button group
</demo>
<template>
  <ButtonGroup>
    <Button icon='back'>后退</Button>
    <Button icon='download'>下载</Button>
    <Button icon='like'></Button>
    <Button
      icon='forward'
      iconPosition='right'
    >前进</Button>
  </ButtonGroup>
  <Button icon='back'>后退</Button>

</template>

<script>
import Button from "/@/lib/Button.vue";
import ButtonGroup from "/@/lib/ButtonGroup.vue";
export default {
  components: { Button, ButtonGroup },
};
</script>