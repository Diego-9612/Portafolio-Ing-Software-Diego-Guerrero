import { ThemeProvider } from "@/context/ThemeContext";
import { DarkModeButton } from "@/components/DarkModeButton";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/pages/HomePage";
import { AboutMePage } from "@/pages/AboutMePage";
export default function Home() {
  return (
    <>
      <ThemeProvider>
        <AnimatedBackground />
        <Navbar/>
        <HomePage/>
        <AboutMePage/>
        
      </ThemeProvider>
    </>
  );
}
