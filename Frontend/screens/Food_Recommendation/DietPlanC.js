import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import CarouselDietC from "../../components/CarouselDietC";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function DietPlanB() {
  const { fontScale } = useWindowDimensions();

  return (
    <View>
      <LinearGradient
        style={{
          borderRadius: 10,
          marginTop: 10,
          padding: 15,
          shadowColor: "#333366",
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 1,
          elevation: 5,
        }}
        colors={["#2e5bc6", "#3b6edf"]}
      >
        <View>
          <Text
            style={{
              backgroundColor: "#d5efff",
              alignSelf: "flex-start",
              paddingVertical: 5,
              borderRadius: 10,
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "Lora-Bold",
                fontSize: 18 / fontScale,
                color: "#222244",
                textAlign: "center",
              }}
            >
              Renal Care Plus
            </Text>
          </Text>

          <View
            style={{
              borderBottomColor: "#fff",
              borderBottomWidth: 0.5,
              paddingVertical: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 13 / fontScale,
                color: "#fff",
              }}
            >
              Further reduces protein intake to lessen the burden on the
              kidneys.​
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#fff",
              borderBottomWidth: 0.5,
              paddingVertical: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 13 / fontScale,
                color: "#fff",
              }}
            >
              Enforces strict limitations on potassium, phosphorus, and sodium.​
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#fff",
              borderBottomWidth: 0.5,
              paddingVertical: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 13 / fontScale,
                color: "#fff",
              }}
            >
              Focuses on minimizing waste buildup in the body.​
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#fff",
              borderBottomWidth: 0.5,
              paddingVertical: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 13 / fontScale,
                color: "#fff",
              }}
            >
              Provides guidance on fortified foods and supplements to address
              potential nutrient deficiencies.​
            </Text>
          </View>
        </View>
      </LinearGradient>

      <View>
        <Text
          style={{
            fontFamily: "Lora-Bold",
            fontSize: 20 / fontScale,
            color: "#222244",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          What to eat
        </Text>

        <CarouselDietC />
      </View>
    </View>
  );
}
