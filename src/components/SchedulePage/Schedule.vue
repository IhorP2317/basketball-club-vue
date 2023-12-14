<script>

import MatchesContainer from "./MatchesContainer.vue"
import MatchDAO from "@/Services/matchDAO";


export default {
  name: "SchedulePage",
  data () {
    return {
      matches: [],
    };
  },
  components: {
    MatchesContainer,
  },
  created() {
  this.fetchMatchesByTeamId(1);
},
  methods: {
    async fetchMatchesByTeamId(teamId) {
      //await new Promise(resolve => setTimeout(resolve, 2000));
      this.matches = await MatchDAO.getMatchesByTeamId(teamId);
    },
  },
}
</script>
<template>
  <div>
    <h1>Schedule</h1>
    <div id="sort-bar" class="sort-bar">
      <span>Sort by : </span>
      <a  class="sort" title="Sort by Time">Time ⇵</a>
      <a  class="sort" title="Sort by Location">Location ⇵</a>
      <a  class="sort" title="Sort by Status">Status ⇵</a>

    </div>
    <div class="schedule-container">
      <div class="matches-spacing-container">
        <h2>Result</h2>
        <template v-if="matches && matches.length > 0">
          <MatchesContainer :matches="matches" />
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
