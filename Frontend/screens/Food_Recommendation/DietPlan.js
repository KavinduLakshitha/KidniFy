import { ScrollView, View, Button, Text } from "react-native";
import React, { useEffect, useState } from "react";
import DietPlanA from "./DietPlanA";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useWindowDimensions } from "react-native";
import DietPlanB from "./DietPlanB";

import DietPlanC from "./DietPlanC";
import DietPlanD from "./DietPlanD";

export default function DietPlan() {
  const [value, setValue] = useState(null);
  const route = useRoute();
  const { fontScale } = useWindowDimensions();

  const {
    stage,
    potassium,
    calcium,
    phosphorus,
    sodium,
    hemoglobin,
    cholesterol,
  } = route.params;

  const [inputDietData, setInputDietData] = useState({
    stage,
    potassium,
    calcium,
    phosphorus,
    sodium,
    hemoglobin,
    cholesterol,
  });

  const [dietPlan, setDietPlan] = useState("");

  useEffect(() => {
    axios
      .post("http://192.168.8.156:5001/predict", inputDietData)
      .then((response) => {
        setDietPlan(response.data.prediction);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#f0f9ff",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          backgroundColor: "#f0f9ff",
        }}
      >
        <View>
          <View
            style={{
              width: "85%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <View
              style={{
                marginTop: "2.5%",
              }}
            >
              {/* <Button title="Predict" onPress={handleSubmit} /> */}

              <Text
                style={{
                  fontSize: 16 / fontScale,
                  fontFamily: "OpenSans-SemiBold",
                }}
              >
                {dietPlan}
              </Text>

              <Text
                style={{
                  fontSize: 16 / fontScale,
                  fontFamily: "OpenSans-SemiBold",
                  color: "#333366",
                  marginTop: "5%",
                }}
              >
                The ideal diet plan for you is:
              </Text>
              {dietPlan === "Low" && <DietPlanA />}
              {dietPlan === "Safe" && <DietPlanB />}
              {dietPlan === "Caution" && <DietPlanC />}
              {dietPlan === "Danger" && <DietPlanD />}
            </View>
          </View>
        </View>

        <View
          style={{
            marginBottom: "7.5%",
            marginLeft: "auto",
            marginRight: "auto",
            width: "85%",
          }}
        ></View>
      </View>
    </ScrollView>
  );
}
