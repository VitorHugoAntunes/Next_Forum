import Menu from "@/components/Menu";
import SideBar from "@/components/SideBar";
import TopicModal from "@/components/TopicModal";
import TopicSection from "@/components/TopicSession";
import { HomeContainer } from "@/styles/pages/home";

export default function Home() {
    return (
        <>
            <HomeContainer>
                <Menu />
                <TopicSection />
                <SideBar />
            </HomeContainer>
        </>
    )
}