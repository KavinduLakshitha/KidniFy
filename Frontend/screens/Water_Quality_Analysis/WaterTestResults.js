import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ButtonFilled from "../../components/ButtonFilled";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WaterTestResults() {
  const navigation = useNavigation();
  const { fontScale } = useWindowDimensions();
  const route = useRoute();
  const { location, pHValue, temperature, turbidity, tds } = route.params;

  const [inputWaterData, setInputWaterData] = useState({
    location,
    pHValue,
    temperature,
    turbidity,
    tds,
  });

  const [waterquality, setWaterquality] = useState("");

  // const handleSubmit = () => {
  //   axios
  //     .post("http://192.168.8.156:5000/predict", inputDietData)
  // .then((response) => {
  //   setDietPlan(response.data.prediction);
  // })
  // .catch((error) => {
  //   console.error("Error:", error);
  // });
  // };

  useEffect(() => {
    axios
      .post("http://192.168.8.156:5000/predict", inputWaterData)
      .then((response) => {
        setWaterquality(response.data.prediction);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
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
            flexDirection: "row",
            backgroundColor: "#ecf6ff",
            borderRadius: 10,
            gap: 15,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            paddingVertical: 20,
            paddingHorizontal: 10,
            marginTop: "5%",
          }}
        >
          <View
            style={{
              flex: 1.2,
              gap: 10,
              // backgroundColor: "red",
            }}
          >
            <Text
              style={{
                fontSize: 13 / fontScale,
                fontFamily: "OpenSans-SemiBold",
                color: "#222244",
              }}
            >
              Attributes
            </Text>
            <Text
              style={{
                fontSize: 13 / fontScale,
                fontFamily: "OpenSans-Medium",
                color: "#222244",
              }}
            >
              pH value
            </Text>
            <Text
              style={{
                fontSize: 13 / fontScale,
                fontFamily: "OpenSans-Medium",
                color: "#222244",
              }}
            >
              Temperature
            </Text>
            <Text
              style={{
                fontSize: 13 / fontScale,
                fontFamily: "OpenSans-Medium",
                color: "#222244",
              }}
            >
              Turbidity
            </Text>
            <Text
              style={{
                fontSize: 13 / fontScale,
                fontFamily: "OpenSans-Medium",
                color: "#222244",
              }}
            >
              TDS
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              gap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 13 / fontScale,
                fontFamily: "OpenSans-SemiBold",
                textAlign: "center",
                color: "#222244",
              }}
            >
              Value
            </Text>
            <Text
              style={{
                fontSize: 13 / fontScale,
                fontFamily: "OpenSans-Medium",
                color: "#222244",
                textAlign: "center",
              }}
            >
              {pHValue}
            </Text>
            <Text
              style={{
                fontSize: 13 / fontScale,
                fontFamily: "OpenSans-Medium",
                color: "#222244",
                textAlign: "center",
              }}
            >
              {temperature}
            </Text>
            <Text
              style={{
                fontSize: 13 / fontScale,
                fontFamily: "OpenSans-Medium",
                color: "#222244",
                textAlign: "center",
              }}
            >
              {turbidity}
            </Text>
            <Text
              style={{
                fontSize: 13 / fontScale,
                fontFamily: "OpenSans-Medium",
                color: "#222244",
                textAlign: "center",
              }}
            >
              {tds}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              gap: 10,
            }}
          ></View>
        </View>

        <View
          style={{
            marginTop: "5%",
            marginLeft: "auto",
            marginRight: "auto",
            width: "85%",
            backgroundColor: "#ecf6ff",
            borderRadius: 10,
            padding: 20,
            gap: 10,
            alignItems: "center",
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
          }}
        >
          <Text
            style={{
              fontSize: 15 / fontScale,
              fontFamily: "OpenSans-SemiBold",
              color: "#222244",
            }}
          >
            Your water sample is
          </Text>
          <Text
            style={{
              fontSize: 17 / fontScale,
              fontFamily: "OpenSans-Bold",
              color: "#008000",
              textTransform: "uppercase",
            }}
          >
            {waterquality === 1 && "Safe"}
            {waterquality === 0 && "Not Safe"}
          </Text>

          {waterquality === "1" && (
            <>
              <Text
                style={{
                  fontSize: 15 / fontScale,
                  fontFamily: "OpenSans-SemiBold",
                  color: "#222244",
                }}
              >
                Safe for Drinking
              </Text>
            </>
          )}

          {waterquality === 0 ? (
            <Text
              style={{
                fontSize: 15 / fontScale,
                fontFamily: "OpenSans-SemiBold",
                color: "#222244",
              }}
            >
              Not safe for Drinking
            </Text>
          ) : waterquality === 1 ? (
            <Text
              style={{
                fontSize: 15 / fontScale,
                fontFamily: "OpenSans-SemiBold",
                color: "#222244",
              }}
            >
              Safe for Drinking
            </Text>
          ) : null}
        </View>

        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/drinking-water-cuate.png")}
            style={{
              width: 150 / fontScale,
              height: 150 / fontScale,
              marginTop: "2.5%",
              borderRadius: 300,
            }}
          />
        </View>
      </View>

      <View
        style={{
          marginBottom: "7.5%",
          marginLeft: "auto",
          marginRight: "auto",
          width: "85%",
        }}
      >
        <ButtonFilled title="Save Test Results" />
      </View>
    </View>
  );
}
