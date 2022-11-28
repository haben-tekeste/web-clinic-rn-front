import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { useSelector } from "react-redux";
import AccountOptions from "../Components/AccountComponent/AccountOptions";
import Avatar from "../Components/AccountComponent/Avatar";

export default ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <View style={AccountStyle.container}>
      <Avatar
        navigation={navigation}
        userName={user.data.name}
        userEmail={user.data.email}
      />
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
