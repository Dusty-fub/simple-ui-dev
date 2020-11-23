<demo>
icon
</demo>
<template>
  <Button icon='setting'>
    设置
  </Button>
  <Button
    icon='setting'
    iconPosition='left'
  >
    设置
  </Button>
  <Button
    icon='setting'
    iconPosition='right'
  >
    设置
  </Button>
  <Button icon='like'></Button>
  <Button icon='upload'>上传</Button>
  <Button icon='download'>下载</Button>
  <Button icon='back'>后退</Button>
  <Button
    icon='forward'
    iconPosition='right'
  >前进</Button>
</template>

<script>
import Button from "/@/lib/Button.vue";
export default {
  components: { Button },
};
</script>