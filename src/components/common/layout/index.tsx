import React from "react";
import { ThemeProvider } from "../../../providers/ThemeProvider";

import Footer from "../footer";
import Navbar from "../navbar";
import Body from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <Body>
        <Navbar />
        {children}
        <Footer />
      </Body>
    </ThemeProvider>
  );
};

export default Layout;
