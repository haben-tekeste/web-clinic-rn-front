import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllDoctors,
  getDoctor,
  getTopDoctors,
} from "../../../api/Patient/patientApi";

const initialState = {
  doctors: { topDoctors: [], allDoctors: [], doctor: {} },
  isLoading: true,
  error: null,
};

export const fetchTopDoctors = createAsyncThunk(
  "doctorSlice/fetchTopDoctors",
  async () => {
    const { data } = await getTopDoctors();
    return data;
  }
);

export const fetchAllDoctors = createAsyncThunk(
  "doctorSlice/fetchAllDoctors",
  async () => {
    const { data } = await getAllDoctors();
    return data;
  }
);

export const fetchDoctor = createAsyncThunk(
  "doctorSlice/fetchDoctor",
  async (doctorId) => {
    const { data } = await getDoctor(doctorId);
    return data;
  }
);

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopDoctors.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTopDoctors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.doctors.topDoctors = action.payload;
    });
    builder.addCase(fetchTopDoctors.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(fetchAllDoctors.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllDoctors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.doctors.allDoctors = action.payload;
    });
    builder.addCase(fetchAllDoctors.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(fetchDoctor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDoctor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.doctors.doctor = action.payload;
    });
    builder.addCase(fetchDoctor.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default doctorSlice.reducer;
