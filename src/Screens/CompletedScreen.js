import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  useWindowDimensions,
  Modal,
  Pressable,
  LogBox,
} from "react-native";
import Spacer from "../Components/Spacer";
import ScheduleCard from "../Components/ScheduleCard";
import Lottie from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompletedAppointments } from "../app/features/Appointement/AppointementSlice";
import { Rating } from "react-native-ratings";
import api from "../api/api";

export default ({ navigation }) => {
  const { isLoading, appointments } = useSelector(
    (state) => state.appointements
  );
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const [activeDoctor, setActiveDoctor] = useState("");
  const [stars, setStars] = useState(1);

  useEffect(() => {
    const listner = navigation.addListener("focus", () => {
      dispatch(fetchCompletedAppointments());
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    });
    return listner;
  }, []);
  const { completedAppointments } = appointments;

  const handleReview = async () => {
    try {
      await api.put("/patient/review/" + activeDoctor, {
        rating: stars,
      });
      setModalVisible((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#F7EEFF" }}>
      <View style={ScheduleStyle.container}>
        <View style={{ top: 100, flex: 1, marginBottom: 100 }}>
          <Spacer>
            <Text style={ScheduleStyle.heading}>Completed Appointments</Text>
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
              {completedAppointments.length === 0 ? (
                <Spacer>
                  <Text style={{ color: "red" }}>Nothing to show</Text>
                </Spacer>
              ) : (
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={false}
                  data={completedAppointments}
                  keyExtractor={(item) => item.date + Math.random()}
                  renderItem={({ item }) => {
                    return (
                      <>
                        <ScheduleCard
                          details={item}
                          setModalVisible={setModalVisible}
                          setActiveDoctor={setActiveDoctor}
                        />
                      </>
                    );
                  }}
                />
              )}
            </>
          )}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              ...ScheduleStyle.centeredView,
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          >
            <View
              style={{
                ...ScheduleStyle.modalView,
                height: width / 2,
                width: width / 1.1,
              }}
            >
              <Rating
                showRating
                onFinishRating={(rating) => setStars(rating)}
                style={{ paddingVertical: 10 }}
              />
              <Pressable
                style={[ScheduleStyle.button, ScheduleStyle.buttonClose]}
                onPress={handleReview}
              >
                <Text style={ScheduleStyle.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
