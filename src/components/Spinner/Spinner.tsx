import React from "react";
import "./Spinner.css";
import img from "./spinner.svg";

type SpinnerProps = {
  text: string;
};

export const Spinner: React.FC<SpinnerProps> = ({ text }) => {
  return (
    <div className="spinner text-center">
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
};
