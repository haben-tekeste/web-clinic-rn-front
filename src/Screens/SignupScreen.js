import React from "react";
import Credentials from "../Components/Credentials";

export default ({ navigation }) => {
  return (
    <Credentials
      navigation={navigation}
      navigate="Sign-in"
      sign="up"
      header="Create an account"
      subHeader=""
      goto="in"
    />
  );
};
