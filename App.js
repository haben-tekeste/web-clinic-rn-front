import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./src/Components/Navigations/Stack";
import { View } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#F7EEFF" />
      <Stack />
    </NavigationContainer>
  );
}
