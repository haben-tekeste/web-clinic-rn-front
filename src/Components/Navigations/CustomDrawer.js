import React, { useEffect } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  Image,
  ImageBackground,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../app/features/User/UserSlice";

export default (props) => {
  const { user } = useSelector((state) => state.user);
  const { email, name } = user.data;

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
            height: 500,
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
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{name}</Text>
          <Text style={{ fontWeight: "light", color: "#AEAEAE" }}>{email}</Text>
        </View>
      </View>
    </View>
  );
};
