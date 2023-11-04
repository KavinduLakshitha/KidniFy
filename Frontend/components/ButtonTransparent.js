import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";

const ButtonTransparent = ({ title, onPress }) => {
  const { fontScale } = useWindowDimensions();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 12,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "500",
          color: "#5960ff",
          fontSize: 16 / fontScale,
          fontFamily: "OpenSans-SemiBold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonTransparent;
