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
    border: "#e9e9e9",
    muted: "#959595",
    bookDetailsBackground: "#F2F2F2",
  },
  breakpoints,
};

export const darkTheme = {
  colors: {
    primary: "#FC6767",
    background: "#1A1A1A",
    text: "#FFFFFF",
    border: "#525252",
    muted: "#cecece",
    bookDetailsBackground: "#3B3B3B",
  },
  breakpoints,
};
export type Theme = typeof lightTheme;
