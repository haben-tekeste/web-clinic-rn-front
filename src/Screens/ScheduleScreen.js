import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={ScheduleStyle.container}>
      <Text>Schedule Screen</Text>
    </View>
  );
};

const ScheduleStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fcfaff",
    flex: 1,
  },
});
