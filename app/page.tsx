
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Header";
import { Team } from "@/components/Team";
import Panels from "@/components/Features";

export default function Home() {
  return (
    <main className="">
        <Navbar />
      <Hero />
      <About />
      <Panels/>
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}