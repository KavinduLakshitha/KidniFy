import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ButtonFilled from "../../components/ButtonFilled";
import { AntDesign } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import FormInput from "../../components/FormInput";
import { useNavigation } from "@react-navigation/native";

export default function PredictionStepFour() {
  const [checkedAge, setCheckedAge] = useState("Yes");
  const [checkedGender, setCheckedGender] = useState("Yes");

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            marginTop: "15%",
            marginHorizontal: "7.5%",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
              marginTop: "10%",
            }}
          >
            Medical History and Lifestyle
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
            <AntDesign name="close" size={28} color="#222244" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5%",
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
                fontSize: 18,
                color: "#222244",
              }}
            >
              Are you experiencing more frequent urination than usual?
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="male"
                  status={checkedGender === "male" ? "checked" : "unchecked"}
                  onPress={() => setCheckedGender("male")}
                />
                <Text style={{ fontSize: 17, fontFamily: "OpenSans-Medium" }}>
                  Yes
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="female"
                  status={checkedGender === "female" ? "checked" : "unchecked"}
                  onPress={() => setCheckedGender("female")}
                />
                <Text style={{ fontSize: 17, fontFamily: "OpenSans-Medium" }}>
                  No
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 18,
                color: "#222244",
              }}
            >
              Have you been diagnosed with or treated for any conditions related
              to urinary blockages?
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="male"
                  status={checkedGender === "male" ? "checked" : "unchecked"}
                  onPress={() => setCheckedGender("male")}
                />
                <Text style={{ fontSize: 17, fontFamily: "OpenSans-Medium" }}>
                  Yes
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="female"
                  status={checkedGender === "female" ? "checked" : "unchecked"}
                  onPress={() => setCheckedGender("female")}
                />
                <Text style={{ fontSize: 17, fontFamily: "OpenSans-Medium" }}>
                  No
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 18,
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
                  value="male"
                  status={checkedGender === "male" ? "checked" : "unchecked"}
                  onPress={() => setCheckedGender("male")}
                />
                <Text style={{ fontSize: 17, fontFamily: "OpenSans-Medium" }}>
                  Yes
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="female"
                  status={checkedGender === "female" ? "checked" : "unchecked"}
                  onPress={() => setCheckedGender("female")}
                />
                <Text style={{ fontSize: 17, fontFamily: "OpenSans-Medium" }}>
                  No
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 18,
                color: "#222244",
              }}
            >
              Have you noticed any significant changes in the color of your
              urine?
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="male"
                  status={checkedGender === "male" ? "checked" : "unchecked"}
                  onPress={() => setCheckedGender("male")}
                />
                <Text style={{ fontSize: 17, fontFamily: "OpenSans-Medium" }}>
                  Yes
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="female"
                  status={checkedGender === "female" ? "checked" : "unchecked"}
                  onPress={() => setCheckedGender("female")}
                />
                <Text style={{ fontSize: 17, fontFamily: "OpenSans-Medium" }}>
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
        <ButtonFilled
          title="Check your results"
          onPress={() => navigation.navigate("Prediction")}
        />
      </View>
    </View>
  );
}
