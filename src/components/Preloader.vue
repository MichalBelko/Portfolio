<template>
  <div class="wrapper" v-show="!isloaded">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      isloaded: false,
    };
  },
  mounted() {
    if (document.readyState == "complete") {
      this.isloaded = true;
    }
    setTimeout(() => {
      document.querySelector(".wrapper").classList.add("hide");
    }, 3000);
  },
};
</script>

<style>
.hide {
  display: none !important;
}
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  min-height: 400vh;
  width: 100%;
  overflow-y: hidden;
  background-color: #0c0513;
  z-index: 100;
  opacity: 1;
}
@keyframes loader {
  0%,
  10%,
  100% {
    width: 90px;
    height: 90px;
  }
  65% {
    width: 170px;
    height: 170px;
  }
}
@keyframes loaderBlock {
  0%,
  30% {
    transform: rotate(0);
  }
  55% {
    background-color: #b624fa;
  }
  100% {
    transform: rotate(90deg);
  }
}
@keyframes loaderBlockInverse {
  0%,
  20% {
    transform: rotate(0);
  }
  55% {
    background-color: #b624fa;
  }
  100% {
    transform: rotate(-90deg);
  }
}
.loader {
  position: absolute;
  top: 12.25%;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%) rotate(45deg) translate3d(0, 0, 0);
  animation: loader 1.2s infinite ease-in-out;
  overflow: hidden;
}
.loader span {
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  background-color: #410161;
  animation: loaderBlock 1.2s infinite ease-in-out both;
  overflow: hidden;
  margin: 5px;
}
.loader span:nth-child(1) {
  top: 0;
  left: 0;
}
.loader span:nth-child(2) {
  top: 0;
  right: 0;
  animation: loaderBlockInverse 1.2s infinite ease-in-out both;
}
.loader span:nth-child(3) {
  bottom: 0;
  left: 0;
  animation: loaderBlockInverse 1.2s infinite ease-in-out both;
}
.loader span:nth-child(4) {
  bottom: 0;
  right: 0;
}
</style>
