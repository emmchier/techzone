import React from "react";
import { ThemeProvider } from "../../../providers/ThemeProvider";

import Footer from "../footer";
import Navbar from "../navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
