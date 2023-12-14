<script>
import PlayerItem from "./PlayerItem.vue";

export default {
  name: "PlayerContainer",
  components: {
    PlayerItem,
  },
  props: {
    players: {
      type: Array,
      default: () => [],
    },
    filteredPlayers: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    displayPlayers() {
      return this.filteredPlayers.length > 0 ? this.filteredPlayers : this.players;
    },
    showNoPlayersMessage() {
      return this.filteredPlayers.length === 0 && this.players.length > 0;
    },
  },
  methods: {
    getPlayerFullName(player) {
      return `${player.firstName} ${player.lastName}`;
    },
  },
};
</script>

<template>
  <div class="roster-container">
    <div class="team-spacing-container">
      <!-- Use v-for to iterate over players and pass data to PlayerItem -->
      <PlayerItem
        v-for="player in players"
        :key="player.id"
        :fullName="getPlayerFullName(player)"
        :position="player.position"
        :height="player.height"
        :weight="player.weight"
        :country="player.country"
      />
      <p v-if="!showNoPlayersMessage" class="no-players-message">No players found for the selected position or team</p>
    </div>
  </div>
</template>

<style scoped>
.roster-container {
  display: flex;
  background: linear-gradient(to bottom, #000000, #555555); /* Gradient from black to a darker shade of black */
  justify-content: center;
}
.team-spacing-container{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 900px;
  margin: 0 auto;
  justify-content: center;
  gap: 15px;
  margin: 25px 0;
}
.no-players-message{
  color: #ffffff;
  font-size: 20px;
}
</style>
