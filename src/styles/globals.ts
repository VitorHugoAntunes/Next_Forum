import { globalCss, styled } from "@stitches/react";

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

export const MainContainer = styled('div', {
  maxWidth: "80%",
  maxHeight: "100%",
  margin: "0 auto",

  "&.lightTheme, *&.darkTheme": {
    "h1, h2, h3, h4, h5, h6": {
      color: "$title",
    },

    "p, span, input::placeholder": {
      color: "$text"
    }
  }
})