import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ButtonFilled from "../components/ButtonFilled";
import ButtonFacebook from "../components/ButtonFacebook";
import ButtonTransparent from "../components/ButtonTransparent";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "85%",
          marginVertical: "5%",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontFamily: "Lora-Medium",
            marginBottom: 20,
            color: "#222244",
          }}
        >
          Welcome back
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            textAlign: "justify",
            fontFamily: "OpenSans-Regular",
            color: "#333366",
          }}
        >
          Please log in with the option you originally signed up with.
        </Text>
      </View>
      <View style={{ width: "85%", gap: 15, marginTop: 60 }}>
        <ButtonFilled
          title="Sign in with email"
          onPress={() => navigation.navigate("SigninwithEmail")}
        />
        <ButtonFacebook title="Sign in with Facebook" />
        <ButtonTransparent
          title="Create a new account"
          onPress={() => navigation.navigate("Agreement")}
        />
      </View>
    </View>
  );
}
