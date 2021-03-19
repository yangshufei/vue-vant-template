<template>
  <van-tabbar v-model="active" class="vant__tabbar">
    <van-tabbar-item v-for="item in tabbar" :key="item.id" :to="item.path">
      <span>{{item.name}}</span>
      <van-icon slot="icon" :name="item.icon"></van-icon>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem, Icon } from 'vant'
const tabbar = [
  {
    id: 0,
    icon: 'wap-home-o',
    name: '首页',
    path: '/'
  },
  {
    id: 1,
    icon: 'shop-o',
    name: '商城',
    path: '/store'
  },
  {
    id: 2,
    icon: 'manager-o',
    name: '我的',
    path: '/user'
  }
]
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon
  },
  data () {
    return {
      active: 0,
      tabbar: tabbar
    }
  },
  mounted () {
    this.setActive(this.$route.path)
  },
  methods: {
    setActive (val) {
      this.tabbar.forEach(item => {
        if (item.path === val) {
          this.active = item.id
        }
      })
    }
  }
}
</script>

<style lang="scss">
.vant__tabbar {
  background-color: #f7f7fa !important;
}
</style>
