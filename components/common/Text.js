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
import { Text, Animated } from "react-native";

import { Colors, Font } from "../../Constants";

/**
  children (string): Text to be rendered.
  h1...h4, p1...p4 (bool): Size of the text.
  style (JS Object): All style props.

  Colors: (defaults to white. only apply one.) 
  These should be updated periodically to reflect Constants.js
    black: "#000000",
    night: "#222831",
    dusk: "#393E46",
    aegean: "#6495ED",
    led: "#87CEFA",
    white: "#E0FFFF",
    clay: "#DA8F81",
    dryBlood: "#9d847e",
  
  Uppercase: use u prop

  Example: <Text h3 red u>Agora</Text> will display RAGER in 28 pt font colored red

  RN Text props (see RN docs):
    numberOfLines (number)
    ellipsizeMode (string)
    onPress (function)
    textBreakStrategy (string)
*/
const CustomText = (props) => {
  let font = {};
  let color = "#FFF";

  if (props.h1) {
    font = Font.h1;
  } else if (props.h2) {
    font = Font.h2;
  } else if (props.h3) {
    font = Font.h3;
  } else if (props.h4) {
    font = Font.h4;
  } else if (props.p1) {
    font = Font.p1;
  } else if (props.p2) {
    font = Font.p2;
  } else if (props.p3) {
    font = Font.p3;
  } else if (props.p4) {
    font = Font.p4;
  }

  if (props.black) {
    color = Colors.black;
  } else if (props.night) {
    color = Colors.night;
  } else if (props.dusk) {
    color = Colors.dusk;
  } else if (props.aegean) {
    color = Colors.aegean;
  } else if (props.led) {
    color = Colors.led;
  } else if (props.white) {
    color = Colors.white;
  } else if (props.clay) {
    color = Colors.clay;
  } else if (props.dryBlood) {
    color = Colors.dryBlood;
  } else if (props.powder) {
    color = Colors.powder;
  }

  return (
    <Animated.Text
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
      onPress={props.onPress}
      textBreakStrategy={props.textBreakStrategy}
      style={{
        color,
        fontSize: font.size,
        fontFamily: font.family,
        ...props.style,
      }}
      adjustsFontSizeToFit={props.adjustsFontSizeToFit}
    >
      {props.u && typeof props.children !== "object"
        ? props.children.toString().toUpperCase()
        : props.children}
    </Animated.Text>
  );
};

export default CustomText;
