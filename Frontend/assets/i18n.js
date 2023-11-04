import "intl-pluralrules";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        chooseLanguage: "Choose Your Language",
        continue: "Continue",
        getStarted: "Get Started",
        language: "Language",
        theme: "Theme",
        faq: "FAQ",
        aboutus: "About Us",
        feedback: "Feedback",
        login: "Login",
      },
    },
    si: {
      translation: {
        chooseLanguage: "ඔබගේ භාෂාව තෝරන්න",
        continue: "ඉදිරියට යන්න",
        getStarted: "ආරම්භක වන්න",
        language: "භාෂාව",
        theme: "තේමාව",
        faq: "ප්‍රශ්න",
        aboutus: "අපි ගැන",
        feedback: "ප්‍රතිචාර",
        login: "ඇතුල් වන්න",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
