import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={CancelledStyle.container}>
      <View style={{ flex: 1, top: 100 }}>
        <Text>Cancelled Screen</Text>
      </View>
    </View>
  );
};

const CancelledStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F7EEFF",
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "750",
    fontFamily: "serif",
  },
});
