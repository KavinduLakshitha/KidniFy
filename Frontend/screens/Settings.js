import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import i18n from "../assets/i18n";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const navigation = useNavigation();

  const { t } = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f9ff",
      }}
    >
      <View
        style={{
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 10,
          flexDirection: "column",
          gap: 10,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            borderBottomColor: "lightblue",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={20}
              color="#1a1a33"
            />
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 17,
                color: "#222244",
                marginLeft: 10,
              }}
            >
              {t("theme")}
            </Text>
          </View>
          <Entypo name="chevron-right" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            borderBottomColor: "lightblue",
            borderBottomWidth: 1,
          }}
          onPress={() => navigation.navigate("LanguageSelect")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <Ionicons name="language" size={20} color="#1a1a33" />
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 16,
                color: "#222244",
                marginLeft: 10,
              }}
            >
              {t("language")}
            </Text>
          </View>
          <Entypo name="chevron-right" size={24} color="grey" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            borderBottomColor: "lightblue",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              size={20}
              color="#1a1a33"
            />

            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 16,
                color: "#222244",
                marginLeft: 10,
              }}
            >
              {t("faq")}
            </Text>
          </View>
          <Entypo name="chevron-right" size={24} color="grey" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            borderBottomColor: "lightblue",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <Ionicons name="people-sharp" size={20} color="#1a1a33" />
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 16,
                color: "#222244",
                marginLeft: 10,
              }}
            >
              {t("aboutus")}
            </Text>
          </View>
          <Entypo name="chevron-right" size={24} color="grey" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            borderBottomColor: "lightblue",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <MaterialIcons name="feedback" size={24} color="#1a1a33" />
            <Text
              style={{
                fontFamily: "OpenSans-SemiBold",
                fontSize: 16,
                color: "#222244",
                marginLeft: 10,
              }}
            >
              {t("feedback")}
            </Text>
          </View>
          <Entypo name="chevron-right" size={24} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
