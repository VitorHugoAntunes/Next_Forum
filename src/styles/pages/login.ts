import { styled } from "@stitches/react";

export const LoginContainer = styled('main', {
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    background: "linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,185,255,0.5326331216080182) 100%)",
})

export const AsideContainer = styled('aside', {
    // background: "linear-gradient(90deg, #F3F3F3 0%, #ACACAC 100%)",
    display: "flex",
    position: "relative",

    "img:first-child": {
        position: "absolute",
        top: 100,
        left: 50
    },

    "img:last-child": {
        position: "absolute",
        top: 300,
        left: 400
    },
})

export const FormSignContainer = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "a": {
        transition: "0.2s",

        "&:hover": {
            opacity: "0.8"
        }
    },

    "> div": {
        minWidth: "27rem",
        padding: "2rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

        "h1, label, a, p": {
            color: "#303030"
        },

        "header a": {
            color: "#3D5AF1",
        },

        form: {
            width: "100%",
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",

            "> div": {
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
            },

            "input, button": {
                padding: "0.8rem 1rem",
                border: "1px solid #ACACAC",
                borderRadius: "4px",
                fontFamily: "Poppins, sans-serif"
            },

            button: {
                color: "#fff",
                fontWeight: "500",
                fontSize: "1rem",
                background: '#6D83F4',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                transition: "0.2s",

                "&.signButton": {
                    marginTop: "1rem"
                },

                "&.signInGoogle": {
                    background: "#fff",
                    color: "#303030"
                },

                "&:hover": {
                    opacity: "0.8"
                }
            },

            a: {
                width: "fit-content",
                alignSelf: "end",
                textDecoration: "none",
            }
        }
    }
})