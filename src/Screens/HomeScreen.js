import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text, Card } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import Spacer from "../Components/Spacer";
import ImageCards from "../Components/ImageCards";
import DoctorCard from "../Components/DoctorCard";

export default ({ navigation }) => {
  const mockData = [
    { title: "Heart", src: "heart.png", color: "#dcbbfa" },
    { title: "Brain", src: "brain.png", color: "#dff7ff" },
    { title: "Eye", src: "eye-ball.png", color: "#e2ffe9" },
    { title: "Skin", src: "eye-ball.png", color: "#f5d7bf" },
  ];

  const doctorsData = [
    {
      name: "Elizabeth",
      position: "Psychatrist",
      rating: 4.2,
      src: "shorturl.at/uvEPR",
      color: "#dcbbfa",
    },
    {
      name: "Gordon",
      position: "Neurologist",
      rating: 4.5,
      src: "shorturl.at/cituw",
      color: "#e2ffe9",
    },
    {
      name: "Ferid ",
      position: "Cardiologist",
      rating: 4,
      src: "shorturl.at/BE345",
      color: "#dff7ff",
    },
  ];
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={HomeStyle.container}>
          <View style={HomeStyle.txtContainer}>
            <Text style={{ color: "#AEAEAE", fontFamily: "serif" }}>
              {" "}
              Remaining Time for meeting{" "}
            </Text>
            <Text
              style={{
                ...HomeStyle.text,
                fontWeight: "700",
                fontFamily: "serif",
              }}
            >
              No meeting for today
            </Text>
          </View>
          <Spacer />
          <View style={HomeStyle.inputContainer}>
            <AntDesign
              name="search1"
              size={24}
              color="#8212A9"
              style={HomeStyle.icon}
            />
            <TextInput
              placeholder="Search for Doctor/Condition"
              autoCapitalize="none"
              style={HomeStyle.input}
            />
          </View>
          <Spacer />
          <View
            style={{ backgroundColor: "white", height: 700, borderRadius: 40 }}
          >
            <View style={{ ...HomeStyle.categories, marginTop: 20 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontFamily: "serif",
                  fontSize: 23,
                  marginHorizontal: 20,
                }}
              >
                Categories
              </Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={mockData}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <ImageCards item={item} />
                  </TouchableOpacity>
                )}
              />
            </View>
            <Spacer />
            <Spacer />
            <View style={HomeStyle.categories}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontFamily: "serif",
                  fontSize: 23,
                  marginHorizontal: 20,
                }}
              >
                Top Doctors
              </Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={doctorsData}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("DoctorDetails")}
                  >
                    <DoctorCard item={item} />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const HomeStyle = StyleSheet.create({
  container: {
    backgroundColor: "#f3eef6",
    flex: 1,
  },
  text: {
    color: "#8212A9",
  },
  txtContainer: {
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    marginHorizontal: 25,
    borderRadius: 15,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  input: {
    height: 40,
    width: 260,
    padding: 5,
  },
  icon: {
    marginRight: 5,
  },
});
