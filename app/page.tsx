import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Items } from "@/components/items";
import { Logo } from "@/components/logos";
export default function Home() {
  return (
    <main className="h-full w-screen overflow-hidden bg-onyx-950">
      <Header />
      <Hero />
      <Logo />
      <Items />
      <Footer />
    </main>
  );
}
