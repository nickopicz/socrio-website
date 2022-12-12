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
import { TouchableOpacity } from "react-native";
import { Colors, Dim, Font } from "../../Constants";
import Text from "./Text";

/**
 * @props disabled bool value for disabling button
 * @props onPress onpress function
 * @props onPressIn press-in (hold) callback function
 * @props onPressout out-press (release) callback function
 * @props style [ . . . style]
 * @props textStyle styling for text
 *
 * @returns common rounded button component
 *
 */

export const RoundedButton = React.forwardRef((props, ref) => {
  let width = undefined;
  if (props.small) {
    width = Dim.width * 0.4;
  } else if (props.medium) {
    width = Dim.width * 0.6;
  } else if (props.large) {
    width = Dim.width * 0.8;
  }
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      ref={ref}
      style={{
        width: width,
        backgroundColor:
          props.enabled && props.enabled.state ? Colors.dusk : Colors.aegean,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 7.5,
        borderRadius: 18,
        ...props.style,
      }}
    >
      <Text
        p1
        white
        u
        black={props.enabled && props.enabled.state}
        style={props.textStyle}
      >
        {props.enabled && props.enabled.state
          ? props.enabled.text
          : props.children
          ? props.children
          : ""}
      </Text>
    </TouchableOpacity>
  );
});
