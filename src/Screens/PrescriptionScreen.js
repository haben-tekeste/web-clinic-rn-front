import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={PrescriptionStyle.container}>
      <Text>Prescription Screen</Text>
    </View>
  );
};

const PrescriptionStyle = StyleSheet.create({
  container: {
    backgroundColor: "#f3eef6",
    flex: 1,
  },
});
