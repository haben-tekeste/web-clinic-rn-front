import React from "react";

import { View, Text, FlatList, TouchableOpacity } from "react-native";

const getDay = (year, month, date) => {
  const day = new Date(year, month, date).getDay();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekday[day];
};

export default ({ dates, year, selectMonth, width, selectedDay, setSelectedDay }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dates}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => setSelectedDay(item)}>
              <View
                style={{
                  width: width / 5,
                  height: width / 4,
                  borderColor: "#c",
                  marginLeft: 30,
                  marginRight: index === dates.length - 1 ? 30 : null,
                  borderRadius: 15,
                  backgroundColor: "#DAD4DD",
                  alignItems: "center",
                  justifyContent: "space-around",
                  backgroundColor: item === selectedDay ? "#dbafed": '#DAD4DD'
                }}
              >
                <Text
                  style={{
                    color: item === selectedDay ? "white" : "black",
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
                    color: item === selectedDay ? "white" : "black",
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
