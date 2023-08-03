<script setup>
</script>

<template>
  <body>
    <!-- need to add two additional balls for main ball movement effect -->
    <!-- make the leftside and rightside smaller then make them move fast to create the letters p and g -->
    <div class="outer">
      <div class="ball"></div>
      <div class="trail trail-1"></div>
      <div class="trail trail-2"></div>
      <div class="trail trail-3"></div>
      <div class="trail trail-4"></div>
      <div class="trail trail-5"></div>
      <div class="trail trail-6"></div>
      <h1 class="gameName">pong</h1>
    </div>
  </body>
</template>

<style lang="scss">

$neon-color: rgb(4, 217, 255);
$bg-color: rgb(0, 62, 73);

body {
  background: $bg-color;
  overflow: hidden;
}



.outer {
  position: absolute;
  top: 25%;
  left: 0;
  /* transform: translate(-50% ,-50%); */
  width: 100%;
  height: 25vw;
  display: flex;
}

.gameName {
  font-family: Space Grotesk;
  color: rgb(0, 0, 0);
  opacity: 0;
  font-size: 14vw;
  margin-left: 33%;
  margin-top: 0%;
  animation: textAppear 3s forwards 9000ms;
}

.ball {
  width: 5vw;
  height: 5vw;
  position: absolute;
  border-radius: 50%;
  background: $neon-color;
  left: 0px;
  top: 0;
  box-shadow: 0 0 1em 0 $neon-color;
  animation: bouncing 3s linear forwards 500ms, ballStrike1 800ms linear forwards 3500ms,
  ballStrike2 800ms linear forwards 4300ms, ballStrike3 800ms linear forwards 5100ms,
  ballStrike4 800ms linear forwards 5900ms, ballStrike5 800ms linear forwards 6700ms,
  speeding1 2s linear forwards 7500ms, speeding2 0.1s forwards 9500ms 30,
  fadeOut 4s forwards 8500ms;
}
.trail {
  width: 5vw;
  height: 5vw;
  position: absolute;
  border-radius: 50%;
  background: $neon-color;
  box-shadow: 0 0 1em 0 $neon-color;
  left: 0px;
  top: 0;
}

.leftSide {
  width: 1.8vw;
  height: 10.12vw;
  position: absolute;
  background-color: black;
  left: -2%;
  top: 10vw;
  animation: leftAppear 200ms linear forwards 4100ms, leftMove1 200ms linear forwards 5700ms,
  leftMove2 200ms linear forwards 7300ms;
}

.rightSide {
  width: 1.8vw;
  height: 10.12vw;
  position: absolute;
  background-color: black;
  top:30vw;
  left: 100%;
  animation: rightAppear 200ms linear forwards 3300ms, rightMove1 200ms linear forwards 4900ms,
  rightMove2 200ms linear forwards 6500ms;
}

@keyframes bouncing {
  16%, 48%, 78% {
    top: 30vw;
    animation-timing-function: ease-out;
  }
  32% {
    top: 8vw;
    animation-timing-function: ease-in;
  }
  62% {
    top: 12vw;
    animation-timing-function: ease-in;
  }
  90% {
    top: 20vw;
    animation-timing-function: ease-in;
  }
  100% {
    top: 25vw;
    left: 80%;
    transform: rotate(360deg);
  }
  
}

@keyframes ballStrike1 {
  100% {
    top: 12.5vw;
    left: 21%;    
    animation-timing-function: ease-out;
    transform: rotate(360deg);
  }
}
@keyframes ballStrike2 {
  100% {
    top: 15;
    left: 70%;   
    animation-timing-function: ease-out;
    transform: rotate(360deg);
  }
}
@keyframes ballStrike3 {
  100% {
    top: 19.5vw;
    left: 30%;   
    animation-timing-function: ease-in;
    transform: rotate(360deg);
  }
}
@keyframes ballStrike4 {
  100% {
    top: 9.5vw;
    left: 60.5%;   
    animation-timing-function: ease-in;
    transform: rotate(360deg);
  }
}
@keyframes ballStrike5 {
  100% {
    top: 9.5vw;
    left: 35.5%; 
    animation-timing-function: ease-in;
    transform: rotate(360deg);
  }
}
@keyframes speeding1 {
  10%, 30%, 50%, 64%, 78%, 86%, 92%, 96%, 98%, 99% 
  {
    top: 9.5vw;
    left: 60.5%;  
    animation-timing-function: ease-in;
  }
  20%, 40%, 57%, 71%, 82%, 90%, 94%, 97%, 98.5% 
  {
    top: 9.5vw;
    left: 35.5%;   
    animation-timing-function: ease-in;
  }
  100% 
  {
    top: 9.5vw;
    left: 35.5%;   
    animation-timing-function: ease-in;
    transform: rotate(360deg);
  }
}
@keyframes speeding2 {
  10%, 30%, 50%, 70%, 90% 
  {
    top: 9.5vw;
    left: 59%;  
    animation-timing-function: ease-out;
  }
  20%, 40%, 60%, 80%, 100% 
  {
    top: 9.5vw;
    left: 35.5%;   
    animation-timing-function: ease-out;
    transform: rotate(360deg);
  }
}
@keyframes fadeOut {
  15% {
    width: 6vw;
    height: 6vw;
    top: 9vw;
    opacity: 0.8;
  }
  30% {
    width: 7vw;
    height: 7vw;
    top: 8vw;
    opacity: 0.7;
  }
  45% {
    width: 8vw;
    height: 8vw;
    top: 7vw;
    opacity: 0.5;
  }
  60% {
    width: 9vw;
    height: 9vw;
    top: 6.5vw;
    opacity: 0.4;
  }
  75% {
    width: 10vw;
    height: 10vw;
    top: 6.3vw;
    opacity: 0.3;
  }
  90% {
    width: 11vw;
    height: 11vw;
    top: 6vw;
    opacity: 0.15;
  }
  100% {
    opacity: 0;
  }
}

@keyframes rightAppear {
  100% {
    left: 84%;
    top: 22vw;
    animation-timing-function: ease-in;
  }
}
@keyframes leftAppear {
  100% {
    left: 19.5%;
    top: 10vw;
    animation-timing-function: ease-in;
  }
}
@keyframes rightMove1 {
  100% {
    left: 74.7%;
    top: 13vw;
    animation-timing-function: ease-in;
  }
}
@keyframes leftMove1 {
  100% {
    left: 29%;
    top: 16.5vw;
    animation-timing-function: ease-in;
  }
}
@keyframes rightMove2 {
  100% {
    left: 65.5%;
    top: 6.66vw;
    animation-timing-function: ease-in;
  }
}
@keyframes leftMove2 {
  100% {
    left: 33.85%;
    top: 6.66vw;
    animation-timing-function: ease-in;
  }
}

@keyframes textAppear {
  15% {
    opacity: 0.1;
  }
  30% {
    opacity: 0.2;
  }
  45% {
    opacity: 0.3;
  }
  60% {
    opacity: 0.4;
  }
  70% {
    opacity: 0.5;
  }
  80% {
    opacity: 0.65;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

</style>