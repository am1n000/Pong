<script setup>

import Ball from '../components/Ball.vue';
import GameName from '../components/GameName.vue';
import state from '../stores/store'
import { onBeforeUnmount } from 'vue';

onBeforeUnmount(() => {
    state.ballAnimation = false;
    state.gameNameAnimation.style = 'none';
  });

</script>

<template>

  <GameName v-if="state.gameNameAnimation"/>
  <Ball v-if="state.ballAnimation"/>

</template>