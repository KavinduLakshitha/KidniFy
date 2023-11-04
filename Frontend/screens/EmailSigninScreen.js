import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ButtonFilled from "../components/ButtonFilled";
import ButtonTransparent from "../components/ButtonTransparent";
import FormInput from "../components/FormInput";
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";
import client from "../api/client";

export default function EmailSigninScreen() {
  const navigation = useNavigation();

  const [invalidEmail, setInvalidEmail] = useState("");
  const [invalidPassword, setInvalidPassword] = useState("");

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Required all fields", setError);

    if (!isValidEmail(email))
      return updateError(
        "This email format is invalid. Try again",
        setInvalidEmail
      );

    if (!password.trim() || password.length < 8)
      return updateError("Password is too short", setInvalidPassword);

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await client.post("/sign-in", { ...userInfo });

        if (res.data.success) {
          setUserInfo({
            email: "",
            password: "",
          });
        }

        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View
        style={{
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
        <View style={{ width: "85%", gap: 10 }}>
          <View style={{ gap: 20 }}>
            <View>
              <FormInput
                value={email}
                onChangeText={(value) => handleOnChangeText(value, "email")}
                autoCapitalize="none"
                secureTextEntry={false}
                autoComplete="email"
                label="Email"
                placeholder="Enter your email"
              />
              {invalidEmail ? (
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "OpenSans-Regular",
                    color: "red",
                    position: "absolute",
                    marginTop: 80,
                  }}
                >
                  {invalidEmail}
                </Text>
              ) : null}
            </View>

            <View>
              <FormInput
                value={password}
                onChangeText={(value) => handleOnChangeText(value, "password")}
                autoCapitalize="none"
                secureTextEntry={true}
                autoComplete="current-password"
                label="Password"
                placeholder="Enter your password"
              />
              {invalidPassword ? (
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "OpenSans-Regular",
                    color: "red",
                    position: "absolute",
                    marginTop: 80,
                  }}
                >
                  {invalidPassword}
                </Text>
              ) : null}
            </View>
          </View>
          <View>
            <View style={{ marginTop: 40 }}>
              <ButtonFilled
                title="Log in"
                disabled={!isValidObjField(userInfo)}
                // onPress={submitForm}
                onPress={() => navigation.navigate("MainTabNavigator")}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <ButtonTransparent
                title="I forgot my password"
                onPress={() => navigation.navigate("ForgetPwd")}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
