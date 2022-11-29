import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
  Alert,
  Linking,
} from "react-native";
import {
  Foundation,
  MaterialCommunityIcons,
  Octicons,
  AntDesign,
} from "@expo/vector-icons";
import api from "../api/api";
import { useRoute } from "@react-navigation/native";
import { navigate } from "../NavigationRoute";
const ScheduleCard = ({
  navigation,
  details,
  setModalVisible,
  setActiveDoctor,
  patientId,
}) => {
  const { width } = useWindowDimensions();
  const route = useRoute();
  const routeName = route.name;

  const onClickHandler = async () => {
    if (routeName === "Upcoming") {
      try {
        await api.put("/patient/cancel-appointment", {
          appointmentId: details.appointmentId,
        });
        Alert.alert("Success", "Appointment cancelled successfully", [
          { text: "OK", onPress: () => navigate("Cancelled") },
        ]);
      } catch (err) {
        Alert.alert("Error", err.response.data.message, [{ text: "OK" }]);
      }
    } else if (routeName === "Completed") {
      try {
        const { data } = await api.get(
          "https://f6d8-195-229-151-165.ap.ngrok.io/patient/check-prescription/" +
            details.appointmentId
        );

        if (!data.success) throw new Error();
        await Linking.openURL(
          "https://f6d8-195-229-151-165.ap.ngrok.io/patient/prescription/" +
            details.appointmentId
        );
      } catch (err) {
        Alert.alert("Error", "No prescription available at the moment", [
          { text: "OK" },
        ]);
      }
    }
  };

  const handleJoin = () => {
    const stringDay = new Date(details.date).toLocaleDateString();

    if (stringDay != new Date().toLocaleDateString()) {
      Alert.alert("Error", "Appointment has not started yet", [{ text: "OK" }]);
      return;
    } else {
      const time = new Date(details.date).getTime();
      const timeNow = new Date();
      const hours = 1000 * 60 * 60;
      const timeDifference = time / hours - timeNow / hours - 4;

      if (!(timeDifference <= 0 && timeDifference > -1)) {
        Alert.alert("Error", "Appointment has not started", [{ text: "OK" }]);
        return;
      }
    }
    navigation.navigate("Chat", {
      appointmentId: details.appointmentId,
      doctorId: details.doctorId,
      patientId,
    });
  };

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
            Dr. {details.name}
          </Text>
          <Text
            style={{ color: "#AEAEAE", fontWeight: "500", fontFamily: "serif" }}
          >
            {details.speciality}
          </Text>
        </View>
        <Image
          style={cardStyles.img}
          source={{
            uri: `https://f6d8-195-229-151-165.ap.ngrok.io/${details.img}`,
          }}
        />
      </View>
      <View style={cardStyles.line} />
      <>
        {(routeName === "Completed" || routeName === "Cancelled") && (
          <View
            style={{
              ...cardStyles.icon,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Octicons
              name="dot-fill"
              size={30}
              color={routeName === "Completed" ? "green" : "red"}
            />
            <Text style={{ marginLeft: 5, fontFamily: "serif" }}>
              {routeName}
            </Text>
          </View>
        )}
      </>

      {(routeName === "Upcoming" || routeName === "Completed") && (
        <>
          <View style={cardStyles.icons}>
            {routeName === "Upcoming" && (
              <>
                <View style={cardStyles.icon}>
                  <Foundation name="calendar" size={30} color="#585454" />
                  <Text style={{ marginLeft: 5, fontFamily: "serif" }}>
                    {new Date(details.date).getDate()} -{" "}
                    {new Date(details.date).getMonth() + 1} -{" "}
                    {new Date(details.date).getFullYear()}
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
                  <Octicons name="dot-fill" size={30} color="gold" />
                  <Text style={{ marginLeft: 5, fontFamily: "serif" }}>
                    Pending
                  </Text>
                </View>
              </>
            )}
          </View>
          <View style={cardStyles.buttonContainer}>
            <Pressable
              style={{ ...cardStyles.btn, backgroundColor: "#dcdedc" }}
              onPress={onClickHandler}
            >
              <Text style={{ fontSize: 15, fontFamily: "serif" }}>
                {routeName === "Upcoming" ? (
                  "Cancel"
                ) : (
                  <>
                    <Text style={{ marginRight: 8 }}>Prescription</Text>
                    <AntDesign
                      name="clouddownload"
                      size={24}
                      color="black"
                      style={{ marginLeft: 12 }}
                    />
                  </>
                )}
              </Text>
            </Pressable>
            {routeName === "Completed" ? (
              <Pressable
                style={{ ...cardStyles.btn, backgroundColor: "#640F82" }}
                onPress={() => {
                  setActiveDoctor(details.doctorId);
                  setModalVisible((prev) => !prev);
                }}
              >
                <Text
                  style={{ fontSize: 15, fontFamily: "serif", color: "white" }}
                >
                  Rate
                </Text>
              </Pressable>
            ) : (
              <Pressable
                style={{ ...cardStyles.btn, backgroundColor: "#640F82" }}
                onPress={handleJoin}
              >
                <Text
                  style={{ fontSize: 15, fontFamily: "serif", color: "white" }}
                >
                  Join
                </Text>
              </Pressable>
            )}
          </View>
        </>
      )}
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
