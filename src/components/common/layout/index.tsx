import React from "react";

import ProductProvider from "../../../providers/ProductProvider";
import { ThemeProvider } from "../../../providers/ThemeProvider";
import ToastProvider from "../../../providers/ToastProvider";
import UserProvider from "../../../providers/UserProvider";
import ScrollToTop from "../../atomic-design/atoms/scroll-top";
import Footer from "../footer";
import Navbar from "../navbar";
import Body from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <UserProvider>
      <ProductProvider>
        <ToastProvider>
          <ThemeProvider>
            <Body>
              <Navbar />
              {children}
              <Footer />
              <ScrollToTop />
            </Body>
          </ThemeProvider>
        </ToastProvider>
      </ProductProvider>
    </UserProvider>
  );
};

export default Layout;
