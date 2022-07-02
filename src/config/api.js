import axios from "axios";

const api = axios.create({
 baseURL: process.env.VUE_APP_DLSTM_API || "http://localhost:8000",
});

export default api;
