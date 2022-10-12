import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native";
import Spacer from "../Components/Spacer";
import { AntDesign } from "@expo/vector-icons";

const DoctorsList = () => {
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
    {
      name: "Samuel ",
      position: "Dentist",
      rating: 4,
      src: "shorturl.at/BE345",
      color: "#dff7ff",
    },
    {
      name: "Henos ",
      position: "Pulmonologist",
      rating: 4,
      src: "shorturl.at/BE345",
      color: "#dff7ff",
    },
    {
      name: "Beyene",
      position: "Nephrology",
      rating: 4,
      src: "shorturl.at/BE345",
      color: "#dff7ff",
    },
  ];
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#fcfaff", height: "100%" }}>
        {/* <Text style={{ fontSize: "22", textAlign: "center",marginTop:6 }}>
          Doctors List
        </Text> */}
        <Spacer />
        <View style={styles.listcontainer}>
          <FlatList
            data={doctorsData}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  style={styles.img}
                  source={require("../../assets/doctor.png")}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "80%",
                  }}
                >
                  <View style={styles.textContainer}>
                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                    <Text style={{ color: "#AEAEAE" }}>{item.position}</Text>
                  </View>
                  <View style={styles.ratings}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AntDesign name="star" size={20} color="gold" />
                      <Text style={{ marginLeft: 5 }}>{item.rating}</Text>
                    </View>
                    <Button title="Book Now" />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listcontainer: {
    marginTop: 6,
  },
  card: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
    marginHorizontal: 12,
    marginBottom: 18,
    borderRadius: 10,
    backgroundColor: "white",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  ratings: {
    justifyContent: "center",
  },
});

export default DoctorsList;
