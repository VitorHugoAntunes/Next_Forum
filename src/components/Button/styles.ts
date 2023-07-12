import { styled } from "@stitches/react";

export const ButtonContainer = styled('button', {
    flex: 1,
    width: "100%",
    padding: "0.8rem",
    color: "$input",
    border: "none",
    borderRadius: "4px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    transition: "0.2s",

    "&.cancel": {
        background: "$danger",
    },

    "&.confirm": {
        background: "$confirm",
    },

    "&.neutral": {
        background: "$secondary",
    },

    "&:hover": {
        opacity: "0.8",
    }
})