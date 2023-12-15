<script>
import TeamDAO from "@/Services/teamDAO";

export default {
  name: "SelectTeam",
  data() {
    return {
      teamName: null,
      selectedTeamName: null,
      selectedTeam: {},
    };
  },
  methods: {
    async submitTeam() {
      const exists = await TeamDAO.isTeamExists(this.teamName);

      if (exists) {
        this.selectedTeamName = this.teamName;
        this.$router.push({ name: 'roster', params: { selectedTeamName: this.teamName } });
      } else {
        alert("This team does not exist! Select another team.");
        this.selectedTeamName = null;
      }
    },
  },
};
</script>
<template>
  <div class="select-team-content">
    <h1>Select Team</h1>
    <img :src="require('@/assets/FBU.png')" alt="FBU">
    <p class="description">
      Dear fan, follow your favorite team and become a part of the community! Embrace the spirit of camaraderie as you connect with fellow enthusiasts who share your passion. Join us in celebrating victories, supporting through challenges, and fostering a sense of belonging. Your dedication makes the community stronger. Together, let's create unforgettable moments with the team you love.<br>#TeamSpirit #CommunityLove
    </p>
    <div class="input-row">
      <input class="team-input" type="text" v-model="teamName" required placeholder="Enter Team Name..." />
      <button class="primary-button" @click="submitTeam">Select</button>
    </div>
  </div>
</template>
<style scoped>
.select-team-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.primary-button {
  background-color: #004d00;
  border-radius: 12px;
  width: 130px;
  height: 40px;
  color: #ffffff;
  border: 2px solid #004d00;
  font-size: 18px; /* Increased font size */
  cursor: pointer;
}

h1 {
  text-align: center;
  font-size: 48px;
  margin-top: 3%;
  margin-bottom: 1%;
}

.description {
  text-align: center; /* Center the description text */
  font-size: 25px; /* Increased font size */
  margin-bottom: 15px;
}

.team-input {
  border-radius: 12px;
  border: 2px solid #004d00;
  padding: 10px; /* Increased padding for a bigger input */
  width: 250px; /* Adjusted width */
  margin-right: 20px; /* Added margin to separate input and button */
}

.input-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2% 0;
}

img {
  margin-bottom: 15px;
}
</style>