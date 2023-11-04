import { TouchableOpacity, Text, useWindowDimensions } from "react-native";
import React from "react";

const ButtonFilledLight = ({ title, onPress, disabled }) => {
  const { fontScale } = useWindowDimensions();

  return (
    // <LinearGradient>
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: "100%",
        alignItems: "center",
        borderRadius: 22,
        backgroundColor: disabled ? "#2196F380" : "#9aaaff",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        overflow: "hidden",
        android_elevation: 1,
      }}
    >
      <Text
        style={{
          color: "#ffffff",
          fontSize: 16 / fontScale,
          fontFamily: "OpenSans-SemiBold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
    // </LinearGradient>
  );
};

export default ButtonFilledLight;
