import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Lottie from "lottie-react-native";
import { Text, Card } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import Spacer from "../Components/Spacer";
import ImageCards from "../Components/ImageCards";
import DoctorCard from "../Components/DoctorCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopDoctors } from "../app/features/Doctor/DoctorSlice";
import { fetchUser } from "../app/features/User/UserSlice";

export default ({ navigation }) => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const { width } = useWindowDimensions();
  const mockData = [
    { title: "Cardiology", src: "heart.png", color: "#dcbbfa" },
    { title: "Neurology", src: "brain.png", color: "#dff7ff" },
    { title: "Opthamology", src: "eye-ball.png", color: "#e2ffe9" },
    { title: "Dentistry", src: "tooth.png", color: "#f5d7bf" },
  ];

  const { isLoading, error, doctors } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    const listner = navigation.addListener("focus", () => {
      setSearchedTerm("");
      dispatch(fetchTopDoctors());
    });
    return listner;
  }, []);

  const { topDoctors: data } = doctors;

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
            <TouchableOpacity
              onPress={() => {
                if (!searchedTerm) return;
                navigation.navigate("DoctorsList", {
                  term: searchedTerm,
                });
              }}
            >
              <AntDesign
                name="search1"
                size={24}
                color="#8212A9"
                style={HomeStyle.icon}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Search for Doctor"
              autoCapitalize="none"
              style={HomeStyle.input}
              value={searchedTerm}
              onChangeText={setSearchedTerm}
              onEndEditing={() => {
                if (!searchedTerm) return;
                navigation.navigate("DoctorsList", {
                  term: searchedTerm,
                });
              }}
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
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("DoctorsList", {
                        category: item.title,
                      })
                    }
                  >
                    <ImageCards item={item} />
                  </TouchableOpacity>
                )}
              />
            </View>
            <Spacer />
            <Spacer />
            <View style={HomeStyle.categories}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("DoctorsList")}
                  style={{
                    marginBottom: 15,
                    fontFamily: "serif",
                    marginHorizontal: 20,
                  }}
                >
                  <Text style={{ color: "blue" }}> See all</Text>
                </TouchableOpacity>
              </View>
              {isLoading ? (
                <>
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
                      style={{
                        width: width,
                        height: width / 2,
                      }}
                    />
                  </View>
                </>
              ) : (
                <>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={data}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("DoctorDetails", {
                            doctorId: item.doctorId,
                          })
                        }
                      >
                        <DoctorCard item={item} />
                      </TouchableOpacity>
                    )}
                  />
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const HomeStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F7EEFF",
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
