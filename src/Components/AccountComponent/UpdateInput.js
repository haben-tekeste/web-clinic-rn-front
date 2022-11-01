import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
export default ({ icon, val }) => {
  const [value, setValue] = useState(val);
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: "#AEAEAE",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color="black"
        style={{
          borderRightWidth: 2,
          paddingRight: 16,
          borderColor: "#AEAEAE",
        }}
      />
      <View style={{ padding: 20 }}>
        <TextInput
          value={value}
          style={{
            width: width / 1.5,
          }}
        />
      </View>
    </View>
  );
};
