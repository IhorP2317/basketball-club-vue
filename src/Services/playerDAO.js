import api from './axiosInstance';

class PlayerDAO {
  async getPlayerByTeamId(teamId) {
    console.log('Get players by team id: ' + teamId);
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await api.get('/players/team/' + teamId);
      return response.data;
    } catch (error) {
      console.error('Error fetching players:', error.toString());
    }
    return [];
  }
}

export default new PlayerDAO();