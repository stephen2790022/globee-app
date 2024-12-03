export const lightTheme = {
  colors: {
    primary: "#FC6767",
    background: "#FFFFFF",
    text: "#000000",
    border: "#E5E5E5",
    muted: "#666666",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export const darkTheme = {
  colors: {
    primary: "#FC6767",
    background: "#1A1A1A",
    text: "#FFFFFF",
    border: "#333333",
    muted: "#999999",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export type Theme = typeof lightTheme;
