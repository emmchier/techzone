import React from "react";

import Image from "next/image";
import Text from "../../../atoms/text";
import { Content, DefaultImage, ImageContent, TextContent } from "./styles";

export interface CardI {
  image?: string;
  alt?: string;
  title?: string;
  description?: string;
}

const Card = ({ image, alt = "", title = "", description = "" }: CardI) => (
  <Content>
    <ImageContent>
      {image ? (
        <Image
          src={image && image}
          alt={alt && alt}
          layout="responsive"
          objectFit="contain"
          width="100%"
          height="100%"
        />
      ) : (
        <DefaultImage>
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
      <Text type="l1" color="dark">
        {title && title}
      </Text>
      <Text type="l2" cap="allCaps" color="light">
        {description && description}
      </Text>
    </TextContent>
  </Content>
);

export default Card;
