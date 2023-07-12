import { styled } from "@stitches/react";

export const TopicSectionContainer = styled('section', {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    marginBottom: "1.8rem",

    ".topicLink": {
        textDecoration: "none"
    }
})

export const LoadingDiv = styled('div', {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem"
})