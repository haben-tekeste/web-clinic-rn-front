import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import InboxScreen from "../../Screens/InboxScreen";
import BillScreen from "../../Screens/BillScreen";
import PrescriptionScreen from "../../Screens/PrescriptionScreen";
import CustomDrawer from "./CustomDrawer";
import { TouchableOpacity } from "react-native";
import TopTab from "./TopTab";
import HomeScreen from "../../Screens/HomeScreen";
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
        },
        swipeEdgeWidth: 40,

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
        drawerActiveBackgroundColor: "#640F82",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#F7EEFF", elevation: 0 },
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
          headerStyle: { backgroundColor: "#F7EEFF" },
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="envelope-open-text" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Schedule"
        component={TopTab}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#F7EEFF" },
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
          headerStyle: { backgroundColor: "#F7EEFF" },
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
          headerStyle: { backgroundColor: "#F7EEFF" },
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="money-bill-alt" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={AccountScreen}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#F7EEFF" },
          drawerIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
