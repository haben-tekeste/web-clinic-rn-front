import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = "https://f6d8-195-229-151-165.ap.ngrok.io";

const instance = axios.create({
  baseURL: url,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
