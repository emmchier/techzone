import type { NextPage } from "next";
import Image from "next/image";

import { useContext } from "react";
import Button from "../components/atomic-design/atoms/buttons/button";
import Col from "../components/atomic-design/atoms/grid/col";
import Row from "../components/atomic-design/atoms/grid/row";
import Heading from "../components/atomic-design/atoms/heading";
import Icon from "../components/atomic-design/atoms/icon";
import Text from "../components/atomic-design/atoms/text";
import Toast from "../components/atomic-design/atoms/toast";
import Filter from "../components/atomic-design/organisms/filter";
import WalkthroughList from "../components/atomic-design/organisms/walkthrough-list";
import Container from "../components/common/container";
import Page from "../components/common/page";
import Section from "../components/common/section";
import { WavesPattern } from "../components/ui/icons";
import WavesMultiPattern from "../components/ui/waves-multi-pattern";
import { ToastContext } from "../context";
import { walkthroughList } from "../domain/cards-list";
import { ToastType } from "../interfaces";
import {
  BackgroundHero,
  BackrgoundGradient,
  BannerContent,
  BannerText,
  Concha,
  HeroContainer,
  HomeContent,
  ImgContainer,
  WalkthroughContent,
  WavesContainer,
} from "../styles/pages/home-styles";

const Home: NextPage = () => {
  const { toast } = useContext(ToastContext) as ToastType;

  const handleAnchor = () => {
    window.scrollTo({ top: 1300, behavior: "smooth" });
  };

  return (
    <Page
      title="Aerolab | Developer Challenge"
      description="Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech."
      image="/metadata.png"
    >
      {/* Banner Section */}
      <Section container="fluid">
        <HomeContent>
          <BannerContent>
            <WavesContainer>
              <WavesMultiPattern />
            </WavesContainer>
            <Container>
              <Row>
                <Col xs={12} sm={12} md={12} lg={6} xlg={6}>
                  <BannerText>
                    <Text type="l1" cap="allCaps">
                      Explore the
                    </Text>
                    <Heading type="l1" variant="h1">
                      <b>tech</b> zone
                    </Heading>
                    <Text type="l1" color="light">
                      Here you’ll be able to exchange all of your hard-earned
                      Aeropoints and exchange them for cool tech.
                    </Text>
                    <Button
                      onClick={handleAnchor}
                      ariaLabel="anchor to product section"
                      size="big"
                    >
                      view products
                      <Icon iconType="arrow" color="#FFFFFF" />
                    </Button>
                  </BannerText>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xlg={6}>
                  <HeroContainer>
                    <Image
                      src="/images/hero-desktop.png"
                      alt="Tech zone hero"
                      layout="responsive"
                      objectFit="contain"
                      width="0"
                      height="0"
                    />
                  </HeroContainer>
                </Col>
              </Row>
            </Container>
          </BannerContent>

          <WalkthroughContent>
            <BackrgoundGradient />
            <Container>
              <WalkthroughList list={walkthroughList} />
            </Container>
          </WalkthroughContent>
        </HomeContent>
      </Section>

      {/* Products Section */}
      <Section container="sm">
        <Heading type="l2" variant="h2">
          <span>tech</span> products
        </Heading>
        <Filter />
      </Section>

      <Toast
        type={toast.type}
        message={toast.message}
        isShowing={toast.isShowing}
      />
    </Page>
  );
};

export default Home;
