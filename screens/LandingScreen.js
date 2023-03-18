import React, { useEffect, useRef, useCallback, useState } from "react";
import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import { Colors, Dim } from "../Constants";
import { useFonts } from "expo-font";
import * as Linking from "expo-linking";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../components/common/Text";
import { RoundedButton } from "../components/common/Button";
import { CardHolder } from "../components/Card";

export const LandingPage = ({ navigation }) => {
  const bottomRef = useRef(null);

  function handlePress() {
    Linking.openURL(
      "https://docs.google.com/forms/d/e/1FAIpQLSe4Szo17_R3TWXCnpAtdYN2cnGpE_t4gCjgpWluKWBbX1UeMw/viewform?usp=sf_link"
    );
  }

  function handleTester() {
    Linking.openURL("https://testflight.apple.com/join/Cp3QDns3");
  }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   let scrolled = Dim.height * 0.628 + window.scrollY;
  //   setScrollY(scrolled);

  //   if (scrolled >= 650) {
  //     setTransform("180deg");
  //   } else {
  //     setTransform("90deg");
  //   }
  //   console.log("scrolled to : ", Dim.height * 0.628 + window.scrollY);
  // };

  useEffect(() => {
    console.log("\n bottom of the page pos: ");
    bottomRef.current.measureInWindow((x, y, width, height) => {
      console.log(" info at : ", y);
    });
    console.log(" \n scroll anim pos: ");

    // scrollRef.current.
    console.log("size of total page: ", Dim.height);
    // scrollRef.current.measureInWindow((x, y, width, height) => {
    //   console.log(
    //     `Scroll is at: x: ${x}, y: ${y}, width: ${width}, height: ${height}`
    //   );
    // });
  });

  return (
    <View
      style={{
        backgroundColor: Colors.powder,
        width: "100%",
        overflow: "hidden",
        alignItems: "center",
        height: 2000,
      }}
    >
      <View
        style={{
          alignItems: "center",
          width: "40%",
          flexDirection: "column",
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
              fontWeight: "600",
              textAlignVertical: "center",
            }}
            aegean
          >
            Socrio
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
            <CustomText powder h4 style={{ position: "relative" }}>
              join
            </CustomText>
          </RoundedButton>
          <RoundedButton
            small
            style={
              Dim.width < Dim.height
                ? {
                    backgroundColor: Colors.led,
                    marginVertical: 50,
                    height: 50,
                    width: 300,
                    shadowColor: Colors.white,
                    shadowOffset: {
                      width: 0,
                      height: 7,
                    },
                    shadowOpacity: 0.1,
                  }
                : {
                    backgroundColor: Colors.led,

                    marginVertical: 50,
                    height: 50,
                    width: 300,
                    shadowColor: Colors.white,
                    shadowOffset: {
                      width: 0,
                      height: 7,
                    },
                    shadowOpacity: 0.1,
                  }
            }
            onPress={() => handleTester()}
          >
            <CustomText dusk p1 style={{ position: "relative" }}>
              Beta Test for iOS
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
            textContent={"\n Use your voice to express ideas ! \n \n"}
          />
          <CardHolder
            title={" \n Start Now! "}
            textContent={"\n Become a voice in your community! \n \n"}
          />
        </View>
        <View
          ref={bottomRef}
          style={{
            alignSelf: "center",
            marginTop: Dim.height < Dim.width ? "20%" : "100%",
            borderColor: Colors.dusk,
            borderWidth: 1,
            backgroundColor: Colors.led,
            borderRadius: 10,
            height: 50,
            width: 160,
            justifyContent: "center",
          }}
        >
          <CustomText p2 dusk style={{ textAlign: "center" }}>
            info@socrio.net
          </CustomText>
        </View>
      </View>
    </View>
  );
};
