<template>
  <div class="city-mask">
    <div class="city-body">
      <div class="city-content">
        <p>
          检测到您目前所在城市是{{city}}
          <br>是否要切换
        </p>
      </div>
      <div class="city-btn">
        <div @touchstart="handleOk" class="city-btn-ok">{{ok||'确定'}}</div>
        <div @touchstart="handleCancel" class="city-btn-cancel">{{cancel||'取消'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox"
};
</script>

<style <style scoped>
.city-mask {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 998;
}
.city-body {
  position: fixed;
  left: 5%;
  right: 5%;
  border-radius: 3px;
  background: #fff;
  bottom: 45%;
  z-index: 999;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
}
.city-body .city-content {
  text-align: center;
  padding: 20px 15px;
  border-bottom: 1px solid #eee;
}
.city-body .city-content p {
  margin: 0;
}
.city-body .city-btn {
  width: 100%;
}
.city-body .city-btn .city-btn-ok,
.city-body .city-btn .city-btn-cancel {
  display: inline-block;
  width: 49%;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  margin-left: -1%;
  color: #e54847;
}
.city-body .city-btn .city-btn-ok {
  border-right: 1px solid #eee;
  margin-left: 1%;
}
</style>
