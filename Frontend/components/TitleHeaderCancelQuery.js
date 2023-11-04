import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";

export default function TitleHeaderCancelQuery() {
  const navigation = useNavigation();
  const { fontScale } = useWindowDimensions();

  return (
    <View
      style={{
        backgroundColor: "#f0f9ff",
        height: "100%",
        borderBottomColor: "#b3e0ff",
        borderBottomWidth: 1,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{
          marginLeft: "auto",
          height: "100%",
          justifyContent: "flex-end",
          marginBottom: "7.5%",
        }}
        onPress={() => navigation.navigate("MainScreen")}
      >
        <Text
          style={{
            fontSize: 14 / fontScale,
            marginLeft: "auto",
            color: "#2196F3",
            marginRight: "5%",
            textAlign: "center",
            fontFamily: "OpenSans-SemiBold",
          }}
        >
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
}
