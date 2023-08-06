import { reactive } from 'vue';

const state = reactive({
  ballAnimation: true,
  gameNameAnimation: {
    style: 'animation: textAppear 3s forwards 9s;'
  }

});

export default state;