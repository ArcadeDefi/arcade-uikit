import { Colors } from "./types";

export const baseColors = {
  failure: "#f6ffe8",
  primary: "#9af235",
  primaryBright: "#d4e34f",
  primaryDark: "#4e1a78",
  secondary: "#8cf757",
  success: "#1ca39a",
  warning: "#ff7637",
};

export const brandColors = {
  binance: "#b1cc04",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#edf7e4",
  backgroundDisabled: "#e4e8df",
  contrast: "#c0c46c",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: '#6acc2d',
  textDisabled: '#999783',
  textSubtle: '#5f8338',
  borderColor: "#d4d6ce",
  card: "#f3f5eb",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#8034be",
  background: "#381942",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#2d2247",
  input: "#534869",
  // primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
