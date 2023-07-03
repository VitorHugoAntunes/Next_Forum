import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    outline: 'none',
  },

  html: {
    maxWidth: "100vw",
    fontFamily: "Poppins, sans-serif",
  },

  button: {
    cursor: "pointer"
  }
})