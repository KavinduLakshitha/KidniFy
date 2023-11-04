import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import ButtonFilled from "../../components/ButtonFilled";
import { useNavigation } from "@react-navigation/native";

const PredictionDetails = () => {
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
              fontFamily: "Lora-Bold",
              color: "#222244",
              marginTop: "10%",
            }}
          >
            According to your details
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Nuwanthika")}>
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
              marginTop: "2.5%",
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 18,
                color: "#222244",
              }}
            >
              Tests
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontFamily: "OpenSans-Medium",
                marginTop: "2.5%",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </View>

          <View
            style={{
              marginTop: "10%",
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 18,
                color: "#222244",
              }}
            >
              Medical centers near you
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontFamily: "OpenSans-Medium",
                marginTop: "2.5%",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
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
          title="Test Again"
          onPress={() => navigation.navigate("PredictionStepOne")}
        />
      </View>
    </View>
  );
};

export default PredictionDetails;
