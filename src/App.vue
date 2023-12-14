<template>
  <div id="app">
    <NavigationHeader>
    </NavigationHeader>
    <router-view />
  </div>
</template>

<script>
import NavigationHeader from './components/NavigationHeader.vue';

export default {
  components: {
    NavigationHeader,
  },
};
</script>

<style>
/* Your styles go here */
</style>