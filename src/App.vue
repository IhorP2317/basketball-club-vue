<template>
  <div>
    <NavigationHeader>
    </NavigationHeader>
    <router-view />
  </div>
</template>

<script>
import NavigationHeader from "@/components/NavigationHeader.vue";

export default {
  name: "App",
  components: {
    NavigationHeader,
  },
};
</script>

<style>
/* Your styles go here */
</style>