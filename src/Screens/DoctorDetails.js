import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

const DetailsCard = ({ width, height }) => {
  return (
    <LinearGradient
      colors={["rgba(236,200,253,0.5)", "white"]}
      style={{
        ...DetailsStyle.cardStyle,
        width: width / 1.15,
        height: height / 2,
      }}
      locations={[0.1, 0.6]}
    >
      <ImageBackground
        style={{
          width: 130,
          height: 130,
          marginBottom: 12,
          backgroundColor: "#ECC8FD",
          borderRadius: 130 / 2,
          alignItems: "center",
          justifyContent: "center",
          ...DetailsStyle.boxWithShadow,
        }}
      >
        <Image
          source={require("../Images/avatar.png")}
          style={{ width: 120, height: 120 }}
        />
      </ImageBackground>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: "serif" }}>
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
            backgroundColor: "#D166F6",
          }}
        >
          <Text>Start Conversation</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={DetailsStyle.container}>
      <DetailsCard width={width} height={height} />
    </View>
  );
};

const DetailsStyle = StyleSheet.create({
  container: {
    backgroundColor: "#f3eef6",
    flex: 1,
    alignItems: "center",
  },
  cardStyle: {
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    padding: 15,
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
    marginTop: 30,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
