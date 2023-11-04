import { Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonOutlined = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: "#2196F3",
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
        width: "100%",
        alignItems: "center",
        borderRadius: 30,
      }}
    >
      <Text
        style={{
          color: "#2196F3",
          fontSize: 18,
          fontFamily: "OpenSans-Medium",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonOutlined;
