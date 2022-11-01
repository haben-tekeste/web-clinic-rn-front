import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import AccountOptions from "../Components/AccountComponent/AccountOptions";
import Avatar from "../Components/AccountComponent/Avatar";

export default ({ navigation }) => {
  return (
    <View style={AccountStyle.container}>
      <Avatar navigation={navigation} />
      <AccountOptions navigation={navigation} />
    </View>
  );
};

const AccountStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F7EEFF",
    justifyContent: "space-around",
    flex: 1,
  },
});
