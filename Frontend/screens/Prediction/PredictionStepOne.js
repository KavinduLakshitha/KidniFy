import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import FormInput from "../../components/FormInput";
import React, { useState, useMemo } from "react";
import { RadioButton } from "react-native-paper";
import { Autocomplete } from "react-native-autocomplete-input";
import { districts } from "../../assets/Districts";
import ButtonFilled from "../../components/ButtonFilled";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { useWindowDimensions } from "react-native";
import { useEffect } from "react";

export default function PredictionStepOne() {
  const [checkedGender, setCheckedGender] = useState();
  const [value, setValue] = useState(null);
  const navigation = useNavigation();
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const { fontScale } = useWindowDimensions();

  const [inputData, setInputData] = useState({
    age: "",
    gender: "",
  });

  const [age, setAge] = useState();
  const [gender, setGender] = useState();

  const handleInputChange = (name, value) => {
    const numericValue = parseFloat(value);
    setInputData({ ...inputData, [name]: numericValue });

    setAge(numericValue);
  };

  useEffect(() => {
    if (checkedGender !== undefined) {
      setGender(checkedGender);
    }
  }, [checkedGender]);

  const handleNext = () => {
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Selected District:", selectedDistrict);

    // Pass color, medications, overweight, smoking, alcohol, and selectedDistrict to the next screen
    navigation.navigate("PredictionStepTwo", {
      age,
      gender,
      selectedDistrict,
    });
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
            flexDirection: "row",
            marginHorizontal: "7.5%",
            justifyContent: "space-between",
          }}
        ></View>
        <View
          style={{
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2.5%",
          }}
        >
          <View>
            <FormInput
              autoCapitalize="none"
              onChangeText={(value) => handleInputChange("age", value)}
              value={inputData.age}
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
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 16 / fontScale,
                color: "#222244",
              }}
            >
              Where are you currently located?
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
                marginTop: "5%",
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
              search
              data={districts}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Your Location"
              value={value}
              onChange={(item) => {
                setSelectedDistrict(item.value);
              }}
            />
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

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },
});
