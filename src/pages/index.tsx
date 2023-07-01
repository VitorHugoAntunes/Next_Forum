import { MainContainer } from "@/styles/globals"
import "@/styles/globals"
import { lightTheme, darkTheme } from "@/styles/styles"
import { useContext } from "react"
import { ThemeContext } from "@/contexts/ThemeContext"

export default function Home() {
  const { theme } = useContext(ThemeContext)
  return (
    <MainContainer className={theme === lightTheme.className ? lightTheme.className : darkTheme.className}>
      <h1>Hello, forum</h1>
    </MainContainer>
  )
}
