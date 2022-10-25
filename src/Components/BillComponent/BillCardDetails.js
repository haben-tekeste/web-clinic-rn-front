import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ header, data }) => {
  return (
    <View>
      <Text style={{ fontSize: 10, fontWeight: "bold", color: "#AEAEAE" }}>
        {header.toUpperCase()}
      </Text>
      <Text style={{ fontSize: 15 }}>{data.toUpperCase()}</Text>
    </View>
  );
};
