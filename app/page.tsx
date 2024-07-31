import Hero from "@/components/marketing/Hero";
import MarketingNav from "@/components/marketing/MarketingNav";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-background text-text min-h-screen">
      <div>
        <MarketingNav />
      </div>
      <div>
        <Hero />
      </div>
    </main>
  );
}
