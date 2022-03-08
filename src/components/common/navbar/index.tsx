import Link from "next/link";

import React from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import useScroll from "../../../hooks/useScroll";
import AeropayDropdown from "../../atomic-design/organisms/aeropay/aeropay-dropdown";
import { AerolabIsotype, AerolabLogo } from "../../ui/icons";
import Container from "../container";

import { Header, Content, Brand, Background } from "./styles";

const Navbar = () => {
  const isFixed = useScroll();
  const isMobile = useIsMobile("tablet");

  return (
    <Header>
      <Background isFixed={isFixed} />
      <Container>
        <Content isFixed={isFixed}>
          <Link href="/" passHref>
            <Brand>
              {!isMobile ? (
                <AerolabLogo aria-label="Aerolab Logo" />
              ) : (
                <span>
                  <AerolabIsotype aria-label="Aerolab isotype" />
                </span>
              )}
            </Brand>
          </Link>
          <AeropayDropdown />
        </Content>
      </Container>
    </Header>
  );
};

export default Navbar;
