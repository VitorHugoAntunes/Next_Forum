import { styled } from "@stitches/react";

export const SideBarContainer = styled('aside', {
    button: {
        flex: 1,
        width: "100%",
        padding: "0.8rem",
        background: "$secondary",
        color: "$input",
        border: "none",
        borderRadius: "4px",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "500",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        transition: "0.2s",

        "&:hover": {
            opacity: "0.8",
        }
    }
})

export const TopUsersDiv = styled('div', {
    padding: "1rem",
    marginTop: "2rem",
    borderRadius: "4px",
    background: "$primary",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",

    ".topUsers": {
        paddingBottom: "1rem",
        borderBottom: "1px solid rgba(150, 150, 150, .1)",
    },

    ".topUser": {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1rem",

        "> div": {
            display: "flex",
            alignItems: "center",
            gap: "1rem",

            "img": {
                borderRadius: "50%"
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
                color: "$secondary"
            },
        }
    }
})