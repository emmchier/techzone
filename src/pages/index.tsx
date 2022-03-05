import type { NextPage } from "next";
import Image from "next/image";
import Icon from "../components/atomic-design/atoms/icon";
import Page from "../components/common/page";
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
} from "../components/ui/icons";

const Home: NextPage = () => {
  return (
    <Page
      title="Aerolab | Developer Challenge"
      description="Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech."
      image="/metadata.png"
    >
      <AerolabIsotype />
      <AerolabLogoCircle />
      <AerolabLogo />
      <ArrowIcon />
      {/* <WavesPattern />
      <SingleWave /> */}
      <BrowseIcon />
      <ChevronIcon />
      <ChooseIcon />
      <CloseIcon />
      <EnjoyIcon />
      <GithubIcon />
      <ErrorIcon />
      <SuccessIcon />
      {/* <Image
        src="/static/hero-desktop.png"
        alt="Vercel Logo"
        width={500}
        height={500}
      /> */}
      <Icon iconType="choose" />
    </Page>
  );
};

export default Home;