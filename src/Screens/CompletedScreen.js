import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={CompletedStyle.container}>
      <View style={{ flex: 1, top: 100 }}>
        <Text>Completed Screen</Text>
      </View>
    </View>
  );
};

const CompletedStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fcfaff",
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "750",
    fontFamily: "serif",
  },
});
