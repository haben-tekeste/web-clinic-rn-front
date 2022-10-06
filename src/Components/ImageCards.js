import React from "react";
import { Text } from "react-native-elements";
import { View, StyleSheet, Image, useWindowDimensions } from "react-native";

const ImageCards = ({ item }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        ...ImagesCardsStyles.imgContainer,
        backgroundColor: item.color,
        height: width / 3.5,
        width: width / 3.5,
      }}
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
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
});
export default ImageCards;
