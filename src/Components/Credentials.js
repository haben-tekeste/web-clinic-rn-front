import React, { useState, useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
  signupUser,
  signinUser,
  clearErr,
} from "../app/features/Auth/AuthSlice";
import Lottie from "lottie-react-native";

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
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";

export default ({ navigation, navigate, sign, header, subHeader, goto }) => {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const route = useRoute();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth);

  useLayoutEffect(() => {
    const nav = navigation.addListener("focus", () => {
      dispatch(clearErr());
    });
  }, []);

  const signUPIn = (obj = { name, password, email }) => {
    if (route.name === "Sign-up") {
      dispatch(signupUser(obj));
      setName("");
      setEmail("");
      setPassword("");
    } else if (route.name === "Sign-in") {
      dispatch(signinUser({ email, password }));
      setEmail("");
      setPassword("");
    }
  };

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
          <Spacer />
          {data.error && (
            <View
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "red" }}>{data.error}</Text>
              <Spacer />
              <Spacer />
            </View>
          )}
          {data.isLoading && (
            <View
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Lottie
                source={require("../../assets/99947-loader.json")}
                autoPlay
                loop={false}
                onAnimationFinish={() => navigate("Sign-in")}
                style={{ backgroundColor: "#F7EEFF", width: 100, height: 100 }}
              />
            </View>
          )}
          {route.name === "Sign-up" && (
            <>
              <View style={CredentialsStyle.inputViewStyle}>
                <Ionicons name="person" size={24} color="#AEAEAE" />
                <TextInput
                  placeholder="Enter Your Name"
                  style={CredentialsStyle.inputStyle}
                  onFocus={() => {
                    setShow(false);
                  }}
                  onEndEditing={() => {
                    setShow(true);
                  }}
                  value={name}
                  onChangeText={setName}
                />
              </View>
              <Spacer />
              <Spacer />
            </>
          )}
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
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <Spacer />
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
              value={password}
              onChangeText={setPassword}
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
              onPress={() => signUPIn({ name, password, email })}
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
    backgroundColor: "#F7EEFF",
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
