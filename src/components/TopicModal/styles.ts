import { keyframes, styled } from "@stitches/react";

export const Overlay = styled("div", {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    inset: 0, // top 0 left 0 bottom 0 right 0
    zIndex: 999,
    background: "rgba(0, 0, 0, 0.75)",
})

const contentShow = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translate(-50%, -48%) scale(0.96)',
    },
    '100%': {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(1)',
    },
});

export const Content = styled("div", {
    minWidth: "32rem",
    height: "fit-content",
    background: "$primary",
    borderRadius: "6px",
    padding: "1.5rem",

    position: "fixed",
    zIndex: 999,

    // To center the content
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    animation: `${contentShow} 0.150s ease-in-out`,

    h2: {
        color: "$title",
        textAlign: "center"
    },

    ".closeButton": {
        position: "absolute",
        right: "1rem",
        top: "1rem",
        background: "none",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.2s",

        svg: {
            color: "$title",
        },

        "&:hover": {
            opacity: "0.8"
        }
    }
});

export const FormContainer = styled('form', {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    "label": {
        color: "$text",

        "&:first-child": {
            marginTop: "1.5rem"
        }
    },

    "fieldset": {
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid $text",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "0.5rem",

        ".categoryOption": {
            textAlign: "center",
            padding: "0.3rem",
            color: "$title",
            fontWeight: "500",
            borderRadius: "32px",
            opacity: "0.8",
            cursor: "pointer",
            transition: "0.2s",

            "&.selected": {
                outline: "0.5px solid #fff",
                opacity: "1"
            },

            "&:hover": {
                opacity: "0.9"
            }
        }
    },

    "textarea, input": {
        padding: "0.8rem",
        background: "$input",
        color: "$text",
        border: "none",
        borderRadius: "4px",
        fontFamily: "Poppins, sans-serif",
        fontSize: "1rem",
        fontWeight: "600",
    },

    "textarea": {
        resize: "none",
        minHeight: "10rem",
    },

    '.formActions': {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginTop: "2rem"
    }
})