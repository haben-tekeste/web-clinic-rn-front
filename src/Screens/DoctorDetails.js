import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import Lottie from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctor } from "../app/features/Doctor/DoctorSlice";
import DaysComponent from "../Components/DoctorDetailsComponent/DaysComponent";
import DetailsCard from "../Components/DoctorDetailsComponent/DetailsCard";
import DropDown from "../Components/DoctorDetailsComponent/dropDown";
import WorkingHoursComponent from "../Components/DoctorDetailsComponent/WorkingHoursComponent";
import api from "../api/api";
import { getDate, getMonth, TIME } from "../util";

export default ({ navigation, route }) => {
  const { width, height } = useWindowDimensions();
  const [selectMonth, setSelectMonth] = useState(getMonth());
  const { month, monthFromCurrent, year } = getDate(getMonth());
  const { dates } = getDate(selectMonth);
  const defaultMonth = month[selectMonth];
  const { doctorId } = route.params;
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const onSetSelectMonth = (index) => {
    setSelectMonth(index + getMonth());
  };
  const { isLoading, doctors } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctor(doctorId));
  }, []);
  const { doctor } = doctors;

  const handleBooking = async () => {
    if (!selectedDay || !selectedHour) return;
    let currentMonth = +selectMonth + 1;
    const stringDay =
      "2022/" +
      currentMonth +
      "/" +
      selectedDay +
      " " +
      selectedHour +
      ":00 GMT";
    const date = new Date(Date.parse(stringDay));
    try {
      await api.post("/patient/appointment", { doctorId, date });
      Alert.alert("Success", "Appointment booked successfully", [
        { text: "OK", onPress: () => navigation.navigate("Upcoming") },
      ]);
    } catch (err) {
      Alert.alert("Error", err.response.data.message, [{ text: "OK" }]);
    }
  };

  return (
    <ScrollView style={DetailsStyle.container}>
      {isLoading ? (
        <>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              height,
              backgroundColor: "white",
            }}
          >
            <Lottie
              source={require("../../assets/99947-loader.json")}
              autoPlay
              loop={false}
              style={{
                height: 180,
                width: 180,
                marginTop: 150,
              }}
            />
          </View>
        </>
      ) : (
        <>
          <DetailsCard width={width} height={height} doctor={doctor} />
          <DropDown
            month={monthFromCurrent}
            width={width}
            height={height}
            year={year}
            defaultMonth={defaultMonth}
            onSetSelectMonth={onSetSelectMonth}
          />
          <DaysComponent
            year={year}
            selectMonth={selectMonth}
            dates={dates}
            width={width}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />

          <WorkingHoursComponent
            Data={TIME}
            width={width}
            selectedHour={selectedHour}
            setSelectedHour={setSelectedHour}
          />
          <View style={{ alignItems: "center", marginTop: 25 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#640F82",
                width: width / 1.75,
                justifyContent: "center",
                alignItems: "center",
                padding: 15,
                borderRadius: 12,
              }}
              onPress={handleBooking}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}
              >
                Book Appointment
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const DetailsStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F7EEFF",
    flex: 1,
  },
});
