import { ThemeContext } from "@/contexts/ThemeContext";
import { TopicModalContext } from "@/contexts/TopicModalContext";
import { darkTheme, lightTheme } from "@/styles/styles";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaAt, FaSearch, FaMoon, FaBell, FaUser, FaSun } from 'react-icons/fa'
import Notifications from "../Notifications";
import TopicModal from "../TopicModal";

import { HeaderActions, HeaderContainer, SearchBar } from './styles'

export default function Header() {
    const { changeThemeStatus, theme } = useContext(ThemeContext);
    const { isModalOpen } = useContext(TopicModalContext);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);

    // Funcao que altera se o container de notificacoes esta aberto ou fechado
    function changeNotificationsDivStatus() {
        isNotificationsOpen === true ? setIsNotificationsOpen(false) : setIsNotificationsOpen(true);
    }

    useEffect(() => {
        theme === lightTheme.className ?
            document.body.style.backgroundColor = lightTheme.colors.background.value :
            document.body.style.backgroundColor = darkTheme.colors.background.value
    }, [theme]);

    return (
        <HeaderContainer
            className={theme === lightTheme.className ? lightTheme.className : darkTheme.className}
            style={isModalOpen ? { zIndex: 0 } : {}}
        >
            <div className="headerNavigation">
                <Link href={"/"}>
                    <FaAt size={24} className="logo" />
                </Link>

                <SearchBar>
                    <FaSearch size={18} />
                    <input type="text" name="" id="" placeholder="search" />
                </SearchBar>

                <HeaderActions>
                    <button
                        title="Switch theme"
                        onClick={changeThemeStatus}
                    >
                        {theme === 'lightTheme' ? (
                            <FaMoon size={18} />
                        ) : (
                            <FaSun size={18} />
                        )}
                    </button>
                    <button
                        title="Notifications"
                        className={isNotificationsOpen ? "active" : ""}
                        onClick={changeNotificationsDivStatus}
                    >
                        <FaBell size={18} />
                    </button>

                    {isNotificationsOpen && (
                        <Notifications />
                    )}

                    <div>
                        <button>
                            <FaUser size={18} />
                        </button>
                    </div>
                </HeaderActions>
            </div>
        </HeaderContainer>
    )
}