import React from "react";
import { SafeAreaView, Text, ImageBackground } from "react-native";
import { Dim } from "../Constants";

export const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/stars.gif")}
        resizeMode="repeat"
        style={{ height: Dim.height, width: Dim.width }}
      />
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};
