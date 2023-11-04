import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { useWindowDimensions } from "react-native";

export default function WaterQualityInput(props) {
  const { label, unit, keyboardType } = props;
  const { fontScale } = useWindowDimensions();

  return (
    <View
      style={{
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2.5%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            fontSize: 13 / fontScale,
            color: "#222244",
          }}
        >
          {label}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <TextInput
            keyboardType={keyboardType}
            style={{
              fontFamily: "OpenSans-Regular",
              fontSize: 18,
              borderWidth: 1,
              borderColor: "#333366",
              width: 155,
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 45,
            }}
          />
        </View>
      </View>
    </View>
  );
}
