import Banner from "@/components/marketing/Banner";
import Hero from "@/components/marketing/Hero";
import MarketingNav from "@/components/marketing/MarketingNav";
import OurServices from "@/components/marketing/OurServices";
import Portfolio from "@/components/marketing/Portfolio";

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
      <div>
        <Portfolio />
      </div>
      <div>
        <Banner />
      </div>
    </main>
  );
}
