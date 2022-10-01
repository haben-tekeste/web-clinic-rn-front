import React from "react";
import { Text } from "react-native-elements";
import { View, StyleSheet, Image } from "react-native";

const ImageCards = ({ item }) => {
  return (
    <View style={{...ImagesCardsStyles.imgContainer,backgroundColor:item.color}}>
      <Image source={require(`../../assets/brain.png`)}  style={ImagesCardsStyles.image} />
      <Text >{item.title}</Text>
    </View>
  );
};

const ImagesCardsStyles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
  },
  imgContainer: {
    marginHorizontal:8,
    borderColor:'red',
    borderRadius:15,
    width:110,
    height:110,
    alignItems:'center',
    justifyContent:'space-around'
  }
});
export default ImageCards;
