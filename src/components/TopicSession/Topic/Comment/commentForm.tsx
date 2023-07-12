import { CommentFormContainer } from "./styles";
import { TbSend } from 'react-icons/tb'
import ButtonComponent from "@/components/Button";

export default function CommentForm() {
    return (
        <CommentFormContainer>
            <input type="text" name="" id="" placeholder="reply..." />
            <ButtonComponent category={"cancel"}>
                Cancelar
            </ButtonComponent>
            <ButtonComponent category={"confirm"} type="submit">
                <TbSend size={18} />
                Enviar
            </ButtonComponent>
        </CommentFormContainer>
    )
}