<script>
import TeamDAO from "@/Services/teamDAO";

export default {
  name: "MatchItem",
  data() {
    return {
      homeTeamName: null,
      awayTeamName: null,
    };
  },
  props: {
    time: String,
    location: String,
    homeTeamId: String,
    awayTeamId: String,
    homeTeamScore: Number,
    awayTeamScore: Number,
    status: String,
  },
  async created() {
    this.homeTeamName = await this.fetchTeamById(this.homeTeamId);
    this.awayTeamName = await this.fetchTeamById(this.awayTeamId);
  },
  methods: {
    async fetchTeamById(teamId) {
      try {
        const team = await TeamDAO.getTeamById(teamId);
        return team.name;
      } catch (error) {
        console.error("Error fetching team:", error.toString());
        return null;
      }
    },
  },
};
</script>

<template>
  <div class="match-row">
    <p class="match-column">{{ time }}</p>
    <p class="match-column">{{ location }}</p>
    <div class="team-content match-column">
      <img :src="require('@/assets/HomeTeam.png')" alt="Home Team">
      <p>{{ homeTeamName }}</p>
    </div>
    <h2>VS</h2>
    <div class="team-content match-column">
      <img :src="require('@/assets/AwayTeam.png')" alt="Away Team">
      <p>{{ awayTeamName }}</p>
    </div>
    <p class="match-column">{{ homeTeamScore }} / {{ awayTeamScore }}</p>
    <p class="match-column">{{ status }}</p>
  </div>
</template>

<style scoped>
.match-row {
  border: 3px solid #2e7d32;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: #fff;
  align-items: center;
  text-align: center;
  color: #8BC34A;
  display: grid;
  grid-template-columns: 248px 248px 248px 12px 248px 248px 248px;
  margin-top: 20px; /* Adjust as needed */
  margin: 15px auto; /* Center the match-row */
  padding: 10px 0;
}

h2 {
  font-size: 24px; /* Adjust the font size of VS */
}

.team-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.team-content img {
  width: 85px;
  height: 85px;
}

.match-row p {
  font-size: 20px;
  gap: 10px;
}

.match-column {
  margin: auto 15px;
  width:200px;
  flex-grow: 1; /* Distribute space equally */
}
</style>