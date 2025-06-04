import { ThemeProvider } from "@/context/ThemeContext";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import  HomePage  from "@/pages/HomePage";
import AboutMePage  from "@/pages/AboutMePage";
import PortfolioPage  from "@/pages/PortfolioPage";
import ContactPage from "@/pages/ContactPage";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <ThemeProvider>
        <AnimatedBackground />
        <Navbar/>
        <HomePage/>
        <AboutMePage/>
        <PortfolioPage/>
        <ContactPage/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}
