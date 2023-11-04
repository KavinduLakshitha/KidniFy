import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import ButtonFilled from "../components/ButtonFilled";

export default function ForgetPwdScreen() {
  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        backgroundColor: "#fff",
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
            color: "#222244",
          }}
        >
          Reset Password
        </Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: "contain",
            width: 240,
            height: 150,
          }}
          source={require("../assets/images/forgetpassword.png")}
        />
      </View>
      <View style={{ width: "85%", gap: 10, marginTop: 15 }}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            textAlign: "justify",
            fontFamily: "OpenSans-Regular",
            color: "#333366",
          }}
        >
          Please enter your email to receive the instructions how to reset your
          password.
        </Text>
        <View style={{ marginTop: 10, gap: 10 }}>
          <Text
            style={{
              fontFamily: "OpenSans-SemiBold",
              fontSize: 20,
              color: "#222244",
            }}
          >
            Email
          </Text>
          <TextInput
            keyboardType="email-address"
            placeholder="Enter your email"
            style={{
              fontFamily: "OpenSans-Regular",
              fontSize: 18,
              borderWidth: 1,
              borderColor: "#333366",
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderRadius: 100,
            }}
          />
          <View style={{ marginTop: 20 }}>
            <ButtonFilled title="Submit" />
          </View>
        </View>
      </View>
    </View>
  );
}
