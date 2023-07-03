import "@/styles/globals"
import HomePage from "./home"
import MainContainer from "@/components/MainContainer"

export default function Main() {
  return (
    <MainContainer component={<HomePage />} />
  )
}
