<template>
  <div id="app">
    <button @click="test">点击显示提示框</button>
  </div>
</template>

<script>
import ConfirmComp from './components/ConfirmComp.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ConfirmComp
  },
  methods: {
    test() {
      //调用方法,传递类型,内容
      this.$confirm({
        type: '提示',
        msg: '您确定删除吗？',
        btn: {
          ok: '确定',
          no: '取消'
        }
      }).then(() => {
        //点击确定之后的回调函数
        console.log('确定')
      }).catch(() => {
        //取消的回调函数
        console.log('取消')
      })
    }
  }
}
</script>

<style>

</style>
