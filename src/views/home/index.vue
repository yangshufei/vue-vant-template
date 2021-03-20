<template>
  <div class="home">
    <div class="box"></div>
    <tabBar />
  </div>
</template>

<script>
import tabBar from '@/components/tabBar/index'
// 接口
import { getHomeData } from '@/api/home'
export default {
  name: 'Home',
  components: {
    tabBar
  },
  methods: {
    async getData () {
      const data = await getHomeData()
      console.log(data)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
  .home {
    .box {
      width: 375px;
      height: 100vh;
      background: pink;
    }
  }
</style>
