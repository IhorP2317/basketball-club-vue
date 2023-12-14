<script>
export default {
  name: "PlayerItem",
  props: {
    fullName: String,
    position: String,
    height: String,
    weight: String,
    country: String,
  },
  computed: {
    playerImageSrc() {
      // Determine the image source based on the player's position
      if (this.position === "Guard") {
        return require('@/assets/guards.png');
      } else if (this.position === "Forward") {
        return require('@/assets/forwards.png');
      } else if (this.position === "Center") {
        return require('@/assets/centers.png');
      } else {
        // Default image if the position is not recognized
        return require('@/assets/guards.png');
      }
    },
  },
};
</script>

<template>
  <div class="player-item-conteiner">
    <img :src="playerImageSrc" alt="Player Image" class="player-image">
    <div class="player-divider">
      <p class="position">{{ position }}</p>
    </div>
    <div class="player-info">
      <p>{{ fullName }}</p>
      <p>Height: {{ height }}</p>
      <p>Weight: {{ weight }}</p>
      <p>Country: {{ country }}</p>
    </div>
  </div>
</template>
<style scoped>
.player-item-conteiner{
   /* Adjust the width and margin as needed */
  border: 3px solid #2e7d32;
  border-radius: 22px;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  background-color: #fff;
  align-items: center;
  text-align: center;
}
.player-divider {
  border: 1px solid #2e7d32;
  margin: 4px 0;
  border-left: none ;
  border-right: none;
}

.player-image {
  width: 150px; /* Adjusted width */
  height: 150px; /* Adjusted height */
  padding: 3px 10px;
}
.position{
  padding: 5px 0;
}
.player-info{
  padding: 3px 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

p {
  color: #8BC34A;
}
</style>