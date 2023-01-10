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
import { View, StyleSheet, ImageProps } from "react-native";
import Text from "./common/Text";
import { Card } from "react-native-elements";
import { Colors, Dim } from "../Constants";

/**
 * @props title = the title of the card
 * @props imageSource = source of the media
 * @props textContent = inner paragraph style text
 * @returns card component
 */
export const CardHolder = ({ title, imageSource, textContent }) => {
  return (
    <Card containerStyle={styles.border}>
      <Card.Title>
        <Text h4 u led>
          {title}
        </Text>
      </Card.Title>
      <Card.Divider color={Colors.led} />
      {imageSource && <Card.Image source={imageSource} />}
      <Text p1 powder style={{ marginBottom: 10, textAlign: "center" }}>
        {textContent}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  border: {
    backgroundColor: Colors.night,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.night,
    alignItems: "center",
    opacity: 0.8,
    width: "90%",
    marginVertical: "10%",
  },
});
