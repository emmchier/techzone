import type { NextPage } from "next";

import { useContext } from "react";
import Heading from "../components/atomic-design/atoms/heading";
import Toast from "../components/atomic-design/atoms/toast";
import Filter from "../components/atomic-design/organisms/filter";
import WalkthroughList from "../components/atomic-design/organisms/walkthrough-list";
import Page from "../components/common/page";
import Section from "../components/common/section";
import { ToastContext } from "../context";
import { walkthroughList } from "../domain/cards-list";
import { ToastType } from "../interfaces";

const Home: NextPage = () => {
  const { toast } = useContext(ToastContext) as ToastType;

  return (
    <Page
      title="Aerolab | Developer Challenge"
      description="Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech."
      image="/metadata.png"
    >
      <Section container="sm">
        <WalkthroughList list={walkthroughList} />
      </Section>
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
