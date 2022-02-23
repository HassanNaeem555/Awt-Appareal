import axios from "./axios";

export const postApi = async (url, data, navigate_url, navigate) => {
  try {
    const response = await axios.post(url, data);
    if (response.status === 200) {
      if (navigate_url) {
        navigate(navigate_url);
        return;
      }
      if (response.data) {
        return response?.data;
      }
      return response;
    }
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      return error;
    }
  }
};

export const getApi = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error.response.data;
  }
};
