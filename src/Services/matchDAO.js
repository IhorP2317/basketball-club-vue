import api from './axiosInstance';

class MatchDAO {
    async getMatchesByTeamId(teamId) {
        console.log('Get matches by team id: ' + teamId);
        try {
          //  await new Promise(resolve => setTimeout(resolve, 2000));
          const response = await api.get('/matches/team/' + teamId);
          return response.data;
        } catch (error) {
          console.error('Error fetching matches:', error.toString());
        }
        return [];
      }
}

export default new MatchDAO();