<template>
  <tab-bar>
    <tab-bar-item
      path="/home"
      activeColor="red"
    >
      <img
        slot="item-icon"
        src="../assets/img/tabbar/pic.jpg"
        alt=""
      >
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/pic_active.jpg"
        alt=""
      >
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item
      path="/sort"
      activeColor="blue"
    >
      <img
        slot="item-icon"
        src="../assets/img/tabbar/pic.jpg"
        alt=""
      >
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/pic_active.jpg"
        alt=""
      >
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item
      path="/shop"
      activeColor="yellow"
    >
      <img
        slot="item-icon"
        src="../assets/img/tabbar/pic.jpg"
        alt=""
      >
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/pic_active.jpg"
        alt=""
      >
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item
      path="/my"
      activeColor="green"
    >
      <img
        slot="item-icon"
        src="../assets/img/tabbar/pic.jpg"
        alt=""
      >
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/pic_active.jpg"
        alt=""
      >
      <div slot="item-text">我的</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>