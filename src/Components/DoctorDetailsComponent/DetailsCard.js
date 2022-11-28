import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

export default ({ width, height, doctor }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <LinearGradient
        colors={["rgba(100, 15, 130, 0.20)", "white"]}
        style={{
          ...DetailsStyle.cardStyle,
          width: width / 1.15,
          height: height / 2.15,
        }}
        locations={[0.1, 0.7]}
      >
        <ImageBackground
          style={{
            width: 130,
            height: 130,
            marginBottom: 12,
            backgroundColor: "#f7ebf9",
            borderRadius: 130 / 2,
            alignItems: "center",
            justifyContent: "center",
            ...DetailsStyle.boxWithShadow,
          }}
        >
          <Image
            source={{
              uri: `https://b01c-195-229-151-165.ap.ngrok.io/${doctor.img}`,
            }}
            style={{ width: 130, height: 130, borderRadius: 130 / 2 }}
          />
        </ImageBackground>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", fontFamily: "serif" }}
          >
            Dr. {doctor.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              fontFamily: "serif",
              color: "#AEAEAE",
            }}
          >
            {doctor.speciality}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            marginBottom: 25,
            flexDirection: "row",
          }}
        >
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
              color: "black",
            }}
          >
            {doctor.rating} / {doctor.numberOfVotes} voters
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const DetailsStyle = StyleSheet.create({
  cardStyle: {
    borderRadius: 15,
    alignItems: "center",
    padding: 10,
    position: "relative",
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardBtnStyle: {
    marginTop: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
