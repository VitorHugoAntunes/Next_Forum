import Menu from "@/components/Menu";
import SideBar from "@/components/SideBar";
import { topicsData } from "@/data/topics";
import { TopicPageContainer } from "@/styles/pages/topic";
import Topic from "../Topic";

interface MainTopicProps {
    topicId: number,
}

export default function MainTopic({ topicId }: MainTopicProps) {
    return (
        <TopicPageContainer>
            <Menu />
            <Topic
                className={"mainTopic"}
                key={topicsData[topicId! - 1].id}
                type={"topic"}
                topicId={topicsData[topicId! - 1].id}
                title={topicsData[topicId! - 1].title}
                content={topicsData[topicId! - 1].content}
                author={topicsData[topicId! - 1].author}
                categoryId={topicsData[topicId! - 1].categoryId}
                votes={topicsData[topicId! - 1].votes}
                totalComments={topicsData[topicId! - 1].totalComments}
                hasComments={true}
                hasForm={true}
            />
            <SideBar />
        </TopicPageContainer>
    )
}