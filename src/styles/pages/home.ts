import { styled } from "@stitches/react";

export const HomeContainer = styled('div', {
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr",
    columnGap: "3rem",

    "> div, > section": {
        width: "100%",
        background: "$primary",
        borderRadius: "4px",

        "&:first-child, &:last-child": {
            position: "sticky",
            top: "7rem",
            height: "82vh"
        },

        "&:nth-child(2)": {
            height: "fit-content",
            background: "none",
        }
    }
})