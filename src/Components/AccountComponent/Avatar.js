import React from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
export default ({ navigation, userName, userEmail }) => {
  const { width } = useWindowDimensions();
  const { name } = useRoute();
  const isProfile = name === "Profile" ? true : false;
  return (
    <View>
      <ImageBackground
        style={{
          width: width,
          height: width / 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../Images/avatar.png")}
          style={{
            width: 150,
            height: 150,
            borderStyle: "dashed",
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 50,
            borderColor: "#8212A9",
            position: "relative",
          }}
        />
        {isProfile && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("UpdateProfile", { userName, userEmail })
            }
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "#8212A9",
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              elevation: 16,
            }}
          >
            <FontAwesome5 name="edit" size={24} color="#fff" />
          </TouchableOpacity>
        )}
      </ImageBackground>
      {isProfile && (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{userName}</Text>
          <Text style={{ fontSize: 15, color: "gray", fontWeight: "light" }}>
            {userEmail}
          </Text>
        </View>
      )}
    </View>
  );
};
