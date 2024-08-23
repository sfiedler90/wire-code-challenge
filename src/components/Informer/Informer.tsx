import React from "react";
import cloudySun from "./cloudy-sun.svg";

import "./Informer.css";

export const Informer: React.FC<{ message: string }> = ({ message }) => (
  <div className="informer text-center">
    <p>
      <img src={cloudySun} className="cloudy-sun" alt="cloudy sun" />
    </p>
    <p>{message}</p>
  </div>
);
