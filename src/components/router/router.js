import { createWebHistory, createRouter } from "vue-router";
import RosterPage from "../RosterPage/Roster.vue";
import SchedulePage from "../SchedulePage/Schedule.vue";
import SelectTeam from "../MainPage/SelectTeam.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/team' },
    {
      name: 'roster',
      path: '/roster/:selectedTeamName',
      component: RosterPage,
      props: true,
    },
    {
      name: 'schedule',
      path: '/schedule/:selectedTeamName',
      component: SchedulePage,
      props: true,
    },
    {
      path: '/team',
      component: SelectTeam,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Check if a team is selected
  if (to.path !== '/team' && !to.params.selectedTeamName) {
    // Redirect to the team selection page if no team is selected
    next('/team');
  } else {
    // Allow access to the route
    next();
  }
});

export default router;