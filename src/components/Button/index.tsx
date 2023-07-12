import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    category: 'cancel' | 'confirm' | 'neutral';
    children: ReactNode;
}

export default function ButtonComponent({ category, children, ...rest }: ButtonProps) {
    return (
        <ButtonContainer className={category} {...rest}>
            {children}
        </ButtonContainer>
    )
}