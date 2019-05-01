<template>
    <div class="loading">
        <div class="la"></div>
        <div class="lb"></div>
        <div class="lc"></div>
        <div class="ld"></div>
    </div>
</template>

<script>
export default {
    name: 'Loading'
};
</script>

<style scoped>
.loading {
  position: absolute;
  width: 2.8em;
  height: 2.8em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.la {
  border: 0;
  margin: 0;
  width: 16px;
  height: 16px;
  position: absolute;
  border-radius: 50%;
  animation: loading 2s ease infinite;
  background: #19a68c;
  animation-delay: -1.5s;
}

.lb {
  border: 0;
  margin: 0;
  width: 16px;
  height: 16px;
  position: absolute;
  border-radius: 50%;
  animation: loading 2s ease infinite;
  background: #f63d3a;
  animation-delay: -1s;
}

.lc {
  border: 0;
  margin: 0;
  width: 16px;
  height: 16px;
  position: absolute;
  border-radius: 50%;
  animation: loading 2s ease infinite;
  background: #fda543;
  animation-delay: -0.5s;
}

.ld {
  border: 0;
  margin: 0;
  width: 16px;
  height: 16px;
  position: absolute;
  border-radius: 50%;
  background: #193b48;
  animation: loading 2s ease infinite;
}

@keyframes loading {
  0%,
  100% {
    transform: translate(0);
  }

  25% {
    transform: translate(160%);
  }

  50% {
    transform: translate(160%, 160%);
  }

  75% {
    transform: translate(0, 160%);
  }
}
</style>
