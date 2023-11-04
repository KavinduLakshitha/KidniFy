import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { BackHandler, Text } from "react-native";

// Import your tab screens
import HomeScreen from "../screens/Prediction/HomeScreen";
import FoodHomeScreen from "../screens/Food_Recommendation/FoodHomeScreen";
import WaterHomeScreen from "../screens/Water_Quality_Analysis/WaterHomeScreen";
import ImageHome from "../screens/Medical_Image_Analysis/ImageHome";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Nuwanthika") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Ashani") {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === "Kavindu") {
            iconName = focused ? "camera" : "camera-outline";
          } else if (route.name === "Malith") {
            iconName = focused ? "water" : "water-outline";
          }

          const scaleFactor = focused ? 1.2 : 1;

          return (
            <Ionicons name={iconName} size={size * scaleFactor} color={color} />
          );
        },
        tabBarLabel: ({ focused }) => {
          const labelStyle = focused
            ? { fontWeight: "bold", fontSize: 12 }
            : { fontSize: 12 };

          return <Text style={labelStyle}>{route.name}</Text>;
        },

        headerShown: false,
        tabBarActiveTintColor: "#2196F3",
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: 5,
          height: 55,
          backgroundColor: "#f0f9ff",
        },
      })}
    >
      {/* Should change later */}
      <Tab.Screen name="Nuwanthika" component={HomeScreen} />
      <Tab.Screen name="Ashani" component={FoodHomeScreen} />
      <Tab.Screen name="Kavindu" component={ImageHome} />
      <Tab.Screen name="Malith" component={WaterHomeScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
