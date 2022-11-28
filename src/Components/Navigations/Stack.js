import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "../../Screens/SigninScreen";
import SignupScreen from "../../Screens/SignupScreen";
import Drawer from "./Drawer";
import DoctorDetails from "../../Screens/DoctorDetails";
import DoctorsList from "../../Screens/DoctorsList";
import UpdateProfileScree from "../../Screens/UpdateProfileScree";
import InitialScreen from "../../Screens/InitialScreen";
import ChatScreen from "../../Screens/ChatScreen";

export default () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "#F7EBFF",
      }}
    >
      <Stack.Screen
        name="Initial"
        component={InitialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign-in"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign-up"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Drawer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DoctorDetails"
        component={DoctorDetails}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#F7EEFF",
          },
          headerShadowVisible: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="DoctorsList"
        component={DoctorsList}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#F7EEFF",
          },
          headerShadowVisible: false,
          headerTintColor: "black",
          // animation: "none",
        }}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfileScree}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#F7EEFF",
          },
          headerShadowVisible: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#F7EEFF",
          },
          headerShadowVisible: false,
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
};
