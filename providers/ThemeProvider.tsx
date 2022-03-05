import { ThemeProvider as MyThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globalStyles";
import { theme } from "../styles/theme";

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <MyThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </MyThemeProvider>
  );
};
