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
    <View style={{ height: Dim.height * 2, width: Dim.width }}>
      <ImageBackground
        source={require("../assets/stars.gif")}
        resizeMode="repeat"
        style={{ height: Dim.height * 2, width: Dim.width }}
      >
        <View
          style={{
            height: Dim.height * 2,
            width: Dim.width,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <LinearGradient
            colors={[Colors.aegean, Colors.black]}
            style={{
              width: Dim.width * 0.25,
              height: Dim.height * 2,
              opacity: 0.7,
            }}
            start={{ x: 0, y: 1 }}
          ></LinearGradient>

          <View
            style={{
              alignItems: "center",
              width: Dim.width * 0.5,
              height: Dim.height * 2,
              backgroundColor: Colors.black,
              opacity: 1,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: Dim.height * 0.15,
                width: Dim.width * 0.25,
              }}
            >
              <CustomText
                style={{
                  position: "relative",
                  fontSize: 80,
                }}
                aegean
              >
                socrio
              </CustomText>
            </View>
            <View
              style={{
                paddingTop: Dim.height * 0.2,
                paddingBottom: Dim.height * 0.3,
              }}
            >
              <RoundedButton
                small
                style={
                  Dim.width < Dim.height
                    ? {
                        height: Dim.height * 0.075,
                        width: Dim.width * 0.3,
                        shadowColor: Colors.white,
                        shadowOffset: {
                          width: 0,
                          height: 7,
                        },
                        shadowOpacity: 0.1,
                      }
                    : {
                        height: Dim.height * 0.075,
                        width: Dim.width * 0.125,
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
            <View
              style={{ alignItems: "center", paddingTop: Dim.height * 0.5 }}
            >
              <CardHolder
                title={" \nMake friends"}
                textContent={
                  "\n Become a voice in your city, county, or state... and listen to interesting people! \n \n"
                }
              />
            </View>
            <View
              style={{
                alignSelf: "center",
                paddingTop: Dim.height * 0.1,
                paddingBottom: Dim.height * 0.05,
              }}
            >
              <CustomText p2 led style={{ textAlign: "center" }}>
                email: nickopicz@gmail.com || phone: 908-410-7335
              </CustomText>
            </View>
          </View>
          <LinearGradient
            style={{
              width: Dim.width * 0.25,
              height: Dim.height * 2,
              opacity: 0.7,
            }}
            colors={[Colors.aegean, Colors.black]}
            start={{ x: 1, y: 1 }}
          >
            <View
              style={{
                alignSelf: "center",
                alignItems: "center",
                paddingTop: Dim.height * 0.75,
                paddingRight: 10,
              }}
            >
              <LottieView
                autoPlay
                loop
                source={require("../assets/down.json")}
                style={{
                  height: 200,
                  width: 140,
                }}
              />
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};
