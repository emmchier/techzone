import React, { FC } from "react";

import useIsMobile from "../../../../hooks/useIsMobile";
import Col from "../../atoms/grid/col";
import Row from "../../atoms/grid/row";
import WalkthroughCard from "../../molecules/cards/walkthrough-card";
import { Content } from "./styles";

interface WalkthroughListProps {
  list?: any[];
}

const WalkthroughList: FC<WalkthroughListProps> = ({ list }) => {
  const isMobile = useIsMobile("tablet");

  return (
    <Content>
      <Row gap={5}>
        {list?.map((action: any) => (
          <Col xs={12} sm={12} md={4} lg={4} xlg={4} key={action.id}>
            <WalkthroughCard
              img={!isMobile ? action.imageDesk : action.imageMob}
              icon={action.icon}
              title={action.title}
              description={action.description}
            />
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default WalkthroughList;
