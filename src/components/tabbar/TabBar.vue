<template>
  <div id="app">
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* X偏移，Y偏移，阴影模糊半径，阴影扩散半径，阴影颜色 */
  box-shadow: 0 -3px 1px 1px rgba(100, 100, 100, 0.1);
}
</style>
