import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import CarouselDiet from "../../components/CarouselDiet";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function DietPlanA() {
  const { fontScale } = useWindowDimensions();

  return (
    <View>
      {/* <View>
        <Text
          style={{
            fontFamily: "Lora-SemiBold",
            fontSize: 18 / fontScale,
            color: "#222244",
            textAlign: "center",
          }}
        >
          The ideal diet plan for you is
        </Text>
      </View> */}

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
              Renal Care Starter
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
              Emphasizing kidney health and preventing damage.
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
              Reducing sodium, managing blood pressure, and staying hydrated.
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
              Monitoring potassium and phosphorus levels.
            </Text>
          </View>
        </View>
      </LinearGradient>

      {/* <View
        style={{
          gap: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "Lora-Bold",
            fontSize: 21 / fontScale,
            color: "#222244",
            textAlign: "center",
          }}
        >
          Renal Care Starter
        </Text>
        <Text
          style={{
            fontFamily: "OpenSans-Medium",
            fontSize: 13 / fontScale,
            color: "#222244",
          }}
        >
          Emphasizing kidney health and preventing damage.
        </Text>
        <Text
          style={{
            fontFamily: "OpenSans-Medium",
            fontSize: 13 / fontScale,
            color: "#222244",
          }}
        >
          Reducing sodium, managing blood pressure, and staying hydrated.
        </Text>
        <Text
          style={{
            fontFamily: "OpenSans-Medium",
            fontSize: 13 / fontScale,
            color: "#222244",
          }}
        >
          Promoting a balanced diet with moderate protein.
        </Text>
        <Text
          style={{
            fontFamily: "OpenSans-Medium",
            fontSize: 13 / fontScale,
            color: "#222244",
          }}
        >
          Monitoring potassium and phosphorus levels.
        </Text>
      </View> */}

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

        <CarouselDiet />
      </View>
    </View>
  );
}
