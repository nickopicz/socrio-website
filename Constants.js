import { Dimensions } from "react-native";

export const Colors = {
  black: "#000000",
  night: "#222831",
  dusk: "#393E46",
  aegean: "#6495ED",
  led: "#87CEFA",
  white: "#E0FFFF",
  clay: "#DA8F81",
  dryBlood: "#9d847e",
  powder: "#dff5fb",
};

export const Dim = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const Font = {
  h1: {
    size: 36,
    family: "OverPass-Regular",
  },
  h2: {
    size: 32,
    family: "OverPass-Regular",
  },
  h3: {
    size: 28,
    family: "OverPass-Regular",
  },
  h4: {
    size: 24,
    family: "OverPass-Regular",
  },
  p1: {
    size: 20,
    family: "OverPass-Regular",
  },
  p2: {
    size: 18,
    family: "OverPass-Regular",
  },
  p3: {
    size: 14,
    family: "OverPass-Regular",
  },
  p4: {
    size: 12,
    family: "OverPass-Regular",
  },
};
