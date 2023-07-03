import { styled } from "@stitches/react";
import Link from "next/link";

export const CategoryTagLink = styled(Link, {
    textDecoration: "none",
    color: "$input",
    fontWeight: 500,
    padding: "0.2rem 1rem",
    borderRadius: "4px",
    transition: "0.2s",

    "&:hover": {
        opacity: "0.8"
    }
})