import React from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import Avatar from "../Components/AccountComponent/Avatar";
import UpdateInput from "../Components/AccountComponent/UpdateInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        style={UpdateProfileStyle.container}
        contentContainerStyle={{ justifyContent: "space-around" }}
      >
        <Avatar />
        <View
          style={{
            marginHorizontal: 32,
            height: height / 2,
            justifyContent: "space-around",
          }}
        >
          <View>
            <UpdateInput icon="email-outline" val="mr.haben.k@gmail.com" />
            <UpdateInput icon="account" val="Haben Tekeste" />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                padding: 16,
                backgroundColor: "#8212A9",
                elevation: 10,
                borderRadius: 16,
                alignItems: "center",
                width: width / 2,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="recycle-variant"
                size={24}
                color="#fff"
                style={{ marginRight: 16 }}
              />
              <Text style={{ color: "#fff", fontSize: 16 }}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const UpdateProfileStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F7EEFF",
    flex: 1,
  },
});
