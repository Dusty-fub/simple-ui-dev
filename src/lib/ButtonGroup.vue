<template>
  <div class="gulu-button-group">
    <slot> </slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" >
.gulu-button-group {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  Button:first-child {
    margin-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  Button:last-child {
    margin-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  Button:not(:first-child) {
    &:not(:last-child) {
      margin-left: 0;
      margin-right: 0;
      border-radius: 0;
    }
  }
  Button:not(:hover):not(:last-child):not(:focus) {
    border-right: 0;
  }
  Button:hover + Button,
  Button:focus + Button {
    border-left: none;
  }
}
</style>
