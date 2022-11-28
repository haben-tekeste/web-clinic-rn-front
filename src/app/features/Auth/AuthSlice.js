import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signup, signin, authLogin } from "../../../api/Auth/auth";
import { navigate } from "../../../../src/NavigationRoute";

const initialState = {
  isLogged: false,
  isLoading: false,
  error: null,
};

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, email, password, navigation }) => {
    const data = await signup(name, email, password);
    return data;
  }
);

export const signinUser = createAsyncThunk(
  "auth/signinUser",
  async ({ email, password }) => {
    const data = await signin(email, password);
    return data;
  }
);

export const tryLocalSignin = createAsyncThunk(
  "auth/tryLocalSignin",
  async () => {
    const result = await authLogin();
    return result;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const result = await autoLogout();
  return result;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearErr: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.error = null;

        state.isLoading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        navigate("Sign-in");
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;

        const err = action.error;
        state.error = err.message;
      });
    builder
      .addCase(signinUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogged = true;
        state.error = null;
        navigate("HomeScreen");
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.isLoading = false;
        const err = action.error;
        state.error = err.message;
      });
    builder.addCase(tryLocalSignin.fulfilled, (state, action) => {
      state.isLogged = true;
    });
    builder.addCase(tryLocalSignin.rejected, (state, action) => {
      state.isLogged = false;
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLogged = false;
      state.isLoading = true;
    });
  },
});

export const { clearErr } = authSlice.actions;
export default authSlice.reducer;
