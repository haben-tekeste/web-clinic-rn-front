import React from "react";
import { View, Text } from "react-native";
import Credentials from "../Components/Credentials";

export default ({ navigation }) => {
  return (
    <Credentials
      navigation={navigation}
      navigate="Sign-up"
      sign="in"
      header="Sign In"
      subHeader="Please Sign In To Continue"
      goto="up"
    />
  );
};
