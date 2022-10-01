import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, ImageBackground, Text, View } from "react-native";

export default (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <ImageBackground style={{ padding: 10 }}>
          <Image
            source={require("../../Images/Logo.png")}
            style={{ height: 58, width: 75, marginBottom: 20 }}
          />
        </ImageBackground>
        <View
          style={{
            flex: 1,
            height: 550,
            justifyContent: "center",
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../Images/avatar.png")}
          style={{ height: 100, width: 100 }}
        />
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Some One</Text>
          <Text style={{ fontWeight: "light", color: "#AEAEAE" }}>
            fake.email@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
};
