<script>
import PlayerContainer from "../RosterPage/PlayersConteiner.vue";
import CoachConteiner from "../RosterPage/CoachConteiner.vue";
import PlayerDAO from "../../Services/playerDAO.js";
import CoachDAO from "../../Services/coachDAO.js";
import { mapState } from 'vuex';


export default {
  name: "RosterPage",
  components: {
    PlayerContainer,
    CoachConteiner,
  },
  data() {
    return {
      team: {},
      players: [],
      coach: {},
      filteredPlayers: [], // New array to store filtered players
    };
  },
  computed: {
    ...mapState(['isLoading']),
  },
  created() {
    // Set isLoading to true
    this.$store.commit('startLoading');

    // Simulate an asynchronous operation (e.g., fetching data)
    this.fetchPlayersByTeamId(1);
    this.fetchCoachByTeamId(1);

    // Simulate the completion of the asynchronous operation
    // by setting isLoading to false after a delay (adjust as needed)
    setTimeout(() => {
      this.$store.commit('stopLoading');
    }, 2000); // Adjust the delay as needed
  },
  methods: {
    async fetchPlayersByTeamId(teamId) {
      this.players = await PlayerDAO.getPlayerByTeamId(teamId);
      this.filteredPlayers = [...this.players]; // Initialize filteredPlayers with all players
    },
    async fetchCoachByTeamId(teamId) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      this.coach = await CoachDAO.getCoachByTeamId(teamId);
    },
    filterPlayersByPosition(position) {
      if (position === "All players") {
        this.filteredPlayers = [...this.players];
      } else {
        this.filteredPlayers = this.players.filter(player => player.position === position);
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Roster</h1>
    <div id="filter-bar" class="filter-bar">
      <span>Filter by: </span>
      <a @click="filterPlayersByPosition('All players')" class="filter" title="Filter by All players">All players </a>
      <a @click="filterPlayersByPosition('Guard')" class="filter" title="Filter by guards">Guards</a>
      <a @click="filterPlayersByPosition('Forward')" class="filter" title="Filter by forwards">Forwards</a>
      <a @click="filterPlayersByPosition('Center')" class="filter" title="Filter by centers">Centers</a>
    </div>
    <div v-if="isLoading" class="loading-indicator">
      Loading...
    </div>
    <PlayerContainer :players="filteredPlayers" />
    <h1>Coach</h1>
    <CoachConteiner :coach="coach" />
  </div>
</template>

<style scoped>
.loading-indicator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
h1 {
  text-align: center;
  font-size: 48px;
  margin-top: 3%;
}

.filter-bar {
  display: flex;
  margin-top: 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.filter {
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
}

.filter > a {
  font-weight: 430;
  color: black;
  margin: 0 10px 0 10px;
}

.filter > a:hover {
  transition: 500ms;
  text-decoration: none;
  padding-bottom: 5px;
  color: rgb(0, 123, 255);
}

.filter > span {
  margin: 0 10px 0 10px;
}

a:hover {
  cursor: pointer;
}

.card {
  opacity: 94%;
}
</style>