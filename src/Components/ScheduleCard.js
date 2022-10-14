import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import {
  Foundation,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import Spacer from "./Spacer";

const ScheduleCard = ({ details }) => {
  // console.log(details);
  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.header}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "500", marginBottom:4 }}>
            Dr. {details.doctor.name}
          </Text>
          <Text style={{ color: "#AEAEAE", fontWeight: "500" }}>
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
          <Text style={{ marginLeft: 5 }}>{details.date}</Text>
        </View>
        <View style={cardStyles.icon}>
          <MaterialCommunityIcons
            name="clock-time-four"
            size={30}
            color="#585454"
          />
          <Text style={{ marginLeft: 5 }}>{details.time}</Text>
        </View>
        <View style={cardStyles.icon}>
          <Octicons name="dot-fill" size={30} color="#45f60a" />
          <Text style={{ marginLeft: 5 }}>Confirmed</Text>
        </View>
      </View>
      <View style={cardStyles.buttonContainer}>
        <Pressable style={{...cardStyles.btn,backgroundColor:'#dcdedc'}}>
          <Text style={{fontSize:20}}>Cancel</Text>
        </Pressable>
        <Pressable style={{...cardStyles.btn,backgroundColor:'#b279d5'}}>
          <Text style={{fontSize:20}}>Reschedule</Text>
        </Pressable>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    height:230,
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
    marginBottom:15
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
    marginBottom:5
    
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginHorizontal:10,
  },
});

export default ScheduleCard;
