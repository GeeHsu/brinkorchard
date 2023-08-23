<template>
  <div class="page-loader" v-if="!isloaded">
    <div class="box">
      <span>
        <img src="/src/assets/img/avocado.png" alt="avocado png">
      </span>
      <span>
        <img src="/src/assets/img/mango.png" alt="mango png">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isloaded: false
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if(document.readyState == "complete") {
        setTimeout(() => this.isloaded = true, 3000);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #a3cfbb;
  z-index: 999;
}

/* loader */
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
}

.box span {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 60px;
  height: 60px;
  background: #262626;
  border-radius: 50%;
}

.box span:nth-child(1) {
  background: #dde7c7;
  animation: animate 2s linear infinite;
  transform: rotate(15deg);
}

.box span:nth-child(2) {
  background: #f08080;
  animation: animate 2s linear infinite;
  animation-delay: -1s;
  transform: rotate(15deg);
}

@keyframes animate {
  0% {
    top: 0;
    left: 0;
  }
  5% {
    top: 0;
    left: 0;
  }
  20% {
    top: 0;
    left: 50%;
  }
  25% {
    top: 0;
    left: 50%;
  }
  50% {
    top: 50%;
    left: 50%;
  }
  55% {
    top: 50%;
    left: 50%;
  }
  75% {
    top: 50%;
    left: 0;
  }
  80% {
    top: 50%;
    left: 0;
  }
  100% {
    top: 0;
    left: 0;
  }
}

/* img */
img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>