<template>
  <div class="user">
    <tabBar />
  </div>
</template>

<script>

import tabBar from '@/components/tabBar/index'
export default {
  name: 'User',
  components: {
    tabBar
  }
}
</script>

<style lang="scss" scoped>
  .user {
    height: 100vh;
    background: rgb(110, 228, 236);
  }
</style>
