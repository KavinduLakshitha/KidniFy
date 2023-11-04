import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Button,
  Image,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import ButtonFilled from "../../components/ButtonFilled";
import ButtonFilledLight from "../../components/ButtonFilledLight";
import { RadioButton } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import PredictionCircle from "../../components/PredictionCircle";
import MedicalCenters from "../../assets/MedicalCenters";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

export default function Prediction() {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    selectedDistrict,
    age,
    gender,
    color,
    medications,
    overweight,
    smoking,
    alcohol,
    diabetes,
    frequent,
    blockage,
    swelling,
    history,
  } = route.params;
  const centers = MedicalCenters.filter((c) => c.district === selectedDistrict);
  const mapRef = useRef(null);
  const { fontScale } = useWindowDimensions();

  const [inputData, setInputData] = useState({
    age,
    gender,
    color,
    medications,
    overweight,
    smoking,
    alcohol,
    diabetes,
    frequent,
    blockage,
    swelling,
    history,
  });
  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    console.log(route.params);

    // alert(JSON.stringify(route.params));
  }, []);

  useEffect(() => {
    axios
      .post("http://192.168.8.156:5004/predict", inputData)
      .then((response) => {
        setPrediction(response.data.prediction);
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
      <View
        style={{
          flex: 1,
          marginTop: "2.5%",
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text
          style={{
            fontSize: 16 / fontScale,
            fontFamily: "OpenSans-SemiBold",
            textAlign: "center",
          }}
        >
          You are at a {prediction} level
        </Text>

        {prediction === "Risky" && (
          <>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 18 / fontScale,
                  fontFamily: "Lora-Bold",
                  color: "#222244",
                  marginVertical: "2.5%",
                }}
              >
                Recommended Tests
              </Text>
              <View
                style={{
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 16 / fontScale,
                    fontFamily: "OpenSans-Regular",
                    color: "#222244",
                  }}
                >
                  Complete Blood Count
                </Text>
                <Text
                  style={{
                    fontSize: 16 / fontScale,
                    fontFamily: "OpenSans-Regular",
                    color: "#222244",
                  }}
                >
                  Estimated GFR ( CKD - EPI )
                </Text>
                <Text
                  style={{
                    fontSize: 16 / fontScale,
                    fontFamily: "OpenSans-Regular",
                    color: "#222244",
                  }}
                >
                  Plasma Glucose Venous - Fasting
                </Text>
                <Text
                  style={{
                    fontSize: 16 / fontScale,
                    fontFamily: "OpenSans-Regular",
                    color: "#222244",
                  }}
                >
                  Serum Creatinine
                </Text>
                <Text
                  style={{
                    fontSize: 16 / fontScale,
                    fontFamily: "OpenSans-Regular",
                    color: "#222244",
                  }}
                >
                  Blood Pressure
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 18 / fontScale,
                  fontFamily: "Lora-Bold",
                  color: "#222244",
                  marginTop: "2.5%",
                }}
              >
                Nearest Medical Centers in {selectedDistrict}
              </Text>
              {centers.map((center) => (
                <View
                  style={{ flex: 1, width: "100%", height: "100%" }}
                  key={center.name}
                >
                  <Text
                    style={{
                      fontSize: 16 / fontScale,
                      fontFamily: "OpenSans-Regular",
                      color: "#222244",
                      marginVertical: "2.5%",
                    }}
                  >
                    {center.name}
                  </Text>
                  <MapView
                    style={{
                      flex: 0.95,
                      height: 200,
                    }}
                    initialRegion={{
                      latitude: center.latitude,
                      longitude: center.longitude,
                      latitudeDelta: 0.04,
                      longitudeDelta: 0.05,
                    }}
                    key={center.name}
                  >
                    <Marker
                      coordinate={{
                        latitude: center.latitude,
                        longitude: center.longitude,
                      }}
                      title={center.name}
                    />
                  </MapView>
                </View>
              ))}
            </View>
          </>
        )}

        {prediction === "Not Risky" && (
          <>
            <Text
              style={{
                fontSize: 14 / fontScale,
                fontFamily: "OpenSans-Medium",
                color: "#222244",
                marginTop: "2.5%",
                textAlign: "justify",
              }}
            >
              While you are not at a high risk of CKD at the moment, it is
              essential to continue a healthy lifestyle, including a balanced
              diet, regular exercise, and avoiding risk factors like smoking and
              excessive alcohol consumption.
            </Text>

            <Image
              style={{
                width: "100%",
                height: 300,
                resizeMode: "contain",
                marginTop: "2.5%",
              }}
              source={require("../../assets/images/PredictionImage.png")}
            />
          </>
        )}
      </View>

      <View
        style={{
          marginBottom: "7.5%",
          marginLeft: "auto",
          marginRight: "auto",
          width: "85%",
          gap: 20,
        }}
      >
        <ButtonFilled
          title="Find Your CKD Stage"
          onPress={() => navigation.navigate("CKDStageStepOne")}
        />
        <ButtonFilledLight
          title="Test Again"
          onPress={() => navigation.navigate("PredictionStepOne")}
        />
      </View>
    </View>
  );
}
