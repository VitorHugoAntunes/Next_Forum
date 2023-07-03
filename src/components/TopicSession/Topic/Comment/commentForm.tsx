import { CommentFormContainer } from "./styles";

import { FaRegTimesCircle } from 'react-icons/fa'
import { TbSend } from 'react-icons/tb'

export default function CommentForm() {
    return (
        <CommentFormContainer>
            <input type="text" name="" id="" placeholder="reply..." />
            <button className="cancel">
                <FaRegTimesCircle size={18} />
                Cancelar
            </button>
            <button className="confirm" type="submit">
                <TbSend size={18} />
                Enviar
            </button>
        </CommentFormContainer>
    )
}