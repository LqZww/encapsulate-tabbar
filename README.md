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

## Directory Structure

├─src
|  ├─App.vue
|  ├─main.js
|  ├─views
|  |   ├─sort
|  |   ├─shop
|  |   ├─my
|  |   ├─home
|  ├─router
|  |   └index.js
|  ├─components
|  |     ├─MainTabBar.vue
|  |     ├─tabbar
|  ├─assets
|  |   ├─img
|  |   ├─css

## Use
components =》 MainTabBar.vue

For example：
```
<tab-bar-item path="/xxx" activeColor="red">
  <img  slot="item-icon"  src="xxx"  alt="">
  <img  slot="item-icon-active"  src=".xxx"  alt="">
  <div slot="item-text">xxx</div>
</tab-bar-item>
```

* path：路径

* activeColor：底部导航栏字体颜色

* first img：默认显示的图片

* second img：点击后显示的图片

* div：底部导航栏文字内容