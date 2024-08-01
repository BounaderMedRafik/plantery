import Hero from "@/components/marketing/Hero";
import MarketingNav from "@/components/marketing/MarketingNav";
import OurServices from "@/components/marketing/OurServices";

export default function Home() {
  return (
    <main className="  min-h-screen">
      <div>
        <MarketingNav />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <OurServices />
      </div>
    </main>
  );
}
