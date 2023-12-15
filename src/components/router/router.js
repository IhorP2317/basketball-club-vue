import { createWebHistory, createRouter } from "vue-router";
import RosterPage from "../RosterPage/Roster.vue";
import SchedulePage from "../SchedulePage/Schedule.vue";
import SelectTeam from "../MainPage/SelectTeam.vue";
import TeamDAO from "@/Services/teamDAO";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/team' },
    {
      name: 'roster',
      path: '/roster/:selectedTeamName',
      component: RosterPage,
      props: true, // Enable props to pass $route.params as props
      beforeEnter: async (to, from, next) => {
        // Check if a team is selected
        const exists = await TeamDAO.isTeamExists(to.params.selectedTeamName);

        if (exists) {
          next(); // Allow access to the route
        } else {
          // Redirect to the team selection page if the team does not exist
          next('/team');
        }
      },
    },
    {
      name: 'schedule',
      path: '/schedule/:selectedTeamName',
      component: SchedulePage,
      props: true,
      beforeEnter: async (to, from, next) => {
        // Check if a team is selected
        const exists = await TeamDAO.isTeamExists(to.params.selectedTeamName);

        if (exists) {
          next(); // Allow access to the route
        } else {
          // Redirect to the team selection page if the team does not exist
          next('/team');
        }
      },
    },
    {
      path: '/team',
      component: SelectTeam,
    },
  ],
});

export default router;