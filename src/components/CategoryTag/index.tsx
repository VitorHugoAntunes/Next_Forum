import { CategoryTagLink } from "./styles";

// Para o componente ter todas as propriedades do elemento <a> do HTML
interface CategoryTagProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string,
    color: string,
}

export default function CategoryTag({ title, color }: CategoryTagProps) {
    return (
        <CategoryTagLink href={"/"} style={{ background: `${color}` }} >
            {title}
        </CategoryTagLink>
    )
}