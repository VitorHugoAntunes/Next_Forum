import { styled } from "@stitches/react";

export const MenuContainer = styled('div', {
    display: "flex",
    flexDirection: "column",

    "> a, > div": {
        padding: "0.5rem 0 0.5rem 2rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",

        textDecoration: "none",
        cursor: "pointer",
        transition: "0.2s",

        "&.active": {
            position: "relative",
            background: "$quaternary",

            "span, svg": {
                color: "$secondary"
            },

            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '0.5rem', // Largura da borda na esquerda
                height: '100%',
                backgroundColor: '$secondary', // Cor da borda
            },
        },

        "&:hover": {
            opacity: "0.8"
        },

        span: {
            fontWeight: "500"
        },

        svg: {
            color: "$text"
        }
    }
})