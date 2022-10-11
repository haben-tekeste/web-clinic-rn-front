import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  ImageBackground,
  FlatList,
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
          <Text style={{ color: "white", fontWeight: "400" }}>
            Start Conversation
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const arr = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7122",
      title: "Fourth Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72ad",
      title: "Fifth Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72asdf",
      title: "Sixths Item",
    },
  ];
  const [select, setSelect] = useState(false);
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
