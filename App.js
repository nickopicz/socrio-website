import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LandingPage } from "./screens/LandingScreen";
import { useFonts } from "expo-font";
import { Colors } from "./Constants";

export default function App() {
  let [fontsLoaded] = useFonts({
    "OverPass-Regular": require("./assets/Overpass-Regular.ttf"),
  });
  return <LandingPage />;
}
