<script setup>
</script>

<template>
    <h1 :style="state.gameNameAnimation.style" class="gameName">pong</h1>
</template>

<style lang="scss">

$neon-color: rgb(255 ,20 , 136);


.gameName {
  position: absolute;
  top: 24.6%;
  left: 50.5%;
  transform: translate(-50%, -50%);
  font-family: Space Grotesk;
  color: $neon-color;
  text-shadow: 0 0 0.055em rgb(233, 209, 209), 0 0 0.125em $neon-color;
  opacity: 0;
  font-size: 14vw;
  animation: textAppear 3s forwards 9s;
}

.gameName::before {
  content: '';
  position: absolute;
  background: $neon-color;
  top: 120%;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
  filter: blur(0.6em)
}

@keyframes textAppear {
  15% {
    text-shadow: 0 0 0.6em white, 0 0 0.6em  $neon-color;
    opacity: 0.1;
  }
  30% {
    text-shadow: 0 0 0.4em white, 0 0 0.4em $neon-color;
    opacity: 0.2;
  }
  45% {
    text-shadow: 0 0 0.3em white, 0 0 0.3em $neon-color;
    opacity: 0.3;
  }
  60% {
    text-shadow: 0 0 0.2em white, 0 0 0.2em $neon-color;
    opacity: 0.4;
  }
  70% {
    text-shadow: 0 0 0.1em rgb(233, 209, 209), 0 0 0.175em $neon-color;
    opacity: 0.5;
  }
  80% {
    text-shadow: 0 0 0.07em rgb(233, 209, 209), 0 0 0.150em $neon-color;
    opacity: 0.65;
  }
  90% {
    text-shadow: 0 0 0.06em rgb(233, 209, 209), 0 0 0.140em $neon-color;
    opacity: 0.8;
  }
  100% {
    text-shadow: 0 0 0.055em rgb(233, 209, 209), 0 0 0.125em $neon-color;
    opacity: 1;
  }
}

</style>