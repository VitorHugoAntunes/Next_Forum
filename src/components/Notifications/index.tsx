import { FaCommentAlt } from "react-icons/fa";
import { Notification, NotificationsContainer } from "./styles";

interface NotificationProps {
    id: number;
    author: string;
    topicTitle: string;
}

export default function Notifications() {
    const notificationsExample: NotificationProps[] = [
        {
            id: 1,
            author: "Vitor Hugo",
            topicTitle: "JS Course",
        },
        {
            id: 2,
            author: "Norton Glaser",
            topicTitle: "Java Fundamentals",
        },
        {
            id: 3,
            author: "Ana Paula Tiessi",
            topicTitle: "Operational Systems",
        }
    ]

    return (
        <NotificationsContainer className="notificationContainer">
            <h3>Notifications</h3>
            {notificationsExample.map((notification) => (
                <Notification key={notification.id}>
                    <header>
                        <FaCommentAlt size={20} />
                        <p>{notification.author} commented on your topic <strong>{notification.topicTitle}</strong></p>
                    </header>
                </Notification>
            ))}
        </NotificationsContainer>
    )
}