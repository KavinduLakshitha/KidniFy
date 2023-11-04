import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import ButtonFilled from "../../components/ButtonFilled";
import { AntDesign } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import FormInput from "../../components/FormInput";
import { useWindowDimensions } from "react-native";

export default function PredictionStepThree() {
  const [diabetes, setDiabetes] = useState();
  const [frequent, setFrequent] = useState();
  const [blockage, setBlockage] = useState();
  const [swelling, setSwelling] = useState();
  const [history, setHistory] = useState();
  const route = useRoute();
  const {
    age,
    gender,
    color,
    medications,
    overweight,
    smoking,
    alcohol,
    selectedDistrict,
  } = route.params;
  const { fontScale } = useWindowDimensions();

  useEffect(() => {
    setDiabetes(diabetes);
    setBlockage(blockage);
    setFrequent(frequent);
    setSwelling(swelling);
    setHistory(history);
  }, [diabetes, blockage, frequent, swelling, history]);

  const handleNext = () => {
    console.log("Diabetes:", diabetes);
    console.log("Frequent:", frequent);
    console.log("Blockage:", blockage);
    console.log("Swelling:", swelling);
    console.log("History:", history);

    navigation.navigate("Prediction", {
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
      selectedDistrict,
    });
  };

  const navigation = useNavigation();

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
      <View>
        <View
          style={{
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2.5%",
          }}
        >
          <View>
            <View>
              <Text
                style={{
                  fontFamily: "OpenSans-SemiBold",
                  fontSize: 16 / fontScale,
                  color: "#222244",
                }}
              >
                Have you been diagnosed with diabetes?
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={1}
                  status={diabetes === 1 ? "checked" : "unchecked"}
                  onPress={() => setDiabetes(1)}
                />
                <Text
                  style={{
                    fontSize: 15 / fontScale,
                    fontFamily: "OpenSans-Medium",
                  }}
                >
                  Yes
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={0}
                  status={diabetes === 0 ? "checked" : "unchecked"}
                  onPress={() => setDiabetes(0)}
                />
                <Text
                  style={{
                    fontSize: 15 / fontScale,
                    fontFamily: "OpenSans-Medium",
                  }}
                >
                  No
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: "2.5%",
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 16 / fontScale,
                color: "#222244",
              }}
            >
              Is there a history of CKD in your family?
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={1}
                  status={history === 1 ? "checked" : "unchecked"}
                  onPress={() => setHistory(1)}
                />
                <Text
                  style={{
                    fontSize: 15 / fontScale,
                    fontFamily: "OpenSans-Medium",
                  }}
                >
                  Yes
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={0}
                  status={history === 0 ? "checked" : "unchecked"}
                  onPress={() => setHistory(0)}
                />
                <Text
                  style={{
                    fontSize: 15 / fontScale,
                    fontFamily: "OpenSans-Medium",
                  }}
                >
                  No
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: "2.5%",
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 16 / fontScale,
                color: "#222244",
              }}
            >
              Are you urinating more often than usual?
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={1}
                  status={frequent === 1 ? "checked" : "unchecked"}
                  onPress={() => setFrequent(1)}
                />
                <Text
                  style={{
                    fontSize: 15 / fontScale,
                    fontFamily: "OpenSans-Medium",
                  }}
                >
                  Yes
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={0}
                  status={frequent === 0 ? "checked" : "unchecked"}
                  onPress={() => setFrequent(0)}
                />
                <Text
                  style={{
                    fontSize: 15 / fontScale,
                    fontFamily: "OpenSans-Medium",
                  }}
                >
                  No
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: "2.5%",
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 16 / fontScale,
                color: "#222244",
              }}
            >
              Have you had urinary blockage issues?
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={1}
                  status={blockage === 1 ? "checked" : "unchecked"}
                  onPress={() => setBlockage(1)}
                />
                <Text
                  style={{
                    fontSize: 15 / fontScale,
                    fontFamily: "OpenSans-Medium",
                  }}
                >
                  Yes
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={0}
                  status={blockage === 0 ? "checked" : "unchecked"}
                  onPress={() => setBlockage(0)}
                />
                <Text
                  style={{
                    fontSize: 15 / fontScale,
                    fontFamily: "OpenSans-Medium",
                  }}
                >
                  No
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: "2.5%",
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 16 / fontScale,
                color: "#222244",
              }}
            >
              Have you noticed any swelling or puffiness in your ankles, feet,
              or legs?
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={1}
                  status={swelling === 1 ? "checked" : "unchecked"}
                  onPress={() => setSwelling(1)}
                />
                <Text
                  style={{
                    fontSize: 15 / fontScale,
                    fontFamily: "OpenSans-Medium",
                  }}
                >
                  Yes
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={0}
                  status={swelling === 0 ? "checked" : "unchecked"}
                  onPress={() => setSwelling(0)}
                />
                <Text
                  style={{
                    fontSize: 15 / fontScale,
                    fontFamily: "OpenSans-Medium",
                  }}
                >
                  No
                </Text>
              </View>
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
        }}
      >
        <ButtonFilled title="Next" onPress={handleNext} />
      </View>
    </View>
  );
}
