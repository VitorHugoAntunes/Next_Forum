import { styled } from "@stitches/react";

export const ActionButtons = styled('div', {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    justifyContent: "flex-end",
    marginTop: "0.8rem",

    button: {
        background: "none",
        border: "none",
        display: "flex",
        alignItems: "center",
        gap: "0.5em",
        fontFamily: "Poppins, sans-serif",
        fontSize: "1rem",
        color: "$text",
        transition: "0.2s",

        "&:hover": {
            opacity: "0.8"
        }
    }
})

export const CommentFormContainer = styled('form', {
    marginTop: "2rem",
    width: "100%",
    display: "flex",
    gap: "1rem",

    input: {
        width: "100%",
        border: "none",
        borderRadius: "4px",
        padding: "0.5rem 1rem",
        background: "$input",
        color: "$text",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "500",
    },

    button: {
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "4px",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "500",
        color: "$input",

        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        transition: "0.2s",

        "&.cancel": {
            background: "$danger",
        },

        "&.confirm": {
            background: "$confirm",
        },

        "svg": {
            color: "$input"
        },

        "&:hover": {
            opacity: "0.8",
        }
    }
})