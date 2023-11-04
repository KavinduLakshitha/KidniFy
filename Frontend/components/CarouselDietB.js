import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import DietCard from "./DietCard";

export default function s() {
  const diets = [
    {
      category: "Fruits",
      items: [
        "Grapes",
        "Lemon",
        "Peaches",
        "Pomegranate",
        
      ],
    },
    {
      category: "Vegitables",
      items: ["Onion",
              "Bell peppers",
              "Carrot",
              "Tomatoes",
              "Mushrooms"
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
      items: ["Seeds and nuts"],
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
