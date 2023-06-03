import axios from "axios";

const apiService = {
  getAllAppointments: async (page, { user }) => {
    try {
      const response = await axios.get(`/api/appointments?page=${page}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching appointments:", error);
      throw error;
    }
  },

  getAppointmentsByPatient: async (patientName) => {
    try {
      const response = await axios.get(
        `api/appointments?patient=${patientName}`
      );
      return response.data;
    } catch (error) {
      console.error("Error retrieving appointments:", error);
      throw error;
    }
  },
  getAllRecords: async (page, { user }) => {
    try {
      const response = await axios.get(`/api/records?page=${page}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching records:", error);
      throw error;
    }
  },
};

export default apiService;
