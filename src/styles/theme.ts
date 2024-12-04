const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export const lightTheme = {
  colors: {
    primary: "#FC6767",
    background: "#FFFFFF",
    text: "#000000",
    border: "#E5E5E5",
    muted: "#666666",
  },
  breakpoints,
};

export const darkTheme = {
  colors: {
    primary: "#FC6767",
    background: "#1A1A1A",
    text: "#FFFFFF",
    border: "#FFFFFF",
    muted: "#999999",
  },
  breakpoints,
};

export type Theme = typeof lightTheme;
