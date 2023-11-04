import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import WaterQualityInput from "../../components/WaterQualityInput";
import { Dropdown } from "react-native-element-dropdown";
import { districts } from "../../assets/Districts";
import { useWindowDimensions } from "react-native";
import { waterDistricts } from "../../assets/WaterDistricts";
import { useEffect } from "react";
import ButtonFilled from "../../components/ButtonFilled";
import { useNavigation } from "@react-navigation/native";

export default function ManualMode() {
  const [value, setValue] = useState(null);
  const { fontScale } = useWindowDimensions();
  const navigation = useNavigation();

  const [inputWaterData, setInputWaterData] = useState({
    location: "",
    pHValue: "",
    temperature: "",
    turbidity: "",
    tds: "",
  });

  const waterDistricts = [
    {
      label: "Anuradhapura",
      value: "0",
    },
    {
      label: "Kurunegala",
      value: "1",
    },

    {
      label: "Polonnaruwa",
      value: "2",
    },
  ];

  const [location, setLocation] = useState();
  const [pHValue, setpHValue] = useState();
  const [temperature, setTemperature] = useState();
  const [turbidity, setTurbidity] = useState();
  const [tds, setTds] = useState();
  const [checklocation, setChecklocation] = useState(false);

  const handleInputChange = (name, value) => {
    const numericValue = parseFloat(value);
    setInputWaterData({ ...inputWaterData, [name]: numericValue });
    if (name === "pHValue") {
      setpHValue(numericValue);
    } else if (name === "temperature") {
      setTemperature(numericValue);
    } else if (name === "turbidity") {
      setTurbidity(numericValue);
    } else if (name === "tds") {
      setTds(numericValue);
    }
  };

  useEffect(() => {
    if (checklocation !== undefined) {
      setChecklocation(value);
    }
  });

  const handleNext = () => {
    console.log("location", location);
    console.log("pHValue", pHValue);
    console.log("temperature", temperature);
    console.log("turbidity", turbidity);
    console.log("tds", tds);

    navigation.navigate("WaterTestResults", {
      location,
      pHValue,
      temperature,
      turbidity,
      tds,
    });
  };

  return (
    <View
      style={{
        marginTop: "5%",
        gap: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            fontSize: 13 / fontScale,
            color: "#222244",
          }}
        >
          Location
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
            flex: 0.5,
          }}
          placeholderStyle={{
            fontSize: 13 / fontScale,
            fontFamily: "OpenSans-Regular",
            color: "grey",
          }}
          selectedTextStyle={{
            fontSize: 13 / fontScale,
            fontFamily: "OpenSans-Regular",
            color: "#222244",
          }}
          inputSearchStyle={{
            height: 40,
            fontSize: 13 / fontScale,
          }}
          iconStyle={styles.iconStyle}
          search
          data={waterDistricts}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Your Location"
          value={location}
          onChange={(item) => {
            setLocation(item.value);
          }}
        />
      </View>

      <View
        style={{
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2.5%",
          gap: 5,
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
              fontSize: 13 / fontScale,
              color: "#222244",
            }}
          >
            Temperature
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <TextInput
              keyboardType="numeric"
              value={inputWaterData.temperature}
              onChangeText={(value) => handleInputChange("temperature", value)}
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 15,
                borderWidth: 1,
                borderColor: "#333366",
                width: 165,
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 45,
              }}
            />
          </View>
        </View>
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
              fontSize: 13 / fontScale,
              color: "#222244",
            }}
          >
            pH Value
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <TextInput
              keyboardType="numeric"
              value={inputWaterData.pHValue}
              onChangeText={(value) => handleInputChange("pHValue", value)}
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 15,
                borderWidth: 1,
                borderColor: "#333366",
                width: 165,
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 45,
              }}
            />
          </View>
        </View>
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
              fontSize: 13 / fontScale,
              color: "#222244",
            }}
          >
            Turbidity
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <TextInput
              keyboardType="numeric"
              value={inputWaterData.turbidity}
              onChangeText={(value) => handleInputChange("turbidity", value)}
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 15,
                borderWidth: 1,
                borderColor: "#333366",
                width: 165,
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 45,
              }}
            />
          </View>
        </View>
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
              fontSize: 13 / fontScale,
              color: "#222244",
            }}
          >
            TDS
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <TextInput
              keyboardType="numeric"
              value={inputWaterData.tds}
              onChangeText={(value) => handleInputChange("tds", value)}
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 15,
                borderWidth: 1,
                borderColor: "#333366",
                width: 165,
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 45,
              }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5%",
        }}
      >
        <ButtonFilled onPress={handleNext} title="Next" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
