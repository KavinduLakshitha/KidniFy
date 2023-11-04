import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LabDataInput from "../../../components/LabDataInput";
import { Ionicons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Button } from "react-native-paper";
import axios from "axios";

export default function CKDStagew() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { fontScale } = useWindowDimensions();
  const route = useRoute();

  // async function fetchData() {
  //   const result = await API.getData();
  //   setData(result);
  //   setIsLoading(false);
  // }

  const {
    bloodpressure,
    bloodsugar,
    albumin,
    hemoglobin,
    serumcreatinine,
    nitrogen,
    sodium,
    potassium,
    wbc,
    rbc,
    protein,
  } = route.params;

  const [inputStageData, setInputStageData] = useState({
    bloodpressure,
    bloodsugar,
    albumin,
    hemoglobin,
    serumcreatinine,
    nitrogen,
    sodium,
    potassium,
    wbc,
    rbc,
    protein,
  });

  const [stage, setStage] = useState("");

  useEffect(() => {
    axios
      .post("http://192.168.8.156:5003/predict", inputStageData)
      .then((response) => {
        setStage(response.data.prediction);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    console.log(route.params);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#f0f9ff",
      }}
    >
      <View
        style={{
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2.5%",
        }}
      >
        <Text
          style={{
            fontSize: 18 / fontScale,
            fontFamily: "OpenSans-Medium",
            textAlign: "center",
          }}
        >
          You are at stage {stage}
        </Text>

        <View
          style={{
            marginTop: "5%",
            backgroundColor: "#ecf6ff",
            borderRadius: 10,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-Bold",
                fontSize: 15 / fontScale,
                color: "#222244",
                flex: 0.6,
              }}
            >
              Stage
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans-Bold",
                fontSize: 15 / fontScale,
                color: "#222244",
                flex: 2,
              }}
            >
              Description
            </Text>
          </View>
          <View
            style={{
              gap: 10,
              marginTop: "5%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontFamily: "OpenSans-Medium",
                  fontSize: 15 / fontScale,
                  color: "#222244",
                  flex: 0.6,
                }}
              >
                1
              </Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Medium",
                  fontSize: 15 / fontScale,
                  color: "#222244",
                  flex: 2,
                }}
              >
                Normal
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontFamily: "OpenSans-Medium",
                  fontSize: 15 / fontScale,
                  color: "#222244",
                  flex: 0.6,
                }}
              >
                2
              </Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Medium",
                  fontSize: 15 / fontScale,
                  color: "#222244",
                  flex: 2,
                }}
              >
                Normal to Slightly Moderate
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontFamily: "OpenSans-Medium",
                  fontSize: 15 / fontScale,
                  color: "#222244",
                  flex: 0.6,
                }}
              >
                3
              </Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Medium",
                  fontSize: 15 / fontScale,
                  color: "#222244",
                  flex: 2,
                }}
              >
                Moderate to Severe
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontFamily: "OpenSans-Medium",
                  fontSize: 15 / fontScale,
                  color: "#222244",
                  flex: 0.6,
                }}
              >
                4
              </Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Medium",
                  fontSize: 15 / fontScale,
                  color: "#222244",
                  flex: 2,
                }}
              >
                Severe
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontFamily: "OpenSans-Medium",
                  fontSize: 15 / fontScale,
                  color: "#222244",
                  flex: 0.6,
                }}
              >
                5
              </Text>
              <Text
                style={{
                  fontFamily: "OpenSans-Medium",
                  fontSize: 15 / fontScale,
                  color: "#222244",
                  flex: 2,
                }}
              >
                On Dialysis End Stage Kidney Failure
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          marginBottom: "7.5%",
          marginLeft: "auto",
          marginRight: "auto",
          width: "85%",
          gap: 20,
        }}
      ></View>
    </View>
  );
}
