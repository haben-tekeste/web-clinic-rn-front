import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default ({ width, height }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <LinearGradient
        colors={["rgb(243, 237, 249)", "white"]}
        style={{
          ...DetailsStyle.cardStyle,
          width: width / 1.15,
          height: height / 2.15,
        }}
        locations={[0.3, 0.7]}
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
            source={require("../../Images/avatar.png")}
            style={{ width: 120, height: 120 }}
          />
        </ImageBackground>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", fontFamily: "serif" }}
          >
            Dr. Ferid Amir
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              fontFamily: "serif",
              color: "#AEAEAE",
            }}
          >
            Psychatrist
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            marginBottom: 25,
          }}
        >
          <TouchableOpacity
            style={{
              ...DetailsStyle.cardBtnStyle,
              width: width / 1.5,
              borderColor: "#AEAEAE",
              borderWidth: 1,
            }}
          >
            <Text>Join Live Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...DetailsStyle.cardBtnStyle,
              width: width / 1.5,
              backgroundColor: "#a355e6",
            }}
          >
            <Text style={{ color: "white", fontWeight: "400" }}>
              Start Conversation
            </Text>
          </TouchableOpacity>
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
