import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  ScrollView,
  LogBox,
} from "react-native";
import Spacer from "../Components/Spacer";
import ScheduleCard from "../Components/ScheduleCard";
import Lottie from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchCancelledAppointments } from "../app/features/Appointement/AppointementSlice";

export default ({ navigation }) => {
  const { isLoading, appointments } = useSelector(
    (state) => state.appointements
  );
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();

  useEffect(() => {
    const listner = navigation.addListener("focus", () => {
      dispatch(fetchCancelledAppointments());
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    });
    return listner;
  }, []);
  const { cancelledAppointments } = appointments;

  return (
    <ScrollView style={{ backgroundColor: "#F7EEFF" }}>
      <View style={ScheduleStyle.container}>
        <View style={{ top: 100, flex: 1, marginBottom: 100 }}>
          <Spacer>
            <Text style={ScheduleStyle.heading}>Cancelled Appointments</Text>
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
              {cancelledAppointments.length === 0 ? (
                <Spacer>
                  <Text style={{ color: "red" }}>Nothing to show</Text>
                </Spacer>
              ) : (
                <FlatList
                  scrollEnabled={true}
                  horizontal={false}
                  data={cancelledAppointments}
                  keyExtractor={(item) => item.date + Math.random()}
                  renderItem={({ item }) => {
                    return <ScheduleCard details={item} />;
                  }}
                />
              )}
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const ScheduleStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F7EEFF",
  },
  heading: {
    fontSize: 20,
    fontWeight: "750",
    fontFamily: "serif",
  },
});
