import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={InboxStyle.container}>
      <Text>Inbox Screen</Text>
    </View>
  );
};

const InboxStyle = StyleSheet.create({
  container: {
    backgroundColor: "#f3eef6",
    flex: 1,
  },
});
