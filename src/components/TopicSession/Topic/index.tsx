import { TopicContainer, TopicInfo, VotesDiv, TopicContent, CommentSection } from "./styles";

import { FaArrowUp, FaArrowDown, FaCommentAlt } from 'react-icons/fa'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CategoryTag from "@/components/CategoryTag";

import { categoriesData } from '../../../data/categories'
import { topicsData } from "@/data/topics";
import Comment from "./Comment";
import { HTMLAttributes } from "react";
import CommentActions from "./Comment/commentActions";
import CommentForm from "./Comment/commentForm";

interface TopicProps extends HTMLAttributes<HTMLDivElement> {
    topicId: string,
    title: string,
    content: string,
    categoryId: number,
    totalComments: number,
    author: string,
    votes: number,
    hasComments: boolean,
    hasForm: boolean,
    type: "topic" | "comment",
}

export default function Topic({ topicId, type, title, content, categoryId, totalComments, author, votes, hasComments, hasForm, ...rest }: TopicProps) {
    const router = useRouter();
    const currentTopic = topicsData.find((topic) => topic.id === topicId)

    return (
        <TopicContainer className={type === 'comment' ? 'comment' : 'topic'} {...rest}>
            <VotesDiv>
                <FaArrowUp size={20} />
                <span>{votes}</span>
                <FaArrowDown size={20} />
            </VotesDiv>
            <div>
                <TopicContent>
                    <div>
                        <h2>{title}</h2>
                        <CategoryTag title={categoriesData[categoryId! - 1].title} color={categoriesData[categoryId! - 1].color} />
                    </div>
                    <p>
                        {content}
                    </p>
                </TopicContent>

                <TopicInfo>
                    <div>
                        <Image
                            src={"https://avatars.githubusercontent.com/u/51717305?s=400&v=4"}
                            alt=""
                            width={20}
                            height={20}
                        />
                        <p>Postado por <Link href={"/"}>{author}</Link> <span><i>12h ago</i></span></p>
                    </div>

                    <div>
                        <FaCommentAlt size={18} />
                        <span>{totalComments}+</span>
                    </div>
                </TopicInfo>

                <CommentActions />

                {hasForm && (
                    <CommentForm />
                )}

                {hasComments === true && (
                    <CommentSection>
                        {currentTopic!.comments.map((comment) => (
                            <Comment
                                key={comment.id}
                                type={"comment"}
                                commentId={comment.id}
                                topicId={currentTopic!.id}
                                author={comment.author}
                                content={comment.content}
                                votes={comment.votes}
                            />
                        ))}
                    </CommentSection>
                )}
            </div>

        </TopicContainer>
    )
}