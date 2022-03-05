import React from "react";
import Head from "next/head";

type PageTypes = {
  children: React.ReactNode;
  title: string;
  description: string;
  image?: string;
};

const Page = ({ children, title, description, image }: PageTypes) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {image && <meta itemProp="image" content={image} />}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:type" content="image/png" />
        {image && <meta property="og:image:width" content="1200" />}
        {image && <meta property="og:image:height" content="630" />}
      </Head>
      <main role="main">{children}</main>
    </>
  );
};

export default Page;
