import { LoadingDiv, TopicSectionContainer } from "./styles";
import Topic from "./Topic";

import { topicsData } from '../../data/topics'
import Link from "next/link";
import { useEffect, useState } from "react";

import { FaCircleNotch } from 'react-icons/fa'

export default function TopicSection() {
    const [topicHasLoad, setTopicHasLoad] = useState(false);

    useEffect(() => {
        setTopicHasLoad(true);
    }, [])

    return topicHasLoad === false ? (
        <LoadingDiv>
            <FaCircleNotch size={24} />
            <span>Loading topics</span>
        </LoadingDiv>
    ) : (
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