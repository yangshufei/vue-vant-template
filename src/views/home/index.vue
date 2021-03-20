<template>
  <div class="home">
    <h4>11</h4>
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
    height: 100%;
    background: pink;
  }
</style>
