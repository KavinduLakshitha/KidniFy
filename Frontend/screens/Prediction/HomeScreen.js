import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { Image } from "expo-image";
import ButtonFilled from "../../components/ButtonFilled";
import PredictionStepOne from "./PredictionStepOne";
import { useNavigation } from "@react-navigation/native";
import Carousel from "../../components/Carousel";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f9ff",
      }}
    >
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={{
            alignItems: "flex-end",
            marginRight: "7.5%",
            marginTop: "15%",
            marginLeft: "auto",
          }}
        >
          <Ionicons name="ios-settings-outline" size={24} color="#222244" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            textTransform: "capitalize",
            fontFamily: "Lora-Bold",
            color: "#222244",
            textAlign: "center",
          }}
        >
          Predict your kidney
        </Text>
        <Text
          style={{
            fontSize: 24,
            textTransform: "capitalize",
            fontFamily: "Lora-Bold",
            color: "#222244",
            textAlign: "center",
          }}
        >
          Status
        </Text>
      </View>

      <SafeAreaView>
        <Carousel />
      </SafeAreaView>
      <View
        style={{
          marginTop: "auto",
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "10%",
        }}
      >
        <ButtonFilled
          title="Continue"
          onPress={() => navigation.navigate("PredictionStepOne")}
        />
      </View>
    </View>
  );
}
