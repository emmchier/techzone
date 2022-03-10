import React from "react";

import Image from "next/image";
import Text from "../../../atoms/text";
import {
  Content,
  DefaultImage,
  DescriptionContainer,
  IconContainer,
  ImageContent,
  TextContent,
  TitleContainer,
} from "./styles";
import Icon from "../../../atoms/icon";

export interface CardI {
  image?: string;
  alt?: string;
  title?: string;
  description?: string;
  isSkeleton?: boolean;
  icon?: string;
  backgroundImg?: boolean;
}

const Card = ({
  image,
  alt = "",
  title = "",
  description = "",
  isSkeleton = false,
  icon = "",
  backgroundImg = false,
}: CardI) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "browse":
        return <Icon iconType="browse" />;
      case "choose":
        return <Icon iconType="choose" />;
      case "enjoy":
        return <Icon iconType="enjoy" />;
      default:
        return <Icon iconType="browse" />;
    }
  };

  return (
    <Content>
      <ImageContent background={backgroundImg}>
        {image && isSkeleton === false ? (
          <Image
            src={image && image}
            alt={alt && alt}
            layout="responsive"
            objectFit="contain"
            width="100%"
            height="100%"
          />
        ) : (
          <DefaultImage isSkeleton={isSkeleton}>
            <Image
              src="/icons/logo.svg"
              alt={alt && alt}
              layout="responsive"
              width="100%"
              height="100%"
            />
          </DefaultImage>
        )}
      </ImageContent>
      <TextContent>
        <TitleContainer isSkeleton={isSkeleton}>
          {icon !== "" && <IconContainer>{getIcon(icon)}</IconContainer>}
          <Text type="l1" color="dark">
            {title && title}
          </Text>
        </TitleContainer>
        <DescriptionContainer isSkeleton={isSkeleton}>
          <Text type="l2" color="light">
            {description && description}
          </Text>
        </DescriptionContainer>
      </TextContent>
    </Content>
  );
};

export default Card;
