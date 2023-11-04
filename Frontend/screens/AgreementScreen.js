import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import { StyleSheet } from "react-native";

const AgreementScreen = () => {
  const navigation = useNavigation();
  const [isAgreed, setAgreed] = useState(false);
  const [isConsent, setConsent] = useState(false);

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
            marginBottom: 20,
            color: "#222244",
          }}
        >
          Confirm you're ready
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22,
            textAlign: "justify",
            fontFamily: "OpenSans-Regular",
            color: "#333366",
          }}
        >
          Please read our{" "}
          <Text
            onPress={() => navigation.navigate("PrivacyPolicy")}
            style={{ color: "#2196F3" }}
          >
            Privacy Policy{" "}
          </Text>
          <Text>
            and confirm the following declarations. Consents can be withdrawn in
            Setttings at any time.
          </Text>
        </Text>
      </View>
      <View style={{ width: "85%", gap: 25 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 12,
          }}
        >
          <Checkbox
            value={isAgreed}
            onValueChange={setAgreed}
            color={isAgreed ? "#2196F3" : undefined}
            style={{ marginTop: 5 }}
          />
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              flex: 1,
              textAlign: "justify",
              fontFamily: "OpenSans-Regular",
              color: "#333366",
            }}
          >
            I agree to KidniFy's{" "}
            <Text
              onPress={() => navigation.navigate("Terms")}
              style={{ color: "#2196F3" }}
            >
              Terms & Conditions
            </Text>
            <Text> and confirm that I am at least 16 years old.</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 12,
          }}
        >
          <Checkbox
            value={isConsent}
            onValueChange={setConsent}
            color={isConsent ? "#2196F3" : undefined}
            style={{ marginTop: 5 }}
          />
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              flex: 1,
              textAlign: "justify",
              fontFamily: "OpenSans-Regular",
              color: "#333366",
            }}
          >
            I consent to KidniFy using any personal health data I voluntarily
            share here so KidniFy can create and personalise my account and
            provide predictive analysys and guidance.
          </Text>
        </View>
      </View>
      <View style={{ width: "85%", marginTop: "15%" }}>
        <TouchableOpacity
          disabled={!isAgreed || !isConsent}
          onPress={() => navigation.navigate("CreateAccount")}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 12,
            alignItems: "center",
            borderRadius: 30,
            backgroundColor: !isAgreed || !isConsent ? "#2196F380" : "#2196F3",
            ...(isAgreed && isConsent && { backgroundColor: "#2196F3" }),
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              color: "#ffffff",
              fontSize: 18,
              fontFamily: "OpenSans-Medium",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AgreementScreen;
