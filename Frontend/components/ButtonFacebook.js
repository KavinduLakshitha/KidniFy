import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ButtonFacebook = ({ title }) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: "#1877F2",
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <FontAwesome5 name="facebook" size={20} color="white" />
      <Text
        style={{
          fontWeight: "500",
          color: "#ffffff",
          fontSize: 18,
          fontFamily: "OpenSans-Medium",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonFacebook;
