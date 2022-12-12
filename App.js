import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LandingPage } from "./screens/LandingScreen";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    "OverPass-Regular": require("./assets/Overpass-Regular.ttf"),
  });
  return <LandingPage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
