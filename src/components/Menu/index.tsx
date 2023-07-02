import { useState } from 'react'
import Link from "next/link";
import { FaStream, FaHome, FaCompass, FaQuestion, FaCommentAlt } from "react-icons/fa";
import { MenuContainer } from "./styles";

export default function Menu() {
    const [currentTab, setCurrentTab] = useState(1);

    function changeCurrentTab(id: number) {
        setCurrentTab(id)
    }

    return (
        <MenuContainer>
            <div>
                <FaStream size={18} />
                <span>Menu</span>
            </div>

            <Link
                href={""}
                className={currentTab == 1 ? "active" : ""}
                id='1'
                onClick={() => changeCurrentTab(1)}
            >
                <FaHome size={18} />
                <span>Home</span>
            </Link>
            <Link
                href={""}
                className={currentTab == 2 ? "active" : ""}
                id='2'
                onClick={() => changeCurrentTab(2)}
            >
                <FaCompass size={18} />
                <span>Explore topics</span>
            </Link>
            <Link
                href={""}
                className={currentTab == 3 ? "active" : ""}
                id='3'
                onClick={() => changeCurrentTab(3)}
            >
                <FaQuestion size={18} />
                <span>My topics</span>
            </Link>
            <Link
                href={""}
                className={currentTab == 4 ? "active" : ""}
                id='4'
                onClick={() => changeCurrentTab(4)}
            >
                <FaCommentAlt size={18} />
                <span>My answers</span>
            </Link>
        </MenuContainer>
    )
}