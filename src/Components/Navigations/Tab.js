import React from "react";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../Screens/HomeScreen";
import BillScreen from "../../Screens/BillScreen";
import AccountScreen from "../../Screens/AccountScreen";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";

export default () => {
  const Tab = createBottomTabNavigator();
  const { width, height } = useWindowDimensions();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          ...tabBarStyle.style,
          width: width,
          height: width,
          borderRadius: width,
          transform: [
            { scaleX: width / (width / 1.5) },
            { translateY: width / 1.4 },
          ],
          position: "absolute",
          elevation: 0,
          borderTopWidth: 5,
          borderTopColor: "#C69BE0",
        },
      }}
    >
      <Tab.Screen
        name="Homes"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo
                name="home"
                size={25}
                color={focused ? "#8212A9" : "#E0C8EE"}
                style={{
                  position: "relative",
                  top: -height / 6.5,
                  left: width / 12,
                  transform: [{ scaleY: 1.2 }, { scaleX: 0.8 }],
                }}
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
                size={25}
                color={focused ? "#8212A9" : "#E0C8EE"}
                style={{
                  position: "relative",
                  top: -height / 6.5,
                  transform: [{ scaleY: 1.2 }, { scaleX: 0.8 }],
                }}
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
                name="person-sharp"
                size={25}
                color={focused ? "#8212A9" : "#E0C8EE"}
                style={{
                  position: "relative",
                  top: -height / 6.5,
                  left: -width / 12,
                  transform: [{ scaleY: 1.2 }, { scaleX: 0.8 }],
                }}
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
    borderWidth: 5,
    borderColor: "#C69BE0",
  },
});
