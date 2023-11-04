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
import { useRef } from "react";
import OTPTextView from "react-native-otp-textinput";

export default function OTPScreen() {
  const navigation = useNavigation();

  let otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue("1234");
  };

  return (
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
          //   flex: 1.1,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Lora-Bold",
            color: "#222244",
            marginTop: "15%",
            textAlign: "center",
          }}
        >
          OTP Verification
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#f0f9ff",
          borderRadius: 30,
          marginTop: "auto",
          marginBottom: "auto",
          //   flex: 1,
          paddingVertical: "7.5%",
          justifyContent: "space-between",
          //   marginBottom: "15%",
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
            We have sent the OTP to your mobile number
          </Text>

          <View
            style={{
              width: "85%",
              alignSelf: "center",
              marginBottom: "7.5%",
            }}
          >
            <OTPTextView
              textInputStyle={{
                fontFamily: "OpenSans-Medium",
                fontSize: 18,
                color: "#222244",
              }}
              tintColor="#5960ff"
              ref={(e) => (otpInput = e)}
            />
          </View>

          <Text
            style={{
              textAlign: "center",
              fontFamily: "OpenSans-Medium",
              fontSize: 18,
              width: "85%",
              alignSelf: "center",
              color: "#222244CC",
              marginBottom: 5,
            }}
          >
            Didn't receive the OTP?{" "}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: "#5960ff",
                fontFamily: "OpenSans-SemiBold",
                fontSize: 18,
                textAlign: "center",
                marginBottom: "7.5%",
              }}
            >
              Resend
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "85%",
            alignSelf: "center",
            // marginTop: "auto",
          }}
        >
          <ButtonFilled
            onPress={() => navigation.navigate("MainScreen")}
            title="Get Started"
          />
        </View>
      </View>
    </View>
  );
}
