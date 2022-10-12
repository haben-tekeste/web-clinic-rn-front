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
                  marginLeft: 30,
                  marginRight: index === Data.length - 1 ? 30 : null,
                  borderRadius: 15,
                  backgroundColor:
                    index % 3 && index !== 2
                      ? "#f2e3f8"
                      : index === 2
                      ? "#d19aed"
                      : null,
                  alignItems: "center",
                }}
              >
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
