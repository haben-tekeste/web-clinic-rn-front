import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../Screens/HomeScreen";
import BillScreen from "../../Screens/BillScreen";
import AccountScreen from "../../Screens/AccountScreen";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";

export default () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          ...tabBarStyle.style,
          elevation: 0,
          borderTopWidth: 5,
          borderTopColor: "#C69BE0",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo
                name="home"
                size={30}
                color={focused ? "#8212A9" : "#E0C8EE"}
                style={{ position: "absolute", top: -190, left: 29 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bills"
        component={BillScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
                name="money-bill-alt"
                size={30}
                color={focused ? "#8212A9" : "#E0C8EE"}
                style={{ position: "absolute", top: -190, left: -18 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="person"
                size={30}
                color={focused ? "#8212A9" : "#E0C8EE"}
                style={{ position: "absolute", top: -190, left: -65 }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const tabBarStyle = StyleSheet.create({
  style: {
    position: "absolute",
    height: 500,
    width: 500,
    bottom: -370,
    left: -45,
    borderRadius: 500 / 2,
    borderWidth: 5,
    borderColor: "#C69BE0",
    transform: [{ scaleX: 1.3 }],
  },
});
