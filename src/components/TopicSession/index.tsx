import { TopicSectionContainer } from "./styles";
import Topic from "./Topic";

import { topicsData } from '../../data/topics'
import Link from "next/link";

export default function TopicSection() {
    return (
        <TopicSectionContainer>
            {topicsData.map((topic) => (
                <Link href={`/topic/${topic.id}`} key={topic.id} className={"topicLink"}>
                    <Topic
                        type={"topic"}
                        topicId={topic.id}
                        title={topic.title}
                        content={topic.content}
                        author={topic.author}
                        categoryId={topic.categoryId}
                        votes={topic.votes}
                        totalComments={topic.totalComments}
                        hasComments={false}
                        hasForm={false}
                    />
                </Link>
            ))}
        </TopicSectionContainer>
    )
}