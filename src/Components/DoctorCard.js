import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Text, Image, Badge } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

const DoctorCard = ({ item }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        ...DoctorStyles.card,
        backgroundColor: item.color,
        width: width / 2,
        height: height / 4,
      }}
    >
      <Image
        source={require("../../assets/femaleDoctor.png")}
        style={DoctorStyles.img}
      />
      <View style={{ ...DoctorStyles.tag, height: height / 12, padding: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Dr.{item.name}</Text>
        <Text style={{ color: "#AEAEAE", fontWeight: "bold" }}>
          {item.position}
        </Text>
        <View style={{ flexDirection: "row", ...DoctorStyles.badge }}>
          <AntDesign
            name="star"
            size={24}
            color="#f4c58b"
            style={{ marginHorizontal: 5 }}
          />
          <Text
            style={{
              marginHorizontal: 5,
              fontFamily: "serif",
              fontWeight: "bold",
            }}
          >
            4.5
          </Text>
        </View>
      </View>
    </View>
  );
};

const DoctorStyles = StyleSheet.create({
  img: {
    width: 200,
    height: 220,
  },
  card: {
    marginHorizontal: 20,
    borderColor: "red",
    borderRadius: 15,
    position: "relative",
  },
  tag: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 8,
    left: 10,
    right: 10,
    borderRadius: 8,
  },
  badge: {
    position: "absolute",
    bottom: 10,
    right: 10,
    alignItems: "center",
  },
});

export default DoctorCard;
