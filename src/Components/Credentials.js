import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Text, Button } from "@rneui/themed";
import Spacer from "./Spacer";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";

export default ({ navigation, navigate, sign, header, subHeader, goto }) => {
  const [show, setShow] = useState(true);
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={CredentialsStyle.container}>
          {show ? (
            <Image
              source={require("../Images/decoration.png")}
              style={CredentialsStyle.image}
            />
          ) : (
            <Image
              source={require("../Images/decoration.png")}
              style={CredentialsStyle.image}
              blurRadius={25}
            />
          )}

          <Text style={CredentialsStyle.headerStyle}>{header}</Text>

          {subHeader ? (
            <Text style={CredentialsStyle.subHeaderStyle}>{subHeader}</Text>
          ) : null}

          <Spacer />
          <Spacer />
          <View style={CredentialsStyle.inputViewStyle}>
            <Entypo name="mail" size={30} color="#AEAEAE" />
            <TextInput
              placeholder="Enter Your Email"
              style={CredentialsStyle.inputStyle}
              onFocus={() => {
                setShow(false);
              }}
              onEndEditing={() => {
                setShow(true);
              }}
            />
          </View>
          <Spacer />
          <View style={CredentialsStyle.inputViewStyle}>
            <Entypo name="lock" size={30} color="#AEAEAE" />
            <TextInput
              placeholder="Enter Your Password"
              secureTextEntry
              style={CredentialsStyle.inputStyle}
              onFocus={() => {
                setShow(false);
              }}
              onEndEditing={() => {
                setShow(true);
              }}
            />
          </View>
          <Spacer />
          <Spacer />
          <View
            style={{
              paddingLeft: 150,
            }}
          >
            <Button
              style={CredentialsStyle.signBtnStyle}
              color="#9600F1"
              radius="md"
              onPress={() => navigation.navigate("HomeScreen")}
            >
              Sign {sign}
              <AntDesign
                name="arrowright"
                size={30}
                color="white"
                style={{ marginHorizontal: 20 }}
              />
            </Button>
          </View>
          <Spacer />
          <Spacer />

          <TouchableOpacity
            style={{ paddingLeft: 50 }}
            onPress={() => navigation.navigate(navigate)}
          >
            <Text style={{ color: "#AEAEAE", fontSize: 15 }}>
              Don't have an account?
              <Text style={{ color: "#65288A", fontWeight: "bold" }}>
                Sign{goto}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const CredentialsStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  image: {
    position: "absolute",
    top: -10,
    right: -75,
    height: 250,
    width: 250,
    rotation: 8,
  },
  headerStyle: {
    color: "black",
    fontWeight: "bold",
    fontFamily: "serif",
    fontSize: 30,
  },
  subHeaderStyle: {
    color: "#AEAEAE",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  inputStyle: {
    borderColor: "#65288A",
    alignItems: "center",
    color: "#65288A",
    borderWidth: 1,
    borderColor: "#AEAEAE",
    borderRadius: 5,
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginLeft: 10,
  },
  inputViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 15,
  },
  signBtnStyle: {
    borderRadius: 50,
  },
});
