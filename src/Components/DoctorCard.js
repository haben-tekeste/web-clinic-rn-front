import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image, Badge } from "react-native-elements";

const DoctorCard = ({ item }) => {
  return (
    <View style={{ ...DoctorStyles.card, backgroundColor: item.color }}>
      <Image
        source={require("../../assets/femaleDoctor.png")}
        style={DoctorStyles.img}
      />
      <View style={DoctorStyles.tag}>
        <Text style={{ textAlign: "center", fontFamily: "serif" }}>
          Dr.{item.name}
        </Text>
        <Text
          style={{ color: "#AEAEAE", textAlign: "center", fontFamily: "serif" }}
        >
          {item.position}
        </Text>
      </View>
      <Badge
        value={item.rating}
        status="success"
        containerStyle={DoctorStyles.badge}
      />
    </View>
  );
};

const DoctorStyles = StyleSheet.create({
  img: {
    width: 200,
    height: 220,
  },
  card: {
    height: 220,
    width: 210,
    marginHorizontal: 20,
    borderColor: "red",
    borderRadius: 15,
    position: "relative",
  },
  tag: {
    width: 180,
    height: 45,
    backgroundColor: "white",
    position: "absolute",
    bottom: 8,
    left: 10,
    right: 10,
    borderRadius: 8,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 8,
  },
});

export default DoctorCard;
