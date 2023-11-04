import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import CarouselDietB from "../../components/CarouselDiet";
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
              Renal Balance Advance
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
              Get a balanced intake of high-quality protein from sources
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
              Avoid high-sodium processed foods and use herbs and spices for
              flavor instead of salt.
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
              Promoting a balanced diet with moderate protein.
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
              Be aware of foods that are high in these minerals.
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

        <CarouselDietB />
      </View>
    </View>
  );
}
