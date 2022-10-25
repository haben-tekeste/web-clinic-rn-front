import React from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default ({ Data, width }) => {
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
            <TouchableOpacity>
              <View
                style={{
                  width: width / 5,
                  padding: 12,
                  borderWidth: index % 3 === 0 ? 1 : null,
                  borderColor: "#640F82",
                  marginLeft: 30,
                  marginRight: index === Data.length - 1 ? 30 : null,
                  borderRadius: 15,
                  backgroundColor:
                    index % 3 && index !== 2
                      ? "#DAD4DD"
                      : index === 2
                      ? "#d19aed"
                      : "#FFFFFF",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color:
                      index % 3 && index !== 2
                        ? "black"
                        : index === 2
                        ? "white"
                        : null,
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
