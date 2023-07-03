import { styled } from "@stitches/react";

export const MainContainerDiv = styled('div', {
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