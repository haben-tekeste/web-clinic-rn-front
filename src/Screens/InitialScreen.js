import React, { useEffect } from "react";
import Lottie from "lottie-react-native";
import { tryLocalSignin } from "../app/features/Auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "../NavigationRoute";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchUser } from "../app/features/User/UserSlice";

export default function InitialScreen() {
  const { isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tryLocalSignin());
    dispatch(fetchUser());
  }, []);
  const autoSignin = () => {
    if (isLogged) {
      navigate("HomeScreen");
    } else {
      navigate("Sign-up");
    }
  };

  return (
    <Lottie
      source={require("../../assets/107925-doctor.json")}
      autoPlay
      loop={false}
      onAnimationFinish={autoSignin}
      style={{ backgroundColor: "#F7EEFF" }}
    />
  );
}
