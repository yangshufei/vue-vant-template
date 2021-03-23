<template>
  <div class="home">
    <h4>A页面</h4>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <van-button type="primary" block @click="toDetail">跳转详情</van-button>
    <tabBar />
  </div>
</template>

<script>
import tabBar from '@/components/tabBar/index'
// 接口
import { getHomeData } from '@/api/home'
import { Cell, CellGroup, Button } from 'vant'
export default {
  name: 'Home',
  components: {
    tabBar,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Button.name]: Button
  },
  methods: {
    async getData () {
      this.$loading()
      const data = await getHomeData()
      console.log(data)
      this.$loaded()
    },
    toDetail () {
      this.$router.push({ path: '/detail' })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
  .home {
    h4 {
      text-align: center;
    }
  }
</style>
