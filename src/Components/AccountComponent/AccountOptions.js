import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Button from "./Button";

export default ({ navigation }) => {
  return (
    <View>
      <Button text="History" icon="history" navigation={navigation} />
      <Button text="Subscribtions" icon="bitcoin" />
      <Button text="Terms & Conditions" icon="bookmark-multiple-outline" />
      <Button text="Logout" icon="logout" />
    </View>
  );
};
