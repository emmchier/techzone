import type { NextPage } from "next";
import Image from "next/image";
import Col from "../components/atomic-design/atoms/grid/col";
import Row from "../components/atomic-design/atoms/grid/row";
import Heading from "../components/atomic-design/atoms/heading";
import Text from "../components/atomic-design/atoms/text";
import Card from "../components/atomic-design/molecules/cards/card";
import Page from "../components/common/page";
import Section from "../components/common/section";
import { products } from "../domain/products";

const Home: NextPage = () => {
  return (
    <Page
      title="Aerolab | Developer Challenge"
      description="Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech."
      image="/metadata.png"
    >
      <Section container="sm">
        <Heading type="l1" variant="h1">
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
        </Text>
        <Row gap={5}>
          {products.map((product) => (
            <Col xs={12} sm={12} md={4} lg={3} xlg={3} key={product._id}>
              <Card
                image={product.img.url && product.img.url}
                alt={product.name}
                title={product.name}
                description={product.category}
              />
            </Col>
          ))}
        </Row>
      </Section>
    </Page>
  );
};

export default Home;
