import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import CarouselDietD from "../../components/CarouselDietD";

export default function DietPlanD() {
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
              Renal Support Max
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
              Highly restrictive, with minimal protein, potassium, phosphorus,
              and sodium.
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
              May incorporate dialysis-specific dietary guidelines if
              applicable.
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
              Advocates for a limited fluid intake to avoid fluid retention.
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
              Emphasizes working closely with a nephrologist or dietitian for
              personalized care.
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

        <CarouselDietD />
      </View>
    </View>
  );
}
