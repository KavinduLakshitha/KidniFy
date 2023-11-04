import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import DietCard from "./DietCard";

export default function s() {
  const diets = [
    {
      category: "Fruits",
      items: [
        "Apples",
        "Berries",
        "Grapes",
        "Lemon",
        "Peaches",
        "Pomegranate",
        "Pineapple",
        "Plums",   
        "Watermelon",     
      ],
    },
    {
      category: "Vegitables",
      items: ["Carrots",
              "Cabbage",
              "Cucumber",
              "EggPlant",
              "Green Beans",
              "Onion",
              "Bell peppers"
            ],
    },
    {
      category: "Dairy Products",
      items: ["Cheese", "Milk", "Yogurt"],
    },
    {
      category: "Animal Protiene",
      items: ["Meat", "Fish", "Egg"],
    },
    {
      category: "Miscellaneous",
      items: ["Seeds and nuts", "popcorn(unsalted)"],
    },
  ];

  return (
    <>
      {diets.map((diet, index) => (
        <DietCard key={index} category={diet.category} items={diet.items} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({});
