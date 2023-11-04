import InitialScreen from "./screens/InitialScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AgreementScreen from "./screens/AgreementScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import TermsScreen from "./screens/TermsScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import { useFonts } from "expo-font";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import EmailSigninScreen from "./screens/EmailSigninScreen";
import ForgetPwdScreen from "./screens/ForgetPwdScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainTabNavigator from "./navigation/MainTabNavigator";
import PredictionStepOne from "./screens/Prediction/PredictionStepOne";
import PredictionStepTwo from "./screens/Prediction/PredictionStepTwo";
import PredictionStepThree from "./screens/Prediction/PredictionStepThree";
import PredictionStepFour from "./screens/Prediction/PredictionStepFour";
import DietStepOne from "./screens/Food_Recommendation/DietStepOne";
import DietStepTwo from "./screens/Food_Recommendation/DietStepTwo";
import axios from "axios";
import { useEffect } from "react";
import Prediction from "./screens/Prediction/Prediction";
import { AppRegistry } from "react-native";
import PredictionDetails from "./screens/Prediction/PredictionDetails";
import DietPlan from "./screens/Food_Recommendation/DietPlan";
import SecondaryScreen from "./screens/SecondaryScreen";
import Settings from "./screens/Settings";
import LanguageSelct from "./screens/LanguageSelect";
import MainComponentNavigator from "./screens/MainComponentNavigator";
import MobileSignIn from "./screens/MobileSignIn";
import OTPScreen from "./screens/OTPScreen";
import WaterQualityStepOne from "./screens/Water_Quality_Analysis/WaterQualityStepOne";
import WaterTestResults from "./screens/Water_Quality_Analysis/WaterTestResults";
import CKDStageStepOne from "./screens/Prediction/Stage/CKDStageStepOne";
import CKDStage from "./screens/Prediction/Stage/CKDStage";
import ImgRecoginitionGetStarted from "./screens/Medical_Image_Analysis/ImgRecognitionGetStarted";
import ImageUploadScreen from "./screens/Medical_Image_Analysis/ImgUploadScreen";
import { AntDesign } from "@expo/vector-icons";
import TitleHeaderCancelQuery from "./components/TitleHeaderCancelQuery";
import ScanResult from "./screens/Medical_Image_Analysis/ScanResult";
import { useWindowDimensions } from "react-native";
import Test from "./components/Test";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const { fontScale } = useWindowDimensions();

  const fetchApi = async () => {
    try {
      const res = await axios.get("http://192.168.8.156:8000/");
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const [fontsLoaded] = useFonts({
    // Open Sans

    "OpenSans-Regular": require("./assets/fonts/OpenSans/OpenSans-Regular.ttf"),
    "OpenSans-Medium": require("./assets/fonts/OpenSans/OpenSans-Medium.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans/OpenSans-Bold.ttf"),

    // Lora

    "Lora-Regular": require("./assets/fonts/Lora/Lora-Regular.ttf"),
    "Lora-Medium": require("./assets/fonts/Lora/Lora-Medium.ttf"),
    "Lora-SemiBold": require("./assets/fonts/Lora/Lora-SemiBold.ttf"),
    "Lora-Bold": require("./assets/fonts/Lora/Lora-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="InitialScreen"
          options={{ headerShown: false }}
          component={InitialScreen}
        />
        <Stack.Screen
          name="Agreement"
          options={{
            headerTitle: "",
          }}
          component={AgreementScreen}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          options={{
            headerTitle: "Privacy Policy",
            headerTitleAlign: "center",
          }}
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen
          name="Terms"
          options={{
            headerTitle: "Terms and Conditions",
            headerTitleAlign: "center",
          }}
          component={TermsScreen}
        />
        <Stack.Screen
          name="CreateAccount"
          options={{
            headerTitle: "",
          }}
          component={CreateAccountScreen}
        />
        <Stack.Screen
          name="Login"
          options={{
            headerTitle: "",
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SigninwithEmail"
          options={{
            headerTitle: "",
          }}
          component={EmailSigninScreen}
        />
        <Stack.Screen
          name="ForgetPwd"
          options={{
            headerTitle: "",
          }}
          component={ForgetPwdScreen}
        />

        <Stack.Screen
          name="MainTabNavigator"
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
          component={MainTabNavigator}
        />

        <Stack.Screen
          name="PredictionStepOne"
          options={{
            headerTitle: "Personal Information",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            gestureEnabled: true,
            headerBackground: () => <TitleHeaderCancelQuery />,
          }}
          component={PredictionStepOne}
        />

        <Stack.Screen
          name="PredictionStepTwo"
          options={{
            headerTitle: "Lifestyle & Habits",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            gestureEnabled: true,
            headerBackground: () => <TitleHeaderCancelQuery />,
          }}
          component={PredictionStepTwo}
        />

        <Stack.Screen
          name="PredictionStepThree"
          options={{
            headerTitle: "Health & Symptoms",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            gestureEnabled: true,
            headerBackground: () => <TitleHeaderCancelQuery />,
          }}
          component={PredictionStepThree}
        />

        <Stack.Screen
          name="PredictionStepFour"
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
          component={PredictionStepFour}
        />

        <Stack.Screen
          name="DietStepOne"
          options={{
            headerTitle: "",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            gestureEnabled: true,
            headerBackground: () => <TitleHeaderCancelQuery />,
          }}
          component={DietStepOne}
        />

        <Stack.Screen
          name="DietStepTwo"
          options={{
            headerTitle: "Dietary Preferences",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            gestureEnabled: true,
            headerBackground: () => <TitleHeaderCancelQuery />,
          }}
          component={DietStepTwo}
        />

        <Stack.Screen
          name="Prediction"
          options={{
            headerTitle: "Prediction",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            gestureEnabled: true,
            headerBackground: () => <TitleHeaderCancelQuery />,
          }}
          component={Prediction}
        />

        <Stack.Screen
          name="PredictionDetails"
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
          component={PredictionDetails}
        />

        <Stack.Screen
          name="DietPlan"
          options={{
            headerTitle: "Diet Plan",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            gestureEnabled: true,
            headerBackground: () => <TitleHeaderCancelQuery />,
          }}
          component={DietPlan}
        />

        <Stack.Screen
          name="SecondaryScreen"
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
          component={SecondaryScreen}
        />

        <Stack.Screen
          name="Settings"
          options={{
            headerStyle: {
              backgroundColor: "#f0f9ff",
            },
          }}
          component={Settings}
        />

        <Stack.Screen
          name="LanguageSelect"
          options={{
            headerShown: false,
          }}
          component={LanguageSelct}
        />

        <Stack.Screen
          name="MainScreen"
          options={{
            headerShown: false,
          }}
          component={MainComponentNavigator}
        />
        <Stack.Screen
          name="MobileSignIn"
          options={{
            headerShown: false,
          }}
          component={MobileSignIn}
        />

        <Stack.Screen
          name="OTPScreen"
          options={{
            headerShown: false,
          }}
          component={OTPScreen}
        />

        <Stack.Screen
          name="WaterQualityStepOne"
          options={{
            headerTitle: "Water Quality Monitor",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            gestureEnabled: true,
            headerBackground: () => <TitleHeaderCancelQuery />,
          }}
          component={WaterQualityStepOne}
        />

        <Stack.Screen
          name="WaterTestResults"
          options={{
            headerTitle: "Test Results",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            gestureEnabled: true,
            headerBackground: () => <TitleHeaderCancelQuery />,
          }}
          component={WaterTestResults}
        />

        <Stack.Screen
          name="CKDStageStepOne"
          options={{
            headerTitle: "Lab Reports Details",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            gestureEnabled: true,
            headerBackground: () => <TitleHeaderCancelQuery />,
          }}
          component={CKDStageStepOne}
        />

        <Stack.Screen
          name="CKDStage"
          options={{
            headerTitle: "",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            gestureEnabled: true,
            headerBackground: () => <TitleHeaderCancelQuery />,
          }}
          component={CKDStage}
        />

        <Stack.Screen
          name="ImgRecoginitionGetStarted"
          options={{
            headerTitle: "",
            headerBackground: () => (
              <View
                style={{
                  backgroundColor: "#f0f9ff",
                  height: "100%",
                  borderBottomColor: "#b3e0ff",
                  borderBottomWidth: 1,
                }}
              />
            ),
          }}
          component={ImgRecoginitionGetStarted}
        />

        <Stack.Screen
          name="ImgUploadScreen"
          options={{
            headerTitle: "",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            gestureEnabled: true,
            headerBackground: () => <TitleHeaderCancelQuery />,
          }}
          component={ImageUploadScreen}
        />

        <Stack.Screen
          name="ScanResults"
          options={{
            headerTitle: "Results",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            headerBackground: () => (
              <View
                style={{
                  backgroundColor: "#f0f9ff",
                  height: "100%",
                  borderBottomColor: "#b3e0ff",
                  borderBottomWidth: 1,
                }}
              />
            ),
          }}
          component={ScanResult}
        />

        <Stack.Screen
          name="Test"
          options={{
            headerTitle: "Test",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18 / fontScale,
              textTransform: "capitalize",
              fontFamily: "Lora-Bold",
              color: "#222244",
            },
            headerBackground: () => (
              <View
                style={{
                  backgroundColor: "#f0f9ff",
                  height: "100%",
                  borderBottomColor: "#b3e0ff",
                  borderBottomWidth: 1,
                }}
              />
            ),
          }}
          component={Test}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("Frontend", () => App);
