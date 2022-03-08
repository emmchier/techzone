import React from "react";
import Icon from "../../../atoms/icon";

import { Pattern } from "./styles";

const progresiveWaves = [
  { id: 0, stroke: "0.9" },
  { id: 1, stroke: "1" },
  { id: 2, stroke: "1.2" },
  { id: 3, stroke: "1.3" },
  { id: 4, stroke: "1.4" },
  { id: 5, stroke: "1.5" },
  { id: 6, stroke: "1.6" },
  { id: 7, stroke: "1.7" },
  { id: 8, stroke: "1.8" },
  { id: 9, stroke: "1.9" },
  { id: 10, stroke: "2" },
  { id: 11, stroke: "2.1" },
];

const AeropayCardPattern = () => (
  <Pattern>
    {progresiveWaves.map((wave) => (
      <li key={wave.id}>
        <Icon iconType="wave" color="#7C899C" stroke={wave.stroke} />
      </li>
    ))}
  </Pattern>
);

export default AeropayCardPattern;
