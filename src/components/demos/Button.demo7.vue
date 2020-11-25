<demo>
button group
</demo>
<template>
  <button-group>
    <Button icon='back'></Button>
    <Button icon='forward'></Button>
  </button-group>
  <ButtonGroup>
    <Button icon='back'></Button>
    <Button>更多</Button>
    <Button icon='forward'></Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button icon='back'>后退</Button>
    <Button icon='download'>下载</Button>
    <Button icon='like'></Button>
    <Button
      icon='forward'
      iconPosition='right'
    >
      前进
    </Button>
  </ButtonGroup>

</template>

<script>
import Button from "/src/lib/Button.vue";
import ButtonGroup from "/src/lib/ButtonGroup.vue";
export default {
  components: { Button, ButtonGroup },
};
</script>