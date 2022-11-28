import api from "../api";

export const getTopDoctors = async () => {
  try {
    const { data } = await api.get("/patient/top-doctors");
    return data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const getAllDoctors = async () => {
  try {
    const { data } = await api.get("/patient/doctors");
    return data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const getDoctor = async (id) => {
  try {
    const { data } = await api.get("/patient/doctor/" + id);
    return data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const getFutureNearAppointements = async () => {
  try {
    const { data } = await api.get("/patient/appointments");

    return data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const getCancelledAppointments = async () => {
  try {
    const { data } = await api.get("/patient/cancel-appointments");
    return data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const getCompletedAppointments = async () => {
  try {
    const { data } = await api.get("/patient/completed-appointments");
    return data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const getUser = async () => {
  try {
    const { data } = await api.get("patient/profile");
    return data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

export const updateProfile = async (name, email) => {
  try {
    const { data } = await api.put("patient/profile");
    return data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};
