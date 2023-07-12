import Menu from "@/components/Menu";
import SideBar from "@/components/SideBar";
import { topicsData } from "@/data/topics";
import { TopicPageContainer } from "@/styles/pages/topic";
import Topic from "../Topic";

interface MainTopicProps {
    topicId: string,
}

export default function MainTopic({ topicId }: MainTopicProps) {
    const mainTopic = topicsData.find((topic) => topic.id === topicId)

    return (
        <TopicPageContainer>
            <Menu />
            <Topic
                className={"mainTopic"}
                key={mainTopic!.id}
                type={"topic"}
                topicId={mainTopic!.id}
                title={mainTopic!.title}
                content={mainTopic!.content}
                author={mainTopic!.author}
                categoryId={mainTopic!.categoryId}
                votes={mainTopic!.votes}
                totalComments={mainTopic!.totalComments}
                hasComments={true}
                hasForm={true}
            />
            <SideBar />
        </TopicPageContainer>
    )
}