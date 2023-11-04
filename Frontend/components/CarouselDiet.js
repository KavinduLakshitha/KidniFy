import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import DietCard from "./DietCard";

export default function s() {
  const diets = [
    {
      category: "Fruits",
      items: [
        "Avocadoes",
        "Bananas",
        "Mangoes",
        "Dried Fruits",
        "Honeydew",
        "Kiwi",
      ],
    },
    {
      category: "Vegitables",
      items: ["Pumpkin", "Potatoes", "Tomatoes"],
    },
    {
      category: "Dairy Products",
      items: ["Ice Cream", "Milk", "Yogurt"],
    },
    {
      category: "Miscellaneous",
      items: ["Chocolate", "Salt Substitute", "Seeds and Nuts"],
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
