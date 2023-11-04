import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ComponentCard from "../components/ComponentCard";
import InitialCarousel from "../components/InitialCarousel";
import HelloMessage from "../components/HelloMessage";

export default function MainComponentNavigator() {
  const navigation = useNavigation();
  const [rotationValue] = useState(new Animated.Value(0));
  const { fontScale } = useWindowDimensions();

  const rotateIcon = () => {
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate("Settings");
      rotationValue.setValue(0);
    });
  };

  const interpolatedRotateAnimation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "150deg"],
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#f0f9ff" }}>
      <View>
        <View>
          <HelloMessage />
        </View>
      </View>

      <View
        style={{
          flex: 2,
          gap: 30,
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("PredictionStepOne")}
            style={{
              flex: 1,
              aspectRatio: 2 / 3,
              borderRadius: 25,
              shadowColor: "#5960ff",
              shadowOpacity: 0.6,
              shadowRadius: 5,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              elevation: 8,
              backgroundColor: "#f0f9ff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/KidneyPredict.png")}
              style={{ height: 120, width: 100 }}
            />
            <Text
              style={{
                fontSize: 15 / fontScale,
                fontFamily: "OpenSans-SemiBold",
                color: "#333366",
                textAlign: "center",
                marginTop: 10,
                paddingHorizontal: 10,
              }}
            >
              CKD Risk Assessment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ImgRecoginitionGetStarted")}
            style={{
              flex: 1,
              aspectRatio: 2 / 3,
              borderRadius: 25,
              shadowColor: "#5960ff",
              shadowOpacity: 0.6,
              shadowRadius: 5,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              elevation: 8,
              backgroundColor: "#f0f9ff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/MedicineImage.png")}
              style={{ height: 100, width: 140 }}
            />
            <Text
              style={{
                fontSize: 15 / fontScale,
                fontFamily: "OpenSans-SemiBold",
                color: "#333366",
                textAlign: "center",
                marginTop: 10,
                paddingHorizontal: 10,
              }}
            >
              Medical Image Analysis
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("DietStepOne")}
            style={{
              flex: 1,
              aspectRatio: 2 / 3,
              borderRadius: 25,
              shadowColor: "#5960ff",
              shadowOpacity: 0.6,
              shadowRadius: 5,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              elevation: 8,
              backgroundColor: "#f0f9ff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/eating2.png")}
              style={{ height: 140, width: 100 }}
            />
            <Text
              style={{
                fontSize: 15 / fontScale,
                fontFamily: "OpenSans-SemiBold",
                color: "#333366",
                textAlign: "center",
                marginTop: 10,
                paddingHorizontal: 10,
              }}
            >
              Dieting Tips for CKD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("WaterQualityStepOne")}
            style={{
              flex: 1,
              aspectRatio: 2 / 3,
              borderRadius: 25,
              shadowColor: "#5960ff",
              shadowOpacity: 0.6,
              shadowRadius: 5,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              elevation: 8,
              backgroundColor: "#f0f9ff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/WaterDashboard.png")}
              style={{ height: 130, width: 120 }}
            />
            <Text
              style={{
                fontSize: 15 / fontScale,
                fontFamily: "OpenSans-SemiBold",
                color: "#333366",
                textAlign: "center",
                marginTop: 10,
                paddingHorizontal: 10,
              }}
            >
              Water Quality Dashboard
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
