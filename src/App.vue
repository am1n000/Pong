<script setup>
import LandingPage from './views/LandingPage.vue';
// import LoginPage from './views/LandingPage.vue';

</script>

<template>
  <body>
    <nav>
      <router-link class="nav-button" to="/">Home</router-link>
      <router-link class="nav-button" to="/login">Login</router-link>
    </nav>
    <router-view/>
  </body>
</template>


<style lang="scss">

$neon-color: rgb(255 ,20 , 189);
$bg-color: rgb(49, 32, 43);

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: $bg-color;
}

nav {
  position: absolute;
  right: 3%;
  top: 1%;
  display: flex;
  gap: 2vw;
  opacity: 0;
  visibility :hidden;
  animation: navAppear 10s forwards 9s;
}

@keyframes navAppear {
  100% {
    opacity: 1;
    visibility: visible;
    animation-timing-function: ease-in;
  }
}

.nav-button {
  font-size: 1.5vw;
  text-decoration: none;
  font-family: Space Grotesk;
  color: white;
  padding: 0.125em 0.5em;
}

</style>
