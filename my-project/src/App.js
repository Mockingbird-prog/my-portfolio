import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
export default function App() {
  return (
    <>
 <SocialLinks/>
    <NavBar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contacts/>
    </>
  )
}