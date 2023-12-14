import api from './axiosInstance';

class CoachDAO {
  async getCoachByTeamId(teamId) {
    console.log('Get coach by team id: ' + teamId);
    try {
      const response = await api.get('/coaches/team/' + teamId);
      return response.data; // Assuming the API response is a single object
    } catch (error) {
      console.error('Error fetching coach:', error.toString());
    }
  }
}

export default new CoachDAO();