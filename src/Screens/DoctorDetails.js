import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import DaysComponent from "../Components/DoctorDetailsComponent/DaysComponent";
import DetailsCard from "../Components/DoctorDetailsComponent/DetailsCard";
import DropDown from "../Components/DoctorDetailsComponent/dropDown";
import WorkingHoursComponent from "../Components/DoctorDetailsComponent/WorkingHoursComponent";

const getDate = (mon) => {
  const year = new Date().getFullYear();
  const month = [
    "Jan, " + year,
    "Feb, " + year,
    "Mar, " + year,
    "Apr, " + year,
    "May, " + year,
    "Jun, " + year,
    "Jul, " + year,
    "Aug, " + year,
    "Sep, " + year,
    "Oct, " + year,
    "Nov, " + year,
    "Dec, " + year,
  ];
  const lastDate = Array(new Date(year, mon + 1, 0).getDate()).keys();
  const dates = Array.from(lastDate);

  return { month, year, dates: dates.map((date, index) => date + 1) };
};

const getMonth = () => {
  return new Date().getMonth();
};

const TIME = [
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

export default ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [selectMonth, setSelectMonth] = useState(getMonth());
  const { month, year } = getDate(getMonth());
  const { dates } = getDate(selectMonth);
  const defaultMonth = month[selectMonth];

  const onSetSelectMonth = (index) => {
    setSelectMonth(index);
  };
  return (
    <ScrollView style={DetailsStyle.container}>
      <DetailsCard width={width} height={height} />
      <DropDown
        month={month}
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
      />

      <WorkingHoursComponent Data={TIME} width={width} />
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
        >
          <Text
            style={{ color: "white", fontWeight: "bold", fontFamily: "serif" }}
          >
            Book Appointment
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const DetailsStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F7EEFF",
    flex: 1,
  },
});
