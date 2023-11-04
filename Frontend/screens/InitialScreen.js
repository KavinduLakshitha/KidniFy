import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import ButtonFilled from "../components/ButtonFilled";
import ButtonOutlined from "../components/ButtonOutlined";
import PredictionCircle from "../components/PredictionCircle";
import { Dropdown } from "react-native-element-dropdown";
import i18n from "../assets/i18n";
import { useTranslation } from "react-i18next";
import FormInput from "../components/FormInput";
import InitialCarousel from "../components/InitialCarousel";
import SvgComponent from "../components/SvgBackground";
import ButtonTransparent from "../components/ButtonTransparent";

SplashScreen.preventAutoHideAsync();

export default function InitialScreen() {
  const [value, setValue] = useState(i18n.language);
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [checkedAge, setCheckedAge] = useState("Yes");
  const [checkedGender, setCheckedGender] = useState("Male");
  const [appIsReady, setAppIsReady] = useState(false);
  const handleButtonPress = () => {
    navigation.navigate("Agreement");
  };

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const districts = [
    {
      label: t("English"),
      value: "en",
    },
    {
      label: t("සිංහල"),
      value: "si",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f9ff",
        justifyContent: "space-between",
      }}
      onLayout={onLayoutRootView}
    >
      <View style={{ flex: 1, marginTop: "9%" }}>
        <Image
          source={require("../assets/images/Wave.png")}
          style={{
            height: 200,
            width: "100%",
          }}
        />
        <InitialCarousel />
      </View>

      <View
        style={{
          width: "85%",
          marginBottom: "7.5%",
          marginLeft: "auto",
          marginRight: "auto",
          gap: 10,
        }}
      >
        <ButtonFilled
          onPress={() => navigation.navigate("MobileSignIn")}
          title="Register"
        />

        <ButtonTransparent
          onPress={() => navigation.navigate("MainScreen")}
          title="Continue without an account"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    fontFamily: "OpenSans-Regular",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#333366",
    paddingHorizontal: 15,
    paddingVertical: 2.5,
    borderRadius: 100,
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: "OpenSans-Regular",
    color: "grey",
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: "OpenSans-Regular",
    color: "#222244",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
