import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ButtonFilled from "../components/ButtonFilled";
import FormInput from "../components/FormInput";

export default function MobileSignIn() {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#f0f9ff",
        }}
      >
        <View
          style={{
            backgroundColor: "#f0f9ff",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Lora-Bold",
              color: "#222244",
              marginTop: "15%",
              textAlign: "center",
            }}
          >
            Sign Up
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#f0f9ff",
            borderRadius: 30,
            marginTop: "auto",
            marginBottom: "auto",
            paddingVertical: "7.5%",
            justifyContent: "space-between",
            marginHorizontal: "3%",
            ...Platform.select({
              ios: {
                shadowColor: "#5960ff",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 6,
              },
              android: {
                elevation: 8,
              },
            }),
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "OpenSans-SemiBold",
                fontSize: 18,
                width: "85%",
                alignSelf: "center",
                color: "#222244",
                marginBottom: "7.5%",
              }}
            >
              Enter your mobile number to create an account.
            </Text>
            <TextInput
              placeholder="Mobile Number"
              keyboardType="numeric"
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 18,
                width: "80%",
                paddingVertical: 15,
                paddingHorizontal: 15,
                borderBottomColor: "grey",
                borderBottomWidth: 0.8,
                alignSelf: "center",
                marginBottom: "7.5%",
              }}
            />
          </View>
          <View
            style={{
              width: "85%",
              alignSelf: "center",
            }}
          >
            <ButtonFilled
              onPress={() => navigation.navigate("OTPScreen")}
              title="Request OTP"
            />
          </View>
        </View>
      </View>
    </>
  );
}
