import api from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("token", value);
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (name, email, password) => {
  try {
    const { data } = await api.post("/sign-up", {
      name,
      email,
      password,
    });
    return data;
  } catch (e) {
    return Promise.reject(e.response.data);
  }
};

export const signin = async (email, password) => {
  try {
    const { data } = await api.post("/sign-in", {
      email,
      password,
    });
    if (data.success) {
      storeData(data.token);
    }
    return data;
  } catch (e) {
    return Promise.reject(e.response.data);
  }
};

export const authLogin = async () => {
  {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      return token;
    } else {
      throw new Error("no token");
    }
  }
};

export const autoLogout = async () => {
  {
    await AsyncStorage.removeItem("token");
  }
};
