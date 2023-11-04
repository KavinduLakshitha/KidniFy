import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import ButtonFilled from "../../components/ButtonFilled";
import { useNavigation } from "@react-navigation/native";
import CarouselDiet from "../../components/CarouselDiet";
import { Ionicons } from "@expo/vector-icons";

export default function FoodHomeScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f9ff",
        // marginVertical: "15%",
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
          <Ionicons name="ios-settings-outline" size={28} color="#222244" />
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
          Let's create a diet plan
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
          For You
        </Text>
      </View>

      <SafeAreaView>
        <CarouselDiet />
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
          onPress={() => navigation.navigate("DietStepOne")}
        />
      </View>
    </View>
  );
}
