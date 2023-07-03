import { styled } from "@stitches/react";

export const HeaderContainer = styled('header', {
    maxWidth: "100vw",
    width: "100%",
    padding: "1rem 0",
    background: "$primary",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
    position: "sticky",
    top: 0,
    zIndex: 999,

    "> div": {
        width: "80%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    "&.lightTheme, *&.darkTheme": {
        "p, span, input::placeholder": {
            color: "$text"
        }
    },

    "a": {
        display: "flex",
        textDecoration: "none",

        ".logo": {
            color: "$tertiary"
        },
    },

    svg: {
        color: "$text"
    }
})

export const SearchBar = styled('div', {
    marginLeft: "7rem",
    width: "30rem",
    padding: "0.8rem 1rem",
    background: "$input",
    borderRadius: "4px",
    display: "flex",
    gap: "0.5rem",

    input: {
        background: "none",
        border: "none",
        width: "100%",
        fontFamily: "Poppins",

        "&::placeholder": {
            fontWeight: "bold"
        }
    }
})

export const HeaderActions = styled('nav', {
    display: "flex",
    gap: "2rem",

    button: {
        background: "none",
        border: "none",
        display: "flex",
        alignItems: "center"
    },

    div: {
        padding: "0.5rem",
        border: "1px solid $text",
        borderRadius: "50%",
        cursor: "pointer"
    }
})