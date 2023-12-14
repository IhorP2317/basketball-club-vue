import api from './axiosInstance';

class TeamDAO {
  async getTeamById(id) {
    console.log('Get team by id: ' + id);
    try {
      const response = await api.get('/teams/' + id);
      return response.data; // Assuming the API response is a single object
    } catch (error) {
      console.error('Error fetching team:', error.toString());
    }
  }
  async getTeamByName(name) {
    console.log('Get team by name: ' + name);
    try {
      const response = await api.get('/teams/name/' + name);
      return response.data; // Assuming the API response is a single object
    } catch (error) {
      console.error('Error fetching team:', error.toString());
    }
  }
  async isTeamExists(name) {
    console.log('Get team existance by name: ' + name);
    try {
      const response = await api.get('/teams/exists/' + name);
      return response.data; // Assuming the API response is a single object
    } catch (error) {
      console.error('Error fetching team existance:', error.toString());
    }
  }
}

export default new TeamDAO();