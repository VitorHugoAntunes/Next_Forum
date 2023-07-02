import { styled } from "@stitches/react";

export const TopicContainer = styled('article', {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    gap: "2rem",
    padding: "1.5rem 2rem",
    background: "$primary",
    border: "1px solid $primary",
    borderRadius: "4px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    cursor: "pointer",
    transition: "0.2s",

    svg: {
        color: "$text"
    },

    "&:hover": {
        border: "1px solid $text"
    }
})

export const VotesDiv = styled('div', {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
})

export const TopicContent = styled('div', {
    borderBottom: "1px solid rgba(150, 150, 150, .1)",
    p: {
        margin: "0.8rem 0",
        fontSize: "90%",
    }
})

export const TopicInfo = styled('div', {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "0.8rem",

    "> div": {
        display: "flex",
        alignItems: "center",

        "img": {
            borderRadius: "50%",
            marginRight: "1rem"
        },

        "p": {
            marginRight: "2rem"
        },

        "a": {
            textDecoration: "none",
            color: "$secondary",
            transition: "0.2s",

            "&:hover": {
                opacity: "0.8"
            }
        },

        "svg": {
            marginRight: "0.5rem"
        }
    }
})