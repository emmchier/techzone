import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getProducts, getUser } from "../api/service";
import Button from "../components/atomic-design/atoms/buttons/button";
import Col from "../components/atomic-design/atoms/grid/col";
import Row from "../components/atomic-design/atoms/grid/row";
import Heading from "../components/atomic-design/atoms/heading";
import Icon from "../components/atomic-design/atoms/icon";
import Text from "../components/atomic-design/atoms/text";
import Card from "../components/atomic-design/molecules/cards/card";
import ProductCard from "../components/atomic-design/molecules/cards/product-card";
import AeropayCard from "../components/atomic-design/organisms/aeropay/aeropay-card";
import ProductFilter from "../components/atomic-design/organisms/product-filter";
import ProductList from "../components/atomic-design/organisms/product-list";
import WalkthroughList from "../components/atomic-design/organisms/walkthrough-list";
import Page from "../components/common/page";
import Section from "../components/common/section";
import { walkthroughList } from "../domain/cards-list";
import { products } from "../domain/products";
import { theme } from "../styles/theme";

const Home: NextPage = () => {
  return (
    <Page
      title="Aerolab | Developer Challenge"
      description="Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech."
      image="/metadata.png"
    >
      <Section container="sm">
        {/* <Button ariaLabel="lala">
          Redeem for
          <Icon
            iconType="logoCircle"
            color="#FFFFFF"
            background="url(#paint0_linear_485_5621)"
          />
          12.500
        </Button>
        <Button ariaLabel="lala" disabled>
          You need
          <Icon
            iconType="logoCircle"
            color={theme.color.neutral.grey500}
            background="#FFFFFF"
          />
          500
        </Button>
        <Button ariaLabel="lala" size="big">
          view products
          <Icon iconType="arrow" color="#FFFFFF" />
        </Button>
        <Button ariaLabel="lala" size="medium">
          Selected
        </Button>
        <Button ariaLabel="lala" size="medium" state="unselected">
          <span>0000</span>
        </Button>
        <Button ariaLabel="lala" size="medium" state="selected">
          <span>0000</span>
        </Button>
        <Button ariaLabel="lala" state="processing">
          Processing...
        </Button>
        <Button ariaLabel="lala" size="small">
          0000
        </Button>
        <Button ariaLabel="lala" variant="outlined" size="medium">
          <Icon iconType="logoCircle" />
          <b>1000</b>
          <Icon iconType="chevron" direction="left" />
        </Button>
        <Button ariaLabel="lala" variant="text">
          <Icon
            iconType="github"
            color={theme.color.neutral.grey500}
            background="#FFFFFF"
          />
          View this repository
        </Button>
        <Button ariaLabel="lala" variant="icon">
          <Icon iconType="close" />
        </Button> */}
        {/* <Heading type="l1" variant="h1">
          <b>tech</b> zone
        </Heading>
        <Heading type="l2" variant="h2">
          <span>tech</span> products
        </Heading>
        <Heading type="l3" variant="h3">
          <b>1—browse</b>
        </Heading>
        <Text type="l1" color="light">
          Here you’ll be able to exchange all of your hard-earned Aeropoints and
          exchange them for cool tech.
        </Text>
        <Text type="l1" color="dark">
          Add Balance
        </Text>
        <Text type="l1">
          Page <b>1 of 2</b>
        </Text>
        <Text type="l2" cap="allCaps">
          Cameras
        </Text> */}

        {/* <WalkthroughList list={walkthroughList} /> */}
        <ProductFilter />
      </Section>
    </Page>
  );
};

export default Home;
