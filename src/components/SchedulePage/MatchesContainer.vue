<script>
import MatchItem from "./MatchItem.vue";

export default {
    name: "MatchesContainer",
    components: { MatchItem },
    props: {
    matches: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<template>
    <div class="matches-container">
        <div class="matches-headers">
            <p class="time-header">TIME</p>
            <p class="location-header">LOCATION</p>
            <p class="team-header">HOME TEAM</p>
            <p></p>
            <p class="team-header">AWAY TEAM</p>
            <p class="score-header">SCORE</p>
            <p class="status-header">STATUS</p>
        </div>
        <MatchItem
        v-for="match in matches"
        :key="match.id"
        :time="match.startTime"
        :location="match.location"
        :homeTeamId="match.homeTeamId"
        :awayTeamId="match.awayTeamId"
        :homeTeamScore="match.homeTeamScore"
        :awayTeamScore="match.awayTeamScore"
        :status="match.status"
      />
</div>
</template>
<style scoped>

.matches-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.matches-headers {
  display: grid;
  grid-template-columns: 248px 248px 248px 12px 248px 248px 248px;
  align-items: center;
  color: #FFFFFF;
}

.match-header {
  font-size: 18px;
}
</style>