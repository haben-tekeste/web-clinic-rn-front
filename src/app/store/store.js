import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/AuthSlice";
import userReducer from "../features/User/UserSlice";
import doctorReducer from "../features/Doctor/DoctorSlice";
import AppointementReducer from "../features/Appointement/AppointementSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    doctor: doctorReducer,
    appointements: AppointementReducer,
  },
});
