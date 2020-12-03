<template>
  <div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  width: 100px;
  height: 100px;
  border: 1px solid steelblue;
  &:nth-child(1) {
    background: url('@imgs/icons/waix1.png');
  }
  &:nth-child(2) {
    background: url('@imgs/icons/waix2.png');
  }
  &:nth-child(3) {
    background: url('@imgs/icons/waix3.png');
  }
}
</style>