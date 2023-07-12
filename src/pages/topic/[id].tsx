import MainContainer from "@/components/MainContainer";
import TopicModal from "@/components/TopicModal";
import MainTopic from "@/components/TopicSession/MainTopic";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useRouter } from "next/router"

export default function TopicPage() {
    const router = useRouter();
    const { id } = router.query;
    const topicId = typeof id === 'string' ? parseInt(id) : undefined;

    if (typeof topicId === 'undefined') {
        // Tratar quando topicId for undefined, por exemplo, redirecionar para uma página de erro ou exibir uma mensagem de erro.
        return <div>Erro ao carregar o tópico.</div>;
    }

    return (
        <MainContainer component={<MainTopic topicId={topicId!} />} />
    )
}