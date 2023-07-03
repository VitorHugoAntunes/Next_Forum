import { ActionButtons } from "./styles";

import { FaShare } from 'react-icons/fa'
import { TbFlag } from 'react-icons/tb'

export default function CommentActions() {
    return (
        <ActionButtons className="actions">
            <button>
                <FaShare size={18} />
                Share
            </button>
            <button>
                <TbFlag size={18} />
                Report
            </button>
        </ActionButtons>
    )
}