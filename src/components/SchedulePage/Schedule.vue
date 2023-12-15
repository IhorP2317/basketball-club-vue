<script>
import TeamDAO from "@/Services/teamDAO";
import MatchesContainer from "./MatchesContainer.vue";
import MatchDAO from "@/Services/matchDAO";

export default {
  name: "SchedulePage",
  data() {
    return {
      matches: [],
      team: null, // Initialize team as null
      sortKey: null, // Variable to keep track of the current sort key
      sortAscending: true,
    };
  },
  props: {
    selectedTeamName: String, // Declare selectedTeamName as a prop
  },
  components: {
    MatchesContainer,
  },
  async created() {
    await this.fetchTeam(); // Wait for the team data to be fetched
    this.fetchMatchesByTeamId(this.team.id);
  },
  computed: {
    sortedMatches() {
      // Create a copy of the matches array to avoid modifying the original array
      let sortedMatches = [...this.matches];

      // Sort the matches based on the selected key and order
      if (this.sortKey) {
        sortedMatches.sort((a, b) => {
          const valueA = a[this.sortKey];
          const valueB = b[this.sortKey];

          // Check if the values are strings (e.g., for location and status)
          if (typeof valueA === 'string') {
            return this.sortAscending
              ? valueA.localeCompare(valueB)
              : valueB.localeCompare(valueA);
          }

          // For other types, assume numeric comparison (e.g., for time)
          return this.sortAscending ? valueA - valueB : valueB - valueA;
        });
      }

      return sortedMatches;
    },
  },
  methods: {
    async fetchMatchesByTeamId(teamId) {
      //await new Promise(resolve => setTimeout(resolve, 2000));
      this.matches = await MatchDAO.getMatchesByTeamId(teamId);
    },

    async fetchTeam() {
      //await new Promise(resolve => setTimeout(resolve, 2000));
      this.team = await TeamDAO.getTeamByName(this.selectedTeamName);
    },
    sortMatches(key) {
      // If the same key is clicked, toggle the sort order; otherwise, set the order to ascending
      this.sortAscending = key === this.sortKey ? !this.sortAscending : true;

      // Update the sort key
      this.sortKey = key;
    },
  },
};
</script>
<template>
  <div>
    <h1>Schedule</h1>
    <div id="sort-bar" class="sort-bar">
      <span>Sort by : </span>
      <a @click="sortMatches('startTime')" class="sort" title="Sort by Time">Time ⇵</a>
      <a @click="sortMatches('location')" class="sort" title="Sort by Location">Location ⇵</a>
      <a @click="sortMatches('status')" class="sort" title="Sort by Status">Status ⇵</a>

    </div>
    <div class="schedule-container">
      <div class="matches-spacing-container">
        <h2>Result</h2>
        <template v-if="matches && matches.length > 0">
          <MatchesContainer :matches="sortedMatches" />
        </template>
        <template v-else>
          <p class="no-matches-message">Matches are Not Available</p>
        </template>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1 {
  text-align: center;
  font-size: 48px;
  margin-top: 3%;
}

.sort-bar {
  display: flex;
  margin-top: 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.no-matches-message{
  color: #ffffff;
  font-size: 20px;
}

.sort {
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
}

.sort > a {
  font-weight: 430;
  color: black;
  margin: 0 10px 0 10px;
}

.sort > a:hover {
  transition: 500ms;
  text-decoration: none;
  padding-bottom: 5px;
  color: rgb(0, 123, 255);
}

.sort > span {
  margin: 0 10px 0 10px;
}

a:hover {
  cursor: pointer;
}

.card {
  opacity: 94%;
}

.schedule-container {
  display: flex;
  background: linear-gradient(to bottom, #000000, #555555); /* Gradient from black to a darker shade of black */
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.schedule-container h2 {
  text-align: center;
  font-size: 36px;
  color: #FFFFFF;
}
.matches-spacing-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin:  25px auto;
  justify-content: center;
  gap: 15px;
}
</style>
