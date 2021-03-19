<template>
  <div class="home">
    <div class="box"></div>
    <tabBar />
  </div>
</template>

<script>
import tabBar from '@/components/tabBar/index'
export default {
  name: 'Home',
  components: {
    tabBar
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
