<script setup>

import Ball from '../components/Ball.vue';
import GameName from '../components/GameName.vue';
import state from '../stores/store'
import { onBeforeUnmount, ref } from 'vue';


onBeforeUnmount(() => {
  state.ballAnimation = false;
  state.gameNameAnimation = {
    opacity: 1,
    animation: 'none',
  }
  });

</script>

<template>

  <Ball v-if="state.ballAnimation"/>
  <GameName :style="state.gameNameAnimation"/>

</template>
