import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ButtonFilled from "../../components/ButtonFilled";
import { useNavigation } from "@react-navigation/native";
import ManualMode from "./ManualMode";
import AutomaticMode from "./AutomaticMode";
import { useWindowDimensions } from "react-native";

export default function WaterQualityStepOne() {
  const [checkedAge, setCheckedAge] = useState("Yes");
  const [checkedGender, setCheckedGender] = useState("Male");
  const [value, setValue] = useState(null);
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState("manual");
  const { fontScale } = useWindowDimensions();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

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
            marginTop: "5%",
            flexDirection: "row",
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: selectedOption === "manual" ? "#5960ff" : "#fff",
              flex: 1,
              paddingVertical: 10,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 3,
              overflow: "hidden",
              android_elevation: 1,
            }}
            onPress={() => handleOptionClick("manual")}
          >
            <Text
              style={{
                fontSize: 13 / fontScale,
                fontFamily: "OpenSans-Medium",
                textAlign: "center",
                color: selectedOption === "manual" ? "#fff" : "#000",
              }}
            >
              Manual
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor:
                selectedOption === "automatic" ? "#5960ff" : "#fff",
              flex: 1,
              paddingVertical: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 3,
              overflow: "hidden",
              android_elevation: 1,
            }}
            onPress={() => handleOptionClick("automatic")}
          >
            <Text
              style={{
                fontSize: 13 / fontScale,
                fontFamily: "OpenSans-Medium",
                textAlign: "center",
                color: selectedOption === "automatic" ? "#fff" : "#000",
              }}
            >
              Automatic
            </Text>
          </TouchableOpacity>
        </View>

        {selectedOption === "manual" && (
          <>
            <ManualMode />
          </>
        )}

        {selectedOption === "automatic" && (
          <>
            <AutomaticMode />
          </>
        )}
      </View>

      <View
        style={{
          marginBottom: "7.5%",
          marginLeft: "auto",
          marginRight: "auto",
          width: "85%",
        }}
      >
        {/* <ButtonFilled
          title="View Test Results"
          onPress={() => navigation.navigate("WaterTestResults")}
        /> */}
      </View>
    </View>
  );
}
