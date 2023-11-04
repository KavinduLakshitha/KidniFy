import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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

SplashScreen.preventAutoHideAsync();

export default function LanguageSelct() {
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
        alignItems: "center",
        paddingVertical: "7.5%",
      }}
      onLayout={onLayoutRootView}
    >
      <View
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          width: "85%",
          gap: 12,
          marginVertical: "20%",
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans-SemiBold",
            fontSize: 24,
            color: "#222244",
          }}
        >
          {t("chooseLanguage")}
        </Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={districts}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="English"
          value={value}
          onChange={(item) => {
            setValue(item.value);
            i18n.changeLanguage(item.value);
          }}
        />
      </View>

      <View
        style={{
          width: "85%",
        }}
      >
        <ButtonFilled
          onPress={() => navigation.navigate("Settings")}
          title={t("continue")}
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
