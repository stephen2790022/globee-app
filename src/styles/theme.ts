const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export const lightTheme = {
  colors: {
    primary: "#FF233D",
    background: "#FFFFFF",
    text: "#000000",
    border: "#E5E5E5",
    muted: "#959595",
    bookDetailsBackground: "#FAFAFA",
  },
  breakpoints,
};

export const darkTheme = {
  colors: {
    primary: "#FF233D",
    background: "#1A1A1A",
    text: "#FFFFFF",
    border: "#FFFFFF",
    muted: "#cecece",
    bookDetailsBackground: "#3B3B3B",
  },
  breakpoints,
};

export type Theme = typeof lightTheme;
