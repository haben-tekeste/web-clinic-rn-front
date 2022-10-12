import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={BillStyle.container}>
      <Text>Bill Screen</Text>
    </View>
  );
};

const BillStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fcfaff",
    flex: 1,
  },
});
