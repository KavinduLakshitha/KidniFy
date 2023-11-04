import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";

export default function ComponentCard() {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        aspectRatio: 2 / 3,
        borderRadius: 25,
        shadowColor: "#5960ff",
        shadowOpacity: 0.6,
        shadowRadius: 5,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        elevation: 8,
        backgroundColor: "#f0f9ff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image style={{ height: 120, width: 100 }} />
      <Text
        style={{
          fontSize: 16,
          fontFamily: "OpenSans-Bold",
          color: "#333366",
          textAlign: "center",
          marginTop: 10,
        }}
      ></Text>
    </TouchableOpacity>
  );
}
