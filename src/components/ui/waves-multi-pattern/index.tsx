import React from "react";
import { WavesPattern } from "../icons";
import { Pattern } from "./styles";

const multiWavesPattern = [{ id: 0 }, { id: 1 }, { id: 2 }];

const WavesMultiPattern = () => (
  <Pattern>
    {multiWavesPattern.map((wave) => (
      <li key={wave.id}>
        <WavesPattern />
      </li>
    ))}
  </Pattern>
);

export default WavesMultiPattern;
