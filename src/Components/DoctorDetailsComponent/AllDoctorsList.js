import React from "react";
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default ({ allDoctors }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={allDoctors}
      keyExtractor={(item) => item.doctorId}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={{
              uri: `https://b01c-195-229-151-165.ap.ngrok.io/${item.img}`,
            }}
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
              <Text style={{ color: "#AEAEAE" }}>{item.speciality}</Text>
            </View>
            <View style={styles.ratings}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="star" size={24} color="#f4c58b" />
                <Text style={{ marginLeft: 5 }}>{item.rating || 0}</Text>
              </View>
              <TouchableOpacity
                style={{ padding: 8 }}
                onPress={() =>
                  navigation.navigate("DoctorDetails", {
                    doctorId: item.doctorId,
                  })
                }
              >
                <Text style={{ color: "#0000EE" }}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
    marginHorizontal: 12,
    marginBottom: 18,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
