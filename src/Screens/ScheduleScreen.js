import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Spacer from "../Components/Spacer";
import ScheduleCard from "../Components/ScheduleCard";

export default () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  const [nearestVisit, setNearestVisit] = useState([
    {
      doctor: {
        name: "Chris Frazier",
        speciality: "Pediatrician",
        img: "shorturl.at/uvEPR",
      },
      date: `${dd}/${mm}/${yyyy}`,
      time: "10:30 AM",
    },
    {
      doctor: {
        name: "Chris Frazier",
        speciality: "Pediatrician",
        img: "shorturl.at/uvEPR",
      },
      date: `${dd}/${mm}/${yyyy}`,
      time: "10:30 AM",
    },
  ]);

  const [futureVisits, setFutureVisits] = useState([
    {
      doctor: {
        name: "Chris Frazier",
        speciality: "Pediatrician",
        img: "shorturl.at/uvEPR",
      },
      date: `${dd}/${mm}/${yyyy}`,
      time: "10:30 AM",
    },
    {
      doctor: {
        name: "Chris Frazier",
        speciality: "Pediatrician",
        img: "shorturl.at/uvEPR",
      },
      date: `${dd}/${mm}/${yyyy}`,
      time: "10:30 AM",
    },
    {
      doctor: {
        name: "Chris Frazier",
        speciality: "Pediatrician",
        img: "shorturl.at/uvEPR",
      },
      date: `${dd}/${mm}/${yyyy}`,
      time: "10:30 AM",
    },
    {
      doctor: {
        name: "Chris Frazier",
        speciality: "Pediatrician",
        img: "shorturl.at/uvEPR",
      },
      date: `${dd}/${mm}/${yyyy}`,
      time: "10:30 AM",
    },
  ]);

  return (
    <View style={ScheduleStyle.container}>
      <View style={{ flex: 1, top: 100 }}>
        <Spacer>
          <Text style={ScheduleStyle.heading}>Nearest Visit</Text>
        </Spacer>

        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{ height: 100 }}
          horizontal
          data={nearestVisit}
          keyExtractor={(item) => item.date + Math.random()}
          renderItem={({ item }) => {
            return (
              <>
                <ScheduleCard details={item} />
              </>
            );
          }}
        />

        <Spacer>
          <Text style={ScheduleStyle.heading}>Future Visit</Text>
        </Spacer>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={futureVisits}
          keyExtractor={(item) => item.date + Math.random()}
          renderItem={({ item }) => <ScheduleCard details={item} />}
        />
      </View>
    </View>
  );
};

const ScheduleStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fcfaff",
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "750",
    fontFamily: "serif",
  },
});
