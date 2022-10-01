import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "../../Screens/SigninScreen";
import SignupScreen from "../../Screens/SignupScreen";
import Drawer from "./Drawer";

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
    </Stack.Navigator>
  );
};
