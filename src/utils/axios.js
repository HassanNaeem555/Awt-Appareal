import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dev73.myprojectstaging.com/AwtbAppareal/public/api/",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
