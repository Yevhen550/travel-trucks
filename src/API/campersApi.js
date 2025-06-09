import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = async (page = 1, limit = 3) => {
  const response = await axios.get(`${BASE_URL}/campers`, {
    params: {
      page,
      limit,
    },
  });

  return response.data;
};
