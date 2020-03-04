# encapsulate-tabbar

## Download
```
git clone git@github.com:LqZww/encapsulate-tabbar.git
```

## Install
```
yarn install
```

## Compiles
```
yarn serve
```

## Bale
```
yarn build
```

## Use
components =》 MainTabBar.vue

For example：
```
<tab-bar-item path="/home" activeColor="yellow">
  <img  slot="item-icon"  src="../assets/img/tabbar/pic.jpg"  alt="">
  <img  slot="item-icon-active"  src="../assets/img/tabbar/pic_active.jpg"  alt="">
  <div slot="item-text">购物车</div>
</tab-bar-item>
```

path：路径
activeColor：底部导航栏字体颜色
first img：默认显示的图片
second img：点击后显示的图片
div：底部导航栏文字内容