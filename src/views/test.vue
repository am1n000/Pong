<template>
    <div ref="myElement" class="my-element">Element with Modified Top Position</div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const myElement = ref(null);
  
  // Function to modify the top position of the element
  const modifyTopPosition = (value) => {
    myElement.value.style.top = value;
  };
  
  // Call the modifyTopPosition function on component mount
  onMounted(() => {
    modifyTopPosition('100px'); // Set the top position to 100 pixels
  });
  
  // Clean up the changes on component unmount
  onBeforeUnmount(() => {
    modifyTopPosition('0'); // Reset the top position to its original value (e.g., 0 or unset)
  });
  </script>
  
  <style>
  .my-element {
    position: relative;
    top: 0; /* The top position will be modified programmatically */
  }
  </style>