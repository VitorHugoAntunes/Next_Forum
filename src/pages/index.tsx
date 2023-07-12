import "@/styles/globals"
import HomePage from "./home"
import MainContainer from "@/components/MainContainer"
import { ThemeProvider } from "@/contexts/ThemeContext"

export default function Main() {
  return (
    <MainContainer component={<HomePage />} />
  )
}
