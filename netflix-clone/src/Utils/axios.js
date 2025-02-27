// eslint-disable-next-line no-unused-vars
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default axiosInstance;