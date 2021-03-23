<template>
  <div class="detail">
    <h4>B页面</h4>
    <van-button type="primary" block @click="toHome">返回首页</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'Detail',
  components: {
    [Button.name]: Button
  },
  methods: {
    toHome () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail {
    text-align: center;
  }
</style>
