import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Spacer from "../Components/Spacer";
import ScheduleCard from "../Components/ScheduleCard";
import Lottie from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchFutureNearAppointements } from "../app/features/Appointement/AppointementSlice";

export default ({ navigation }) => {
  const { appointments, isLoading } = useSelector(
    (state) => state.appointements
  );
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    const listener = navigation.addListener("focus", () => {
      dispatch(fetchFutureNearAppointements());
    });
    return listener;
  }, []);
  const { nearestAppointments, futureAppointments } = appointments;

  return (
    <View style={ScheduleStyle.container}>
      <View style={{ flex: 1, top: 100 }}>
        <Spacer>
          <Text style={ScheduleStyle.heading}>Nearest Visit</Text>
        </Spacer>
        {isLoading ? (
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
              style={{ backgroundColor: "#F7EEFF", width: 100, height: 100 }}
            />
          </View>
        ) : (
          <>
            {nearestAppointments.length === 0 ? (
              <Spacer>
                <Text style={{ color: "red" }}>Nothing to show</Text>
              </Spacer>
            ) : (
              <FlatList
                showsHorizontalScrollIndicator={false}
                style={{ height: 100 }}
                horizontal
                data={nearestAppointments}
                keyExtractor={(item) => item.date + Math.random()}
                renderItem={({ item }) => {
                  return (
                    <>
                      <ScheduleCard
                        details={item}
                        navigation={navigation}
                        patientId={user.data.patientId}
                      />
                    </>
                  );
                }}
              />
            )}
          </>
        )}

        <Spacer>
          <Text style={ScheduleStyle.heading}>Future Visit</Text>
        </Spacer>
        {isLoading ? (
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
              style={{ width: 100, height: 100 }}
            />
          </View>
        ) : (
          <>
            {futureAppointments.length === 0 ? (
              <Spacer>
                <Text style={{ color: "red" }}>Nothing to show</Text>
              </Spacer>
            ) : (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={futureAppointments}
                keyExtractor={(item) => item.date + Math.random()}
                renderItem={({ item }) => <ScheduleCard details={item} />}
              />
            )}
          </>
        )}
      </View>
    </View>
  );
};

const ScheduleStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F7EEFF",
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "750",
    fontFamily: "serif",
  },
});
