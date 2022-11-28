import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser, updateProfile } from "../../../api/Patient/patientApi";

const initialState = {
  user: {},
  isLoading: true,
  error: null,
};

export const fetchUser = createAsyncThunk("userSlice/fetchUser", async () => {
  const data = await getUser();
  return data;
});

export const updateUser = createAsyncThunk(
  "userSlice/updateUser",
  async (name, email) => {
    const data = await updateProfile(name, email);
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default userSlice.reducer;
