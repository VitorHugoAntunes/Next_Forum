import { ThemeContext } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/styles";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { FaAt, FaSearch, FaMoon, FaBell, FaUser } from 'react-icons/fa'

import { HeaderActions, HeaderContainer, SearchBar } from './styles'

export default function Header() {
    const { changeThemeStatus, theme } = useContext(ThemeContext);

    useEffect(() => {
        theme === lightTheme.className ?
            document.body.style.backgroundColor = lightTheme.colors.background.value :
            document.body.style.backgroundColor = darkTheme.colors.background.value
    }, [theme]);

    return (
        <HeaderContainer className={theme === lightTheme.className ? lightTheme.className : darkTheme.className}>
            <div>
                <Link href={"/"}>
                    <FaAt size={24} className="logo" />
                </Link>

                <SearchBar>
                    <FaSearch size={18} />
                    <input type="text" name="" id="" placeholder="search" />
                </SearchBar>

                <HeaderActions>
                    <button onClick={changeThemeStatus}>
                        <FaMoon size={18} />
                    </button>
                    <button>
                        <FaBell size={18} />
                    </button>


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