import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Tab from "./Tab";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  Ionicons
} from "@expo/vector-icons";
import InboxScreen from "../../Screens/InboxScreen";
import ScheduleScreen from "../../Screens/ScheduleScreen";
import BillScreen from "../../Screens/BillScreen";
import SubscriptionScreen from "../../Screens/SubscriptionScreen";
import PrescriptionScreen from "../../Screens/PrescriptionScreen";
import HomeScreen from "../../Screens/HomeScreen";
import CustomDrawer from "./CustomDrawer";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";
import AccountScreen from "../../Screens/AccountScreen";
export default () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: "slide",
        drawerStyle: {
          backgroundColor: "#F7EBFF",
          elevation: 20,
        },
        swipeEdgeWidth:100,

        headerRight: () => {
          return (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                padding: 5,
                marginRight: 15,
                borderRadius: 10,
                borderColor: "#AEAEAE",
              }}
            >
              <FontAwesome name="bell-o" size={24} color="#8212A9" />
            </TouchableOpacity>
          );
        },
        drawerActiveBackgroundColor: "#D166F6",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#f3eef6",elevation:0 },
          drawerIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Inbox Screen"
        component={InboxScreen}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#F7EBFF" },
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="envelope-open-text" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#F7EBFF" },
          drawerIcon: ({ color }) => (
            <FontAwesome name="calendar" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Prescription Screen"
        component={PrescriptionScreen}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#F7EBFF" },
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="bandage" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bills"
        component={BillScreen}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#F7EBFF" },
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="money-bill-alt" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Subscription Screen"
        component={SubscriptionScreen}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#F7EBFF" },
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="coins" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account Screen"
        component={AccountScreen}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#F7EBFF" },
          drawerIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
