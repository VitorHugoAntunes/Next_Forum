import Menu from "@/components/Menu";
import TopicSection from "@/components/TopicSession";
import { HomeContainer } from "@/styles/pages/home";

export default function Home() {
    return (
        <HomeContainer>
            <Menu />
            <TopicSection />
            <div>a</div>
        </HomeContainer>
    )
}