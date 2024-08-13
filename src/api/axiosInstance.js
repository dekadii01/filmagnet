import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "655dc4575ad353ff90711cbc0ce0a048",
  },
});

export default axiosInstance;
