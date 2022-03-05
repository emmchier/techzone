import React from "react";

import {
  AerolabIsotype,
  AerolabLogo,
  AerolabLogoCircle,
  ArrowIcon,
  BrowseIcon,
  ChevronIcon,
  ChooseIcon,
  CloseIcon,
  EnjoyIcon,
  ErrorIcon,
  GithubIcon,
  SingleWave,
  SuccessIcon,
  WavesPattern,
} from "../../../ui/icons";

import { Content } from "./styles";

type IconsType = {
  iconType?: string;
  color?: string;
  background?: string;
  stroke?: string;
  direction?: string;
};

const Icon = ({
  iconType = "iso",
  color,
  background,
  stroke,
  direction,
}: IconsType) => {
  const getIcon = () => {
    switch (iconType) {
      case "iso":
        return <AerolabIsotype color={color} />;
      case "logoCircle":
        return <AerolabLogoCircle color={color} background={background} />;
      case "logo":
        return <AerolabLogo />;
      case "arrow":
        return <ArrowIcon color={color} />;
      case "browse":
        return <BrowseIcon />;
      case "chevron":
        return <ChevronIcon color={color} stroke={stroke} />;
      case "choose":
        return <ChooseIcon color={color} />;
      case "close":
        return <CloseIcon color={color} stroke={stroke} />;
      case "enjoy":
        return <EnjoyIcon />;
      case "success":
        return <SuccessIcon />;
      case "error":
        return <ErrorIcon />;
      case "github":
        return <GithubIcon color={color} />;
      case "wave":
        return <SingleWave color={color} stroke={stroke} />;
      case "waves":
        return <WavesPattern color={color} stroke={stroke} />;
      default:
        break;
    }
  };
  return <Content direction={direction}>{getIcon()}</Content>;
};

export default Icon;
