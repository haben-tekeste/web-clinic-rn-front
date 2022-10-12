import React from "react";

import { View, Text, FlatList, TouchableOpacity } from "react-native";

const getDay = (year, month, date) => {
  const day = new Date(year, month, date).getDay();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekday[day];
};

export default ({ dates, year, selectMonth, width }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dates}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => console.log("Hi")}>
              <View
                style={{
                  width: width / 5,
                  height: width / 4,
                  borderWidth: item % 3 === 0 ? 1 : null,
                  marginLeft: 30,
                  marginRight: index === dates.length - 1 ? 30 : null,
                  borderRadius: 15,
                  backgroundColor:
                    item % 3 && item !== 7
                      ? "#f2e3f8"
                      : item === 7
                      ? "#d19aed"
                      : null,
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Text
                  style={{
                    color: item === 7 ? "white" : "black",
                    fontFamily: "serif",
                    fontSize: 25,
                  }}
                >
                  {item}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontFamily: "serif",
                    fontSize: 15,
                    color: item === 7 ? "white" : "black",
                  }}
                >
                  {getDay(year, selectMonth, item)}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
