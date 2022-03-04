import type { NextPage } from "next";
import Image from "next/image";
import Page from "../components/common/page";

const Home: NextPage = () => {
  return (
    <Page
      title="Aerolab | Developer Challenge"
      description="Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech."
      image="/metadata.png"
    >
      <h1>Aerolab</h1>
      <Image
        src="/static/hero-desktop.png"
        alt="Vercel Logo"
        width={500}
        height={500}
      />
    </Page>
  );
};

export default Home;
