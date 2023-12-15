<script>
export default {
  name: "NavigationHeader",
};

</script>

<template>
  <div class="header-body">
    <nav class="header-content">
      <ul>
        <li><router-link to="/team">Team Selection</router-link></li>
        <li><router-link :to="{ name: 'roster', params: { selectedTeamName: `${$route.params.selectedTeamName ?? 'no-team'}` }}">Roster</router-link></li>
        <li><router-link :to="{ name: 'schedule', params:  { selectedTeamName: `${$route.params.selectedTeamName ?? 'no-team'}` }}">Schedule</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
a.router-link-active::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0px; /* Adjust the margin-top as needed */
  left: 0;
  background-color: #ffffff;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.header-body {
  background: linear-gradient(to right,#004d00,#2e7d32);
}

.header-content {
  display: flex;
  justify-content: left; /* Center align the list items horizontally */
  padding: 1.5% 0 1% 0;
  margin-left: 2%;
}

.header-content ul {
  display: flex; /* Display the list items in a row */
  justify-content: left; /* Center align the list items horizontally */
  position: relative;
}

.header-content li {
  margin: 0 35px;
  position: relative;
  padding-bottom: 3%;
}

.header-content li.current-page::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0px; /* Adjust the margin-top as needed */
  left: 0;
  background-color: #ffffff;
}
.header-content li.activity-link::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 7px solid #ffffff;
  top: 18%; /* Position the arrow just below the list item */
  left: 118%;
  transform: translateX(-50%);
}

.header-content a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
}
</style>