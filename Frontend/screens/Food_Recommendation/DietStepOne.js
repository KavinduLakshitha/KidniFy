import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Provider } from "react-native-paper";
import ButtonFilled from "../../components/ButtonFilled";
import { useNavigation } from "@react-navigation/native";
import DietFormInput from "../../components/DietFormInput";
import { useWindowDimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function DietStepOne() {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const { fontScale } = useWindowDimensions();

  const [inputDietData, setInputDietData] = useState({
    stage: "",
    potassium: "",
    calcium: "",
    phosphorus: "",
    sodium: "",
    hemoglobin: "",
    cholesterol: "",
  });

  const [stage, setStage] = useState();
  const [potassium, setPotassium] = useState();
  const [calcium, setCalcium] = useState();
  const [phosphorus, setPhosphorus] = useState();
  const [sodium, setSodium] = useState();
  const [hemoglobin, setHemoglobin] = useState();
  const [cholesterol, setCholesterol] = useState();
  const [checkStage, setCheckStage] = useState(false);

  const handleInputChange = (name, value) => {
    const numericValue = parseFloat(value);
    setInputDietData({ ...inputDietData, [name]: numericValue });
    if (name === "potassium") {
      setPotassium(numericValue);
    } else if (name === "calcium") {
      setCalcium(numericValue);
    } else if (name === "phosphorus") {
      setPhosphorus(numericValue);
    } else if (name === "sodium") {
      setSodium(numericValue);
    } else if (name === "hemoglobin") {
      setHemoglobin(numericValue);
    } else if (name === "cholesterol") {
      setCholesterol(numericValue);
    }
  };

  useEffect(() => {
    if (checkStage !== undefined) {
      setStage(value);
    }
  });

  const handleNext = () => {
    console.log("Stage:", stage);
    console.log("Potassium:", potassium);
    console.log("Calcium:", calcium);
    console.log("Phosphorus:", phosphorus);
    console.log("Sodium:", sodium);
    console.log("Hemoglobin:", hemoglobin);
    console.log("Cholesterol:", cholesterol);

    navigation.navigate("DietStepTwo", {
      stage,
      potassium,
      calcium,
      phosphorus,
      sodium,
      hemoglobin,
      cholesterol,
    });
  };

  const ckdStage = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
  ];

  return (
    <Provider>
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
              flexDirection: "row",
              marginTop: "2.5%",
              marginHorizontal: "7.5%",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 17 / fontScale,
                fontFamily: "Lora-Bold",
                color: "#222244",
              }}
            >
              CKD Stage
            </Text>
          </View>
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
              <Text
                style={{
                  fontFamily: "OpenSans-SemiBold",
                  fontSize: 15 / fontScale,
                  color: "#222244",
                  marginBottom: "2.5%",
                }}
              >
                What is your current stage of Chronic Kidney Disease (CKD)?
              </Text>
              <Dropdown
                style={{
                  fontFamily: "OpenSans-Regular",
                  fontSize: 16 / fontScale,
                  borderWidth: 1,
                  borderColor: "#333366",
                  paddingHorizontal: 15,
                  paddingVertical: 2.5,
                  borderRadius: 100,
                  marginTop: "2.5%",
                }}
                placeholderStyle={{
                  fontSize: 14 / fontScale,
                  fontFamily: "OpenSans-Regular",
                  color: "grey",
                }}
                selectedTextStyle={{
                  fontSize: 14 / fontScale,
                  fontFamily: "OpenSans-Regular",
                  color: "#222244",
                }}
                inputSearchStyle={{
                  height: 40,
                  fontSize: 14 / fontScale,
                }}
                iconStyle={styles.iconStyle}
                data={ckdStage}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select CKD stage"
                value={value}
                onChange={(item) => {
                  setValue(item.value);
                }}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 17 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
              marginTop: "2.5%",
              marginLeft: "7.5%",
            }}
          >
            Blood Tests and Medical Information
          </Text>

          <View style={{ marginBottom: "5%" }}>
            <View
              style={{
                width: "85%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2.5%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 14 / fontScale,
                    color: "#222244",
                    flex: 1,
                  }}
                >
                  Potassium
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1.2,
                    borderWidth: 1,
                    borderRadius: 45,
                    paddingHorizontal: 10,
                  }}
                >
                  <TextInput
                    value={inputDietData.calcium}
                    onChangeText={(value) =>
                      handleInputChange("calcium", value)
                    }
                    keyboardType="numeric"
                    style={{
                      fontFamily: "OpenSans-Regular",
                      fontSize: 15 / fontScale,
                      borderWidth: 1,
                      borderColor: "#333366",
                      width: 90,
                      paddingVertical: 2.5,
                      paddingHorizontal: 15,
                      borderRightWidth: 0.75,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                    }}
                  />
                  {/* <FormInput secureTextEntry={false} /> */}
                  <View
                    style={{
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "OpenSans-Regular",
                        fontSize: 13 / fontScale,
                        color: "#222244",
                        textAlign: "center",
                      }}
                    >
                      mg/dL
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                width: "85%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2.5%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 14 / fontScale,
                    color: "#222244",
                    flex: 1,
                  }}
                >
                  Calcium
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1.2,
                    borderWidth: 1,
                    borderRadius: 45,
                    paddingHorizontal: 10,
                  }}
                >
                  <TextInput
                    value={inputDietData.calcium}
                    onChangeText={(value) =>
                      handleInputChange("calcium", value)
                    }
                    keyboardType="numeric"
                    style={{
                      fontFamily: "OpenSans-Regular",
                      fontSize: 15 / fontScale,
                      borderWidth: 1,
                      borderColor: "#333366",
                      width: 90,
                      paddingVertical: 2.5,
                      paddingHorizontal: 15,
                      borderRightWidth: 0.75,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                    }}
                  />
                  {/* <FormInput secureTextEntry={false} /> */}
                  <View
                    style={{
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "OpenSans-Regular",
                        fontSize: 13 / fontScale,
                        color: "#222244",
                        textAlign: "center",
                      }}
                    >
                      mg/dL
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                width: "85%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2.5%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 14 / fontScale,
                    color: "#222244",
                    flex: 1,
                  }}
                >
                  Phosphorus
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1.2,
                    borderWidth: 1,
                    borderRadius: 45,
                    paddingHorizontal: 10,
                  }}
                >
                  <TextInput
                    value={inputDietData.phosphorus}
                    onChangeText={(value) =>
                      handleInputChange("phosphorus", value)
                    }
                    keyboardType="numeric"
                    style={{
                      fontFamily: "OpenSans-Regular",
                      fontSize: 15 / fontScale,
                      borderWidth: 1,
                      borderColor: "#333366",
                      width: 90,
                      paddingVertical: 2.5,
                      paddingHorizontal: 15,
                      borderRightWidth: 0.75,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                    }}
                  />
                  {/* <FormInput secureTextEntry={false} /> */}
                  <View
                    style={{
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "OpenSans-Regular",
                        fontSize: 13 / fontScale,
                        color: "#222244",
                        textAlign: "center",
                      }}
                    >
                      mg/dL
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                width: "85%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2.5%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 14 / fontScale,
                    color: "#222244",
                    flex: 1,
                  }}
                >
                  Sodium
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1.2,
                    borderWidth: 1,
                    borderRadius: 45,
                    paddingHorizontal: 10,
                  }}
                >
                  <TextInput
                    value={inputDietData.sodium}
                    onChangeText={(value) => handleInputChange("sodium", value)}
                    keyboardType="numeric"
                    style={{
                      fontFamily: "OpenSans-Regular",
                      fontSize: 15 / fontScale,
                      borderWidth: 1,
                      borderColor: "#333366",
                      width: 90,
                      paddingVertical: 2.5,
                      paddingHorizontal: 15,
                      borderRightWidth: 0.75,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                    }}
                  />
                  {/* <FormInput secureTextEntry={false} /> */}
                  <View
                    style={{
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "OpenSans-Regular",
                        fontSize: 13 / fontScale,
                        color: "#222244",
                        textAlign: "center",
                      }}
                    >
                      mEq/L
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                width: "85%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2.5%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 14 / fontScale,
                    color: "#222244",
                    flex: 1,
                  }}
                >
                  Hemoglobin
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1.2,
                    borderWidth: 1,
                    borderRadius: 45,
                    paddingHorizontal: 10,
                  }}
                >
                  <TextInput
                    value={inputDietData.hemoglobin}
                    onChangeText={(value) =>
                      handleInputChange("hemoglobin", value)
                    }
                    keyboardType="numeric"
                    style={{
                      fontFamily: "OpenSans-Regular",
                      fontSize: 15 / fontScale,
                      borderWidth: 1,
                      borderColor: "#333366",
                      width: 90,
                      paddingVertical: 2.5,
                      paddingHorizontal: 15,
                      borderRightWidth: 0.75,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                    }}
                  />
                  {/* <FormInput secureTextEntry={false} /> */}
                  <View
                    style={{
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "OpenSans-Regular",
                        fontSize: 13 / fontScale,
                        color: "#222244",
                        textAlign: "center",
                      }}
                    >
                      mg/dL
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                width: "85%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2.5%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    fontSize: 14 / fontScale,
                    color: "#222244",
                    flex: 1,
                  }}
                >
                  Cholesterol
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1.2,
                    borderWidth: 1,
                    borderRadius: 45,
                    paddingHorizontal: 10,
                  }}
                >
                  <TextInput
                    value={inputDietData.cholesterol}
                    onChangeText={(value) =>
                      handleInputChange("cholesterol", value)
                    }
                    keyboardType="numeric"
                    style={{
                      fontFamily: "OpenSans-Regular",
                      fontSize: 15 / fontScale,
                      borderWidth: 1,
                      borderColor: "#333366",
                      width: 90,
                      paddingVertical: 2.5,
                      paddingHorizontal: 15,
                      borderRightWidth: 0.75,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                    }}
                  />
                  {/* <FormInput secureTextEntry={false} /> */}
                  <View
                    style={{
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "OpenSans-Regular",
                        fontSize: 13 / fontScale,
                        color: "#222244",
                        textAlign: "center",
                      }}
                    >
                      mg/dL
                    </Text>
                  </View>
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
    </Provider>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 20,
    height: 20,
  },
});
