import React, { useEffect, useRef } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Colors, Dim } from "../Constants";
import { useFonts } from "expo-font";
import * as Linking from "expo-linking";
import { LinearGradient } from "expo-linear-gradient";
import Lottie from "lottie-react-native";
import CustomText from "../components/common/Text";
import { RoundedButton } from "../components/common/Button";

export const LandingPage = ({ navigation }) => {
  const scrollAnim = useRef(null);

  //   useEffect(() => {
  //     scrollAnim.current.play();
  //   }, []);

  function handlePress() {
    Linking.openURL(
      "https://docs.google.com/forms/d/e/1FAIpQLSe4Szo17_R3TWXCnpAtdYN2cnGpE_t4gCjgpWluKWBbX1UeMw/viewform?usp=sf_link"
    );
  }
  return (
    <View
      style={{
        height: Dim.height,
        width: Dim.height,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <LinearGradient
        colors={[Colors.aegean, Colors.black]}
        style={{
          width: Dim.width * 0.25,
          height: Dim.height,
        }}
        start={{ x: 0, y: 1 }}
      >
        <View></View>
      </LinearGradient>

      <View
        style={{
          alignItems: "center",
          width: Dim.width * 0.5,
          height: Dim.height,
          backgroundColor: Colors.black,
        }}
      >
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Image
            source={require("../assets/ancient_agora.jpg")}
            resizeMethod="auto"
            style={{
              height: Dim.height * 0.25,
              width: Dim.width * 0.5,
              opacity: 0.5,
              borderRadius: 20,
            }}
          />
          <CustomText
            aegean
            style={{
              fontSize: 90,
              position: "absolute",
              opacity: 0.8,
              shadowColor: Colors.white,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.2,
            }}
          >
            socrio
          </CustomText>
        </View>
        <View style={{ padding: 200 }}>
          <RoundedButton
            small
            style={{
              height: Dim.height / 9,
              width: Dim.width * 0.25,
              shadowColor: Colors.white,
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.1,
            }}
            onPress={() => handlePress()}
          >
            <CustomText black h2>
              Join the Info List!
            </CustomText>
          </RoundedButton>
        </View>

        <Image
          source={require("../assets/app_store_apple.jpg")}
          resizeMethod="auto"
          style={{
            height: Dim.height * 0.075,
            width: Dim.width * 0.13,
            opacity: 0.8,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors.powder,
            marginTop: -10,
            shadowColor: Colors.white,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.2,
          }}
        />
      </View>
      <LinearGradient
        style={{
          width: Dim.width * 0.25,
          height: Dim.height,
        }}
        colors={[Colors.aegean, Colors.black]}
        start={{ x: 1, y: 1 }}
      ></LinearGradient>
    </View>
  );
};
