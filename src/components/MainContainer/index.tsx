import { ThemeContext } from "@/contexts/ThemeContext"
import { darkTheme, lightTheme } from "@/styles/styles"
import { ReactNode, useContext } from "react"
import Menu from "../Menu";
import SideBar from "../SideBar";
import { MainContainerDiv } from "./styles"

interface MainContainerProps {
    component: ReactNode;
}

export default function MainContainer({ component }: MainContainerProps) {
    const { theme } = useContext(ThemeContext)
    return (
        <MainContainerDiv className={theme === lightTheme.className ? lightTheme.className : darkTheme.className}>
            {component}
        </MainContainerDiv>
    )
}