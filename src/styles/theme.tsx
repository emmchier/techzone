// main theme

export const theme = {
  color: {
    neutral: {
      blue: "#176FEB",
      grey900: "#252F3D",
      grey600: "#7C899C",
      grey500: "#8FA3BF",
      grey300: "#DAE4F2",
      grey200: "#E6EDF7",
      grey100: "#F5F9FF",
      white: "#FFFFFF",
    },
    brand: {
      default: "linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)",
      hover: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)",
      light: "#E5F0FF",
      light2: "#CCE1FF",
    },
    green: {
      default: "#29CC74",
      light: "#CCFFE3",
    },
    red: {
      default: "#E07F4F",
      light: "#FFDFD9",
    },
    specials: {
      illustrationBG:
        "linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)",
      sectionBG:
        "linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)",
      aerolab: "linear-gradient(180deg, #FF8800 0%, #FF6600 100%)",
    },
  },
  font: {
    family: "'Montserrat', 'sans-serif'",
    title: {
      l1: {
        desk: {
          size: "11.111rem", // 200px
          lineHeight: "80%",
        },
        mob: {
          size: "5.333rem", // 96px
          lineHeight: "80%",
        },
      },
      l2: {
        desk: {
          size: "2.667rem", // 48px
          lineHeight: "80%",
        },
        mob: {
          size: "1.778rem", // 32px
          lineHeight: "80%",
        },
      },
      l3: {
        desk: {
          size: "1.778rem", // 32px
          lineHeight: "100%",
        },
        mob: {
          size: "1.333rem", // 24px
          lineHeight: "100%",
        },
      },
    },
    text: {
      l1: {
        desk: {
          size: "1rem", // 18px
        },
        mob: {
          size: "0.889rem", // 16px
        },
      },
      l2: {
        desk: {
          size: "0.778rem", // 14px
        },
        mob: {
          size: "0.667rem", // 12px
        },
      },
      lineHeight: "1.5rem", // 27px
    },
    weight: {
      light: 300,
      medium: 500,
      bold: 900,
    },
  },
  spacing: (pixel: number) => `${0.25 * pixel}rem`,
  shadow: {
    elevation1: {
      default: "0px 2px 8px rgba(0, 0, 0, 0.05)",
      hover: "0px 2px 12px rgba(0, 0, 0, 0.08)",
    },
    elevation2: "0px 2px 40px rgba(0, 0, 0, 0.05)",
  },
  transition: {
    main: "0.1s ease-in-out",
  },
  border: {
    radius8: "0.444rem", // 8px
    radius12: "0.667rem", // 12px
    radius16: "0.889rem", // 16px
    radius24: "1.333rem", // 24px
    radius32: "1.778rem", // 32px
    radius104: "5.778rem", // 104px
  },
  breakpoints: {
    smallMobile: "max-width: 479px",
    mobile: "max-width: 767px",
    tablet: "max-width: 991px",
    tabletLandscape: "max-width: 1199px",
    desktop: "max-width: 1599px",
  },
};
