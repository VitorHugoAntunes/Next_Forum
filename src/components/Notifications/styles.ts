import { styled } from "@stitches/react";

export const NotificationsContainer = styled('section', {
    width: "30rem",
    height: "fit-content",
    borderRadius: "4px",
    background: "$primary",
    position: "fixed",
    right: "1rem",
    top: "4rem",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    border: "1px solid $text",

    h3: {
        padding: "0.5rem 1rem",
        color: "$title",
    }
})

export const Notification = styled('div', {
    padding: "0.5rem 1rem",
    borderTop: "1px solid $text",

    header: {
        display: "grid",
        gridTemplateColumns: "1rem 1fr",
        alignItems: "center",
        gap: "1rem",
    }
})