import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  LogBox,
} from "react-native";
import { SafeAreaView } from "react-native";
import Spacer from "../Components/Spacer";
import Lottie from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDoctors } from "../app/features/Doctor/DoctorSlice";
import AllDoctorsList from "../Components/DoctorDetailsComponent/AllDoctorsList";
const DoctorsList = ({ route }) => {
  const { width, height } = useWindowDimensions();
  const { isLoading, doctors } = useSelector((state) => state.doctor);

  const dispatch = useDispatch();
  const routeData = route.params;
  const { allDoctors } = doctors;
  let filteredDoctors;
  useEffect(() => {
    dispatch(fetchAllDoctors());
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  if (routeData) {
    if (routeData.category) {
      filteredDoctors = allDoctors.filter(
        (doc) => doc.speciality === routeData.category
      );
    } else {
      filteredDoctors = allDoctors.filter(
        (doc) => doc.name.toLowerCase() === routeData.term.toLowerCase()
      );
    }
  } else {
    filteredDoctors = allDoctors;
  }

  console.log(filteredDoctors);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#F7EEFF" }}>
        <View style={{ backgroundColor: "#F7EEFF", height: "100%" }}>
          {isLoading || (
            <Text style={{ fontSize: 22, textAlign: "center", marginTop: 6 }}>
              Doctors List
            </Text>
          )}
          <Spacer />
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
            <View style={styles.listcontainer}>
              {filteredDoctors.length === 0 ? (
                <Text style={{ color: "red", textAlign: "center" }}>
                  Sorry Nothing To Show
                </Text>
              ) : (
                <AllDoctorsList allDoctors={filteredDoctors} />
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listcontainer: {
    marginTop: 6,
  },
});

export default DoctorsList;
