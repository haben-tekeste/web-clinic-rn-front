import React from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default ({ Data, width, selectedHour, setSelectedHour }) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontFamily: "serif",
          fontSize: 15,
          marginHorizontal: 30,
          marginBottom: 15,
        }}
      >
        Working Hours
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={Data}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => setSelectedHour(item)}>
              <View
                style={{
                  width: width / 5,
                  padding: 12,
                  borderColor: "#640F82",
                  marginLeft: 30,
                  marginRight: index === Data.length - 1 ? 30 : null,
                  borderRadius: 15,
                  backgroundColor:
                    item === selectedHour ? "#dbafed" : "#DAD4DD",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: item === selectedHour ? "white" : "black",
                  }}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
