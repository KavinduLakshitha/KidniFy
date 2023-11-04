import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FormInput from "../components/FormInput";
import ButtonFilled from "../components/ButtonFilled";
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";
import client from "../api/client";

export default function CreateAccountScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [invalidEmail, setInvalidEmail] = useState("");
  const [invalidPassword, setInvalidPassword] = useState("");

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Please fill in both fields to sign up.", setError);

    // Check if the email is valid

    if (!isValidEmail(email))
      return updateError(
        "This email format is invalid. Try again",
        setInvalidEmail
      );

    // Check if the password is valid

    if (!password.trim() || password.length < 8)
      return updateError(
        "Password must be at least 8 characters",
        setInvalidPassword
      );

    return true;
  };

  const signUp = async () => {
    if (isValidForm()) {
      try {
        const response = await client.post("/create-user", userInfo);
        console.log(response.data);
        navigation.navigate("MainTabNavigator");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          marginHorizontal: "auto",
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
            Create your account
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
            Sign up with an email and password, or with your Facebook account.
          </Text>
        </View>
        <View style={{ width: "85%", gap: 20 }}>
          <View>
            <FormInput
              value={email}
              onChangeText={(value) => handleOnChangeText(value, "email")}
              autoCapitalize="none"
              secureTextEntry={false}
              autoComplete="email"
              placeholder="Type your email"
              label="Email"
              style={{ position: "relative" }}
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

          <View style={{ position: "relative" }}>
            <FormInput
              value={password}
              onChangeText={(value) => handleOnChangeText(value, "password")}
              autoCapitalize="none"
              secureTextEntry={true}
              placeholder="Set a password"
              autoComplete="current-password"
              label="Password"
            />

            <Text
              style={{
                fontSize: 14,
                fontFamily: "OpenSans-Regular",
                color: invalidPassword ? "red" : "#333366CC",
              }}
            >
              Password must be at least 8 characters.
            </Text>
          </View>
        </View>
        <View style={{ width: "85%", gap: 15, marginTop: 60 }}>
          <ButtonFilled
            title="Sign up"
            onPress={signUp}
            disabled={email === "" || password === ""}
          />

          <Text style={{ textAlign: "center" }}>Or :</Text>
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
              Sign in with Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 12,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                color: "#2196F3CC",
                fontSize: 18,
                fontFamily: "OpenSans-Medium",
              }}
            >
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
