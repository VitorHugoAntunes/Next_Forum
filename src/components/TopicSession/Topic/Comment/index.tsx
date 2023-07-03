import { TopicContainer, VotesDiv, TopicContent } from "../styles";

import { FaArrowUp, FaArrowDown, FaCommentAlt } from 'react-icons/fa'
import Image from "next/image";
import CommentActions from "./commentActions";
import Link from "next/link";
import CommentForm from "./commentForm";

interface CommentProps {
    topicId: number,
    commentId: number,
    content: string,
    author: string,
    votes: number,
    type: "topic" | "comment",
}

export default function Comment({ topicId, commentId, content, author, votes, type }: CommentProps) {
    return (
        <TopicContainer className={type === 'comment' ? 'comment' : 'topic'}>
            <VotesDiv>
                <FaArrowUp size={20} />
                <span>{votes}</span>
                <FaArrowDown size={20} />
            </VotesDiv>
            <div>
                <TopicContent className="commentContent">
                    <div>
                        <div>
                            <Link href={"/"}>
                                <Image
                                    src={"https://avatars.githubusercontent.com/u/51717305?s=400&v=4"}
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                                <h4>{author}</h4>
                            </Link>
                        </div>
                        <span>
                            <i>12h ago</i>
                        </span>
                    </div>
                    <p>
                        {content}
                    </p>
                </TopicContent>

                <CommentActions />
            </div>

        </TopicContainer>
    )
}