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
    backgroundColor: "#f3eef6",
    flex: 1,
  },
});
