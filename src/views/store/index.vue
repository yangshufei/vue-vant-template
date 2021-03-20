<template>
  <div class="store">
    <tabBar />
  </div>
</template>

<script>

import tabBar from '@/components/tabBar/index'
export default {
  name: 'Store',
  components: {
    tabBar
  }
}
</script>

<style lang="scss" scoped>
  .store {
    height: 100vh;
    background: rgb(255, 238, 192);
  }
</style>
