import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import ButtonFilled from "../../components/ButtonFilled";
import { AntDesign } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import FormInput from "../../components/FormInput";

export default function PredictionStepTwo() {
  const [color, setColor] = useState("");
  const [medications, setMedications] = useState();
  const [overweight, setOverweight] = useState();
  const [smoking, setSmoking] = useState();
  const [alcohol, setAlcohol] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  const { age, gender, selectedDistrict } = route.params;
  const { fontScale } = useWindowDimensions();

  const [inputData, setInputData] = useState({
    color: "",
  });

  const handleInputChange = (name, value) => {
    const numericValue = parseFloat(value);
    setInputData({ ...inputData, [name]: numericValue });
    setColor(numericValue);
  };

  useEffect(() => {
    setOverweight(overweight);
    setSmoking(smoking);
    setAlcohol(alcohol);
    setMedications(medications);
  }, [overweight, smoking, alcohol, medications]);

  const handleNext = () => {
    console.log("Color:", color);
    console.log("Medications:", medications);
    console.log("Overweight:", overweight);
    console.log("Smoking:", smoking);
    console.log("Alcohol:", alcohol);
    console.log("Selected District:", selectedDistrict);

    // Pass color, medications, overweight, smoking, alcohol, and selectedDistrict to the next screen
    navigation.navigate("PredictionStepThree", {
      age,
      gender,
      color,
      medications,
      overweight,
      smoking,
      alcohol,
      selectedDistrict,
    });
  };

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
                fontSize: 16 / fontScale,
                color: "#222244",
              }}
            >
              Do you consider yourself to be overweight or obese?
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
                  status={overweight === 1 ? "checked" : "unchecked"}
                  onPress={() => setOverweight(1)}
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
                  status={overweight === 0 ? "checked" : "unchecked"}
                  onPress={() => setOverweight(0)}
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
              Have you ever been a smoker?
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
                  status={smoking === 1 ? "checked" : "unchecked"}
                  onPress={() => setSmoking(1)}
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
                  status={smoking === 0 ? "checked" : "unchecked"}
                  onPress={() => setSmoking(0)}
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
              Do you consume alcohol regularly?
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
                  status={alcohol === 1 ? "checked" : "unchecked"}
                  onPress={() => setAlcohol(1)}
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
                  status={alcohol === 0 ? "checked" : "unchecked"}
                  onPress={() => setAlcohol(0)}
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
              Are you currently taking any prescription medications?
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
                  status={medications === 1 ? "checked" : "unchecked"}
                  onPress={() => setMedications(1)}
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
                  status={medications === 0 ? "checked" : "unchecked"}
                  onPress={() => setMedications(0)}
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
            <FormInput
              autoCapitalize="none"
              value={inputData.color}
              onChangeText={(value) => handleInputChange("color", value)}
              secureTextEntry={false}
              label="What color is your urine ?"
              placeholder="1"
              keyboardType="numeric"
            />
            <Text
              style={{
                fontFamily: "OpenSans-Medium",
                fontSize: 14 / fontScale,
                color: "#22224480",
              }}
            >
              {" "}
              Enter 1 if the color is Light Yellow
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans-Medium",
                fontSize: 14 / fontScale,
                color: "#22224480",
              }}
            >
              {" "}
              Enter 2 if the color is Dark Yellow
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans-Medium",
                fontSize: 14 / fontScale,
                color: "#22224480",
              }}
            >
              {" "}
              Enter 3 if the color is Brown
            </Text>
            {/* <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 16 / fontScale,
                color: "#222244",
              }}
            >
              Have you noticed any significant changes in the color of your
              urine?
            </Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "black" }}
              placeholder="Feature10"
              value={inputData.color}
              onChangeText={(value) => handleInputChange("color", value)}
            /> */}
            {/* <View
              style={{
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={1}
                  status={color === 1 ? "checked" : "unchecked"}
                  onPress={() => setColor(1)}
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
                  status={color === 0 ? "checked" : "unchecked"}
                  onPress={() => setColor(0)}
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
            </View> */}
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
