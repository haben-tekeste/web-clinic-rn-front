import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

export default ({ navigation }) => {
  return (
    <View style={AccountStyle.container}>
      <Text>Account Screen</Text>
    </View>
  );
};

const AccountStyle = StyleSheet.create({
  container: {
    backgroundColor: "#f3eef6",
    flex: 1,
  },
});
