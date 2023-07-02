import { MainContainer } from "@/styles/globals"
import "@/styles/globals"
import { lightTheme, darkTheme } from "@/styles/styles"
import { useContext } from "react"
import { ThemeContext } from "@/contexts/ThemeContext"
import Home from "./home"

export default function Main() {
  const { theme } = useContext(ThemeContext)
  return (
    <MainContainer className={theme === lightTheme.className ? lightTheme.className : darkTheme.className}>
      <Home />
    </MainContainer>
  )
}
