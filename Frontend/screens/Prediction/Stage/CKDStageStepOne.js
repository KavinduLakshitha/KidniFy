import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
} from "react-native";
import React from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LabDataInput from "../../../components/LabDataInput";
import { ScrollView } from "react-native";
import { useState } from "react";
import FormInput from "../../../components/FormInput";
import { useEffect } from "react";
import { RadioButton } from "react-native-paper";

export default function CKDStageStepOne() {
  const [checkedGender, setCheckedGender] = useState();
  const navigation = useNavigation();
  const { fontScale } = useWindowDimensions();
  const [inputStageData, setInputStageData] = useState({
    age: "",
    gender: "",
    bloodpressure: "",
    bloodsugar: "",
    albumin: "",
    hemoglobin: "",
    serumcreatinine: "",
    nitrogen: "",
    sodium: "",
    potassium: "",
    wbc: "",
    rbc: "",
    protein: "",
  });

  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [bloodpressure, setBloodpressure] = useState();
  const [bloodsugar, setBloodsugar] = useState();
  const [albumin, setAlbumin] = useState();
  const [hemoglobin, setHemoglobin] = useState();
  const [serumcreatinine, setSerumcreatinine] = useState();
  const [nitrogen, setNitrogen] = useState();
  const [sodium, setSodium] = useState();
  const [potassium, setPotassium] = useState();
  const [wbc, setWbc] = useState();
  const [rbc, setRbc] = useState();
  const [protein, setProtein] = useState();

  const handleInputChange = (name, value) => {
    const numericValue = parseFloat(value);
    setInputStageData({ ...inputStageData, [name]: numericValue });
    if (name === "age") {
      setAge(numericValue);
    } else if (name === "gender") {
      setGender(numericValue);
    } else if (name === "bloodpressure") {
      setBloodpressure(numericValue);
    } else if (name === "bloodsugar") {
      setBloodsugar(numericValue);
    } else if (name === "albumin") {
      setAlbumin(numericValue);
    } else if (name === "serumcreatinine") {
      setSerumcreatinine(numericValue);
    } else if (name === "nitrogen") {
      setNitrogen(numericValue);
    } else if (name === "sodium") {
      setSodium(numericValue);
    } else if (name === "potassium") {
      setPotassium(numericValue);
    } else if (name === "wbc") {
      setWbc(numericValue);
    } else if (name === "rbc") {
      setRbc(numericValue);
    } else if (name === "protein") {
      setProtein(numericValue);
    }
  };

  useEffect(() => {
    if (checkedGender !== undefined) {
      setGender(checkedGender);
    }
  }, [checkedGender]);

  const handleText = () => {
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Blood Pressure:", bloodpressure);
    console.log("Blood sugar:", bloodsugar);
    console.log("ALbumin:", albumin);
    console.log("Hemoglobin:", hemoglobin);
    console.log("Serum Creatinine:", serumcreatinine);
    console.log("Nitrogen:", nitrogen);
    console.log("Sodium:", sodium);
    console.log("Potassium:", potassium);
    console.log("WBC:", wbc);
    console.log("RBC:", rbc);
    console.log("Protein:", protein);

    navigation.navigate("CKDStage", {
      age,
      gender,
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
  };

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
        <View
          style={{
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2.5%",
            marginBottom: "2.5%",
          }}
        >
          <Text
            style={{
              fontSize: 16 / fontScale,
              fontFamily: "OpenSans-Medium",
            }}
          >
            Please enter your lab reports details to find your CKD stage
          </Text>

          <View style={{ marginTop: "2.5%" }}>
            <View>
              <FormInput
                autoCapitalize="none"
                onChangeText={(value) => handleInputChange("age", value)}
                value={inputStageData.age}
                secureTextEntry={false}
                label="What is your age?"
                placeholder="Age"
                keyboardType="numeric"
              />
            </View>

            <View>
              <Text
                style={{
                  fontFamily: "OpenSans-SemiBold",
                  fontSize: 16 / fontScale,
                  color: "#222244",
                }}
              >
                What is your gender?
              </Text>
            </View>

            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={1}
                  status={checkedGender === 1 ? "checked" : "unchecked"}
                  onPress={() => setCheckedGender(1)}
                />
                <Text
                  style={{
                    fontSize: 15 / fontScale,
                    fontFamily: "OpenSans-Medium",
                  }}
                >
                  Male
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={0}
                  status={checkedGender === 0 ? "checked" : "unchecked"}
                  onPress={() => setCheckedGender(0)}
                />
                <Text
                  style={{
                    fontSize: 15 / fontScale,
                    fontFamily: "OpenSans-Medium",
                  }}
                >
                  Female
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
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
                Blood Pressure
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1.2,
                  borderWidth: 1,
                  borderRadius: 45,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <View style={{}}>
                  <TextInput
                    onChangeText={(value) =>
                      handleInputChange("bloodpressure", value)
                    }
                    value={inputStageData.bloodpressure}
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
                </View>

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
                    mmHg
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
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
                Blood Sugar
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1.2,
                  borderWidth: 1,
                  borderRadius: 45,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <View style={{}}>
                  <TextInput
                    onChangeText={(value) =>
                      handleInputChange("bloodsugar", value)
                    }
                    value={inputStageData.bloodsugar}
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
                </View>

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

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
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
                Albumin
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1.2,
                  borderWidth: 1,
                  borderRadius: 45,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <View style={{}}>
                  <TextInput
                    onChangeText={(value) =>
                      handleInputChange("albumin", value)
                    }
                    value={inputStageData.albumin}
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
                </View>

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
                    g/dL
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
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
                Serum Creatinine
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1.2,
                  borderWidth: 1,
                  borderRadius: 45,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <View style={{}}>
                  <TextInput
                    onChangeText={(value) =>
                      handleInputChange("serumcreatinine", value)
                    }
                    value={inputStageData.serumcreatinine}
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
                </View>

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

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
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
                Blood Urea Nitrogen
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1.2,
                  borderWidth: 1,
                  borderRadius: 45,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <View style={{}}>
                  <TextInput
                    onChangeText={(value) =>
                      handleInputChange("bloodpressure", value)
                    }
                    value={inputStageData.bloodpressure}
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
                </View>

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

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
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
                  marginTop: 10,
                }}
              >
                <View style={{}}>
                  <TextInput
                    onChangeText={(value) =>
                      handleInputChange("bloodpressure", value)
                    }
                    value={inputStageData.bloodpressure}
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
                </View>

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
                    mmol/L
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
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
                  marginTop: 10,
                }}
              >
                <View style={{}}>
                  <TextInput
                    onChangeText={(value) =>
                      handleInputChange("potassium", value)
                    }
                    value={inputStageData.potassium}
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
                </View>

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
                    mmol/L
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
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
                White Blood Cells
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1.2,
                  borderWidth: 1,
                  borderRadius: 45,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <View style={{}}>
                  <TextInput
                    onChangeText={(value) => handleInputChange("wbc", value)}
                    value={inputStageData.wbc}
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
                </View>

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
                    10³ mm³
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
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
                Red Blood Cells
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1.2,
                  borderWidth: 1,
                  borderRadius: 45,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <View style={{}}>
                  <TextInput
                    onChangeText={(value) => handleInputChange("rbc", value)}
                    value={inputStageData.rbc}
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
                </View>

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

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
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
                Urine Protein
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1.2,
                  borderWidth: 1,
                  borderRadius: 45,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <View style={{}}>
                  <TextInput
                    onChangeText={(value) =>
                      handleInputChange("protein", value)
                    }
                    value={inputStageData.protein}
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
                </View>

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
                    mg/24 hrs
                  </Text>
                </View>
              </View>
            </View>

            {/* <LabDataInput
              onChangeText={(value) => handleInputChange("bloodsugar", value)}
              value={inputStageData.bloodsugar}
              label="Blood Sugar"
              unit="mg/dL"
            />
            <LabDataInput
              onChangeText={(value) => handleInputChange("albumin", value)}
              value={inputStageData.albumin}
              label="Albumin"
              unit="g/dL"
            />
            <LabDataInput
              onChangeText={(value) => handleInputChange("hemoglobin", value)}
              value={inputStageData.hemoglobin}
              label="Hemoglobin"
              unit="g/dL"
            />
            <LabDataInput
              onChangeText={(value) =>
                handleInputChange("serumcreatinine", value)
              }
              value={inputStageData.serumcreatinine}
              label="Serum Creatinine"
              unit="mg/dL"
            />
            <LabDataInput
              onChangeText={(value) => handleInputChange("nitrogen", value)}
              value={inputStageData.nitrogen}
              label="Blood Urea Nitrogen"
              unit="mg/dL"
            />
            <LabDataInput
              onChangeText={(value) => handleInputChange("sodium", value)}
              value={inputStageData.sodium}
              label="Sodium"
              unit="mmol/L"
            />
            <LabDataInput
              onChangeText={(value) => handleInputChange("potassium", value)}
              value={inputStageData.potassium}
              label="Potassium"
              unit="mmol/L"
            />
            <LabDataInput
              onChangeText={(value) => handleInputChange("wbc", value)}
              value={inputStageData.wbc}
              label="White Blood Cells"
              unit="10³ mm³"
            />
            <LabDataInput
              onChangeText={(value) => handleInputChange("rbc", value)}
              value={inputStageData.rbc}
              label="Red Blood Cells"
              unit="mEq/L"
            />
            <LabDataInput
              onChangeText={(value) => handleInputChange("protein", value)}
              value={inputStageData.protein}
              label="Urine Protein"
              unit="mg/24 hrs"
            /> */}
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
          <ButtonFilled title="Find Your CKD Stage" onPress={handleText} />
        </View>
      </View>
    </ScrollView>
  );
}
