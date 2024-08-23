import React from "react";
import "./Rating.css";
import sunRated from "./sun-rated.svg";
import sunUnrated from "./sun-unrated.svg";

type RatingProps = {
  rating: number;
};

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  const elements = [];
  for (let number = 1; number <= 5; number++) {
    const isRated = number <= rating;
    elements.push(
      <img
        key={number}
        src={isRated ? sunRated : sunUnrated}
        alt=""
        data-testid={`rating-${isRated ? "rated" : "unrated"}`}
      />
    );
  }

  return <div className="rating">{elements}</div>;
};
