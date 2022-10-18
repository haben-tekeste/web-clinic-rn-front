import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import {
  Foundation,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import Spacer from "./Spacer";

const ScheduleCard = ({ details }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        ...cardStyles.container,
        width: width / 1.04,
        height: 230,
        elevation: 10,
        shadowColor: "gray",
      }}
    >
      <View style={cardStyles.header}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              marginBottom: 4,
              fontFamily: "serif",
            }}
          >
            Dr. {details.doctor.name}
          </Text>
          <Text
            style={{ color: "#AEAEAE", fontWeight: "500", fontFamily: "serif" }}
          >
            {details.doctor.speciality}
          </Text>
        </View>
        <Image
          style={cardStyles.img}
          source={require("../../assets/doctor.png")}
        />
      </View>
      <View style={cardStyles.line} />
      <View style={cardStyles.icons}>
        <View style={cardStyles.icon}>
          <Foundation name="calendar" size={30} color="#585454" />
          <Text style={{ marginLeft: 5, fontFamily: "serif" }}>
            {details.date}
          </Text>
        </View>
        <View style={cardStyles.icon}>
          <MaterialCommunityIcons
            name="clock-time-four"
            size={30}
            color="#585454"
          />
          <Text style={{ marginLeft: 5, fontFamily: "serif" }}>
            {details.time}
          </Text>
        </View>
        <View style={cardStyles.icon}>
          <Octicons name="dot-fill" size={30} color="#45f60a" />
          <Text style={{ marginLeft: 5, fontFamily: "serif" }}>Confirmed</Text>
        </View>
      </View>
      <View style={cardStyles.buttonContainer}>
        <Pressable style={{ ...cardStyles.btn, backgroundColor: "#dcdedc" }}>
          <Text style={{ fontSize: 15, fontFamily: "serif" }}>Cancel</Text>
        </Pressable>
        <Pressable style={{ ...cardStyles.btn, backgroundColor: "#a355e6" }}>
          <Text style={{ fontSize: 15, fontFamily: "serif", color: "white" }}>
            Reschedule
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
  },
  line: {
    backgroundColor: "#AEAEAE",
    height: 1,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginHorizontal: 10,
  },
});

export default ScheduleCard;
