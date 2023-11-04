import { View, Text } from "react-native";
import React from "react";
import ButtonFilled from "../components/ButtonFilled";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import InitialCarousel from "../components/InitialCarousel";
import { LinearGradient } from "expo-linear-gradient";

export default function () {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <>
      <LinearGradient
        colors={["#fdeff9", "#bfd7ea"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 1]}
        style={{ flex: 1, justifyContent: "space-between" }}
      >
        <View style={{ paddingTop: "20%" }}>
          <InitialCarousel />
        </View>
        <View
          style={{
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "10%",
          }}
        >
          <ButtonFilled
            title={t("getStarted")}
            onPress={() => navigation.navigate("MainTabNavigator")}
          />
        </View>
      </LinearGradient>
    </>
  );
}
