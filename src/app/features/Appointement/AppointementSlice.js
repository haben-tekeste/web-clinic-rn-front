import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCancelledAppointments,
  getCompletedAppointments,
  getFutureNearAppointements,
} from "../../../api/Patient/patientApi";

const initialState = {
  appointments: {
    nearestAppointments: [],
    futureAppointments: [],
    cancelledAppointments: [],
    completedAppointments: [],
  },
  isLoading: true,
  error: null,
};

export const fetchFutureNearAppointements = createAsyncThunk(
  "appointementSlice/fetchFutureNearAppointements",
  async () => {
    const data = await getFutureNearAppointements();
    return data;
  }
);

export const fetchCancelledAppointments = createAsyncThunk(
  "appointementSlice/fetchCancelledAppointments",
  async () => {
    const data = await getCancelledAppointments();
    return data;
  }
);

export const fetchCompletedAppointments = createAsyncThunk(
  "appointementSlice/fetchCompletedAppointments",
  async () => {
    const data = await getCompletedAppointments();
    return data;
  }
);

const appointementSlice = createSlice({
  name: "appointements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFutureNearAppointements.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFutureNearAppointements.fulfilled, (state, action) => {
        state.isLoading = false;
        const { data } = action.payload;
        state.appointments.nearestAppointments = data.nearestAppointments;
        state.appointments.futureAppointments = data.futureAppointments;
      })
      .addCase(fetchFutureNearAppointements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(fetchCancelledAppointments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCancelledAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        const { data } = action.payload;
        state.appointments.cancelledAppointments = data;
      })
      .addCase(fetchCancelledAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(fetchCompletedAppointments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCompletedAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        const { data } = action.payload;
        state.appointments.completedAppointments = data;
      })
      .addCase(fetchCompletedAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default appointementSlice.reducer;
