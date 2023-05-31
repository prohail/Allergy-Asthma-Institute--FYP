import axios from 'axios';

const apiService = {
  getAllAppointments: async (page) => {
    try {
      const response = await axios.get(`/api/appointments?page=${page}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw error;
    }
  },

  createAppointment: async (appointment) => {
    try {
      const response = await axios.post(`api/appointments`, appointment);
      return response.data;
    } catch (error) {
      console.error('Error creating appointment:', error);
      throw error;
    }
  },

  getAppointmentsByPatient: async (patientName) => {
    try {
      const response = await axios.get(`api/appointments?patient=${patientName}`);
      return response.data;
    } catch (error) {
      console.error('Error retrieving appointments:', error);
      throw error;
    }
  }
  // Add more API methods as needed
};

export default apiService;
