import HeroSection from "@/components/(common)/overview-page/HeroSection";
import OverviewSection from "@/components/(common)/overview-page/OverviewSection";
import WhyUseSection from "@/components/(common)/overview-page/WhyUseSection";
import Header from "@/components/partials/Header";
import Header2 from "@/components/partials/Header2";
import { useEffect, useRef, useState } from "react";

const OverviewPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <main>
      <Header />
      <section ref={heroRef} className="dark bg-background text-foreground">
        <HeroSection isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>
      <div className="light bg-card text-card-foreground">
        <Header2 heroHeight={heroHeight} setShowModal={setIsOpen} />
        <section id="overview-panel">
          <OverviewSection />
        </section>
        <section>
          <WhyUseSection />
        </section>
      </div>
    </main>
  );
};

export default OverviewPage;
