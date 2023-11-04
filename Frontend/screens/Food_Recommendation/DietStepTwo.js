import { StyleSheet, Text, View } from "react-native";
import FormInput from "../../components/FormInput";
import React, { useState } from "react";
import ButtonFilled from "../../components/ButtonFilled";
import { useNavigation } from "@react-navigation/native";
import { MultiSelect } from "react-native-element-dropdown";
import { useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function DietStepTwo() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);
  const { fontScale } = useWindowDimensions();

  const route = useRoute();

  const {
    stage,
    potassium,
    calcium,
    phosphorus,
    sodium,
    hemoglobin,
    cholesterol,
  } = route.params;

  const handleNext = () => {
    console.log("Stage:", stage);
    console.log("Potassium:", potassium);
    console.log("Calcium:", calcium);
    console.log("Phosphorus:", phosphorus);
    console.log("Sodium:", sodium);
    console.log("Hemoglobin:", hemoglobin);
    console.log("Cholesterol:", cholesterol);

    navigation.navigate("DietPlan", {
      stage,
      potassium,
      calcium,
      phosphorus,
      sodium,
      hemoglobin,
      cholesterol,
    });
  };

  const preferences = [
    {
      label: "Vegitarian",
      value: "Vegitarian",
    },
    {
      label: "Vegan",
      value: "Vegan",
    },
    {
      label: "Low Sodium",
      value: "Low Sodium",
    },
    {
      label: "Low Potassium",
      value: "Low Potassium",
    },
    {
      label: "Low Posphorus",
      value: "Low Posphorus",
    },
    {
      label: "Low Protein",
      value: "Low Protein",
    },
    {
      label: "High Calorie Intake",
      value: "High Calorie Intake",
    },
    {
      label: "Gluten-Free",
      value: "Gluten-Free",
    },
    {
      label: "Lactose Intolerant",
      value: "Lactose Intolerant",
    },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    // <Provider>
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
              marginTop: "5%",
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
              Please select any dietary preferences, restrictions, or needs that
              apply to you.
            </Text>

            <MultiSelect
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
              search
              data={preferences}
              labelField="label"
              valueField="value"
              placeholder="Select Preferences"
              searchPlaceholder="Search..."
              value={selected}
              onChange={(item) => {
                setSelected(item);
              }}
              selectedStyle={styles.selectedStyle}
            />
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
          <FormInput label="Additional Notes" />
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
});
