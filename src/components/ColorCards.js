import React, { useEffect, useState } from "react";
import "./ColorCards.css";
import Card from "./Card";

function ColorCards({ colors, isLoading }) {
  return isLoading ? (
    "Patterns are loading, please wait...."
  ) : (
    <div className={`color_cards`}>
      {colors.map((color) => (
        <Card color={color} key={color.id} />
      ))}
    </div>
  );
}

export default ColorCards;
