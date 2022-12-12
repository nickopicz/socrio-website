/**
 *
 *   |\\  ||    ||\\\\
 *   ||\\ ||    ||
 *   || \\||    ||
 *   ||  \||    ||////
 *
 *   ------This file was created, authored, currently owned and all rights belong to the author NC------
 *
 *                                  Author: Nicholas Ciraulo
 */

import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Colors, Dim, Font } from "../../Constants";
import { Feather as Icon } from "@expo/vector-icons";

/**
 * @props width = [small, medium, large] width of text input
 * @props iconName = name of icon in feather of expo/vector-icons
 * @props placeholderColor = color of the placeholder text
 * @props . . . children
 *
 */
export const CustomInput = React.forwardRef((props, ref) => {
  let width = undefined;
  if (props.small) {
    width = Dim.width * 0.4;
  } else if (props.medium) {
    width = Dim.width * 0.6;
  } else if (props.large) {
    width = Dim.width * 0.8;
  }
  const styles = StyleSheet.create({
    container: {
      width: width,
      flexDirection: "row",
      backgroundColor: Colors.aegean,
      borderRadius: 23,
      margin: 12,
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 10,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.3,
      shadowColor: Colors.led,
    },
    input: {
      // backgroundColor: "#00FF0030",
      fontSize: Font.p2.size,
      flex: 1,
      // paddingVertical: 10,
      // fontFamily: "LilitaOne_400Regular"
    },
  });

  return (
    <View style={styles.container}>
      {props.iconName ? (
        <Icon
          name={props.iconName}
          size={Font.p1.size}
          color={Colors.dusk}
          style={{
            marginRight: 10,
            //   backgroundColor: "#FF000030",
          }}
        />
      ) : null}

      <TextInput
        placeholderTextColor={
          props.placeholderColor ? props.placeholderColor : Colors.dusk
        }
        style={{ ...styles.input, ...props.style, color: Colors.black }}
        ref={ref}
        {...props}
      >
        {props.children}
      </TextInput>
    </View>
  );
});
