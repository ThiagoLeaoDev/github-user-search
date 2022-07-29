import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Basic ${process.env.GITHUB_KEY}`
  },
});

export default api;