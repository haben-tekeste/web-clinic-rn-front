import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={SubscriptionStyle.container}>
      <Text>Subscription Screen</Text>
    </View>
  );
};

const SubscriptionStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fcfaff",
    flex: 1,
  },
});
