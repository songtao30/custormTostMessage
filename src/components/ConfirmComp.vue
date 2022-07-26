<template>
  <div v-if="isShow" class="modal">
    <div class="main">
      <p class="msg">{{ text.msg }}</p>
      <div class="btnBox">
        <span @click="close">{{ text.btn.no }}</span>
        <span @click="ok">{{ text.btn.ok }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
      text: {
        type: '提示',
        msg: '',
        btn: {
          ok: '确定',
          no: '取消'
        },
      }
    }
  },
  methods: {
    close() {
      this.isShow = false;
    },
    ok() {
      this.isShow = false;
    },
  }
}
</script>
<style scoped>
.modal {
  position: absolute;
  width: 300px;
  height: 100px;
  background: rgba(0, 0, 0, 0.89);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  z-index: 99;
}

.main {
  position: absolute;
  width: 80%;
  height: 3.7rem;
  /*background: url(xxx.png)no-repeat left center;*/
  background-size: 100% 100%;
  left: 10%;
  top: 50%;
  margin-top: -1.85rem;
  color: #fff;
  padding: 0.72rem 1.03rem;
}

.msg {
  font-size: 0.32rem;
  font-weight: 500;
  color: rgba(48, 197, 171, 1);
}

.btnBox {
  display: flex;
  justify-content: space-between;
  margin-top: 0.88rem;
}

.btnBox span {
  display: inline-block;
  width: 1.51rem;
  height: 0.62rem;
  line-height: 0.62rem;
  /*background: url(xxx.png)no-repeat left center;*/
  background-size: 100% 100%;
  font-weight: 500;
  color: rgba(48, 197, 171, 1);
  font-size: 0.33rem;
}

.btnBox span:last-child {
  /*background: url(xxx.png)no-repeat left center;*/
  background-size: 100% 100%;
  color: rgba(212, 255, 249, 1);
}
</style>

