import React, { useEffect, useRef } from "react";
import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import { Colors, Dim } from "../Constants";
import { useFonts } from "expo-font";
import * as Linking from "expo-linking";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import CustomText from "../components/common/Text";
import { RoundedButton } from "../components/common/Button";
import { CardHolder } from "../components/Card";

export const LandingPage = ({ navigation }) => {
  function handlePress() {
    Linking.openURL(
      "https://docs.google.com/forms/d/e/1FAIpQLSe4Szo17_R3TWXCnpAtdYN2cnGpE_t4gCjgpWluKWBbX1UeMw/viewform?usp=sf_link"
    );
  }
  return (
    <View
      style={{
        backgroundColor: Colors.black,
        flexDirection: "row",
        width: "100%",
        overflow: "hidden",
        alignItems: "stretch",
        height: 2000,
      }}
    >
      <View
        style={{
          width: "30%",
          // alignSelf: "flex-start",
          flexDirection: "column",
          backgroundColor: Colors.black,
        }}
      ></View>
      <View
        style={{
          alignItems: "center",
          width: "40%",
          flexDirection: "column",
          backgroundColor: Colors.black,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: "20%",
            width: "60%",
            justifyContent: "space-evenly",
          }}
        >
          <Image
            source={require("../assets/icon_socrio.png")}
            resizeMethod="scale"
            style={{
              height: 100,
              width: 100,
              opacity: 0.9,
              borderRadius: 25,
            }}
          />
          <CustomText
            style={{
              position: "relative",
              fontSize: 50,
              textAlignVertical: "center",
            }}
            aegean
          >
            socrio
          </CustomText>
        </View>
        <View
          style={{
            width: "50%",
            height: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RoundedButton
            small
            style={
              Dim.width < Dim.height
                ? {
                    marginVertical: 50,
                    height: 50,
                    width: 150,
                    shadowColor: Colors.white,
                    shadowOffset: {
                      width: 0,
                      height: 7,
                    },
                    shadowOpacity: 0.1,
                  }
                : {
                    marginVertical: 50,
                    height: 50,
                    width: 150,
                    shadowColor: Colors.white,
                    shadowOffset: {
                      width: 0,
                      height: 7,
                    },
                    shadowOpacity: 0.1,
                  }
            }
            onPress={() => handlePress()}
          >
            <CustomText black h4 style={{ position: "relative" }}>
              join
            </CustomText>
          </RoundedButton>
        </View>
        {/* <View
              style={{ height: 50, width: 160, backgroundColor: Colors.aegean }}
            > */}
        <Image
          source={require("../assets/app_store_apple.jpg")}
          resizeMethod="auto"
          style={{
            height: 55,
            width: 180,
            opacity: 0.8,
            borderRadius: 10,
            borderWidth: 1,
            marginTop: "30%",
            marginBottom: "15%",
            borderColor: Colors.powder,
            shadowColor: Colors.white,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.2,
          }}
        />
        {/* </View> */}
        <View style={{ alignItems: "center" }}>
          <CardHolder
            title={" \nDiscover"}
            textContent={
              "\n Openly express ideas and advocate for change in your area! \n \n"
            }
          />
          <CardHolder
            title={" \nMake friends"}
            textContent={
              "\n Become a voice in your city, county, or state... and listen to interesting people... \n \n"
            }
          />
        </View>
        <View
          style={{
            alignSelf: "center",
            marginTop: Dim.height < Dim.width ? "20%" : "100%",
            backgroundColor: Colors.black,
          }}
        >
          <CustomText p2 led style={{ textAlign: "center" }}>
            info@socrio.net
          </CustomText>
        </View>
      </View>
      <View
        style={{
          width: "30%",
        }}
      >
        <LottieView
          autoPlay
          loop
          source={require("../assets/down.json")}
          style={{
            height: 200,
            width: 140,
            alignSelf: "center",
            marginTop: Dim.height * 0.8,
          }}
        />
      </View>
    </View>
  );
};
