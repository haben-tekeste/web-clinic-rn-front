import React from "react";
import { Text } from "react-native-elements";
import { View, StyleSheet, Image } from "react-native";

const ImageCards = ({ item }) => {
  return (
    <View
      style={{ ...ImagesCardsStyles.imgContainer, backgroundColor: item.color }}
    >
      <Image
        source={require(`../../assets/brain.png`)}
        style={ImagesCardsStyles.image}
      />
      <Text style={{ fontWeight: "bold", fontFamily: "serif" }}>
        {item.title}
      </Text>
    </View>
  );
};

const ImagesCardsStyles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
  imgContainer: {
    marginHorizontal: 20,
    borderColor: "red",
    borderRadius: 15,
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
});
export default ImageCards;
