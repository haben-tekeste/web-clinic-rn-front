import React from "react";
import { useWindowDimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ScheduleScreen from "../../Screens/ScheduleScreen";
import CompletedScreen from "../../Screens/CompletedScreen";
import CancelledScreen from "../../Screens/CancelledScreen";

const Tab = createMaterialTopTabNavigator();

export default () => {
  const { width, height } = useWindowDimensions();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          elevation: 0,
          paddingVertical: 10,
          paddingHorizontal: 10,
          position: "absolute",
          left: 10,
          right: 10,
          marginTop: 8,
          borderRadius: 15,
          justifyContent: "center",
          elevation: 10,
          shadowColor: "gray",
          shadowOffset: {
            width: -2,
            height: 4,
          },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        },
        tabBarIndicatorStyle: {
          width: 0,
        },
        tabBarItemStyle: {
          borderColor: "#AEAEAE",
          backgroundColor: "#640F82",
          marginHorizontal: 2,
          width: width / 3.45,
          borderRadius: 15,
        },
        tabBarActiveTintColor: "white",
        tabBarPressColor: "white",
        swipeEnabled: false,
      }}
    >
      <Tab.Screen name="Upcoming" component={ScheduleScreen} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
      <Tab.Screen name="Cancelled" component={CancelledScreen} />
    </Tab.Navigator>
  );
};
