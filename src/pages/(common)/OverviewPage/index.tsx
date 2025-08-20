import CapabilitiesSection from "@/components/(common)/overview-page/CapabilitiesSection";
import ExtensionsSection from "@/components/(common)/overview-page/ExtensionsSection";
import HeroSection from "@/components/(common)/overview-page/HeroSection";
import OverviewSection from "@/components/(common)/overview-page/OverviewSection";
import ProjectTypesSection from "@/components/(common)/overview-page/ProjectTypesSection";
import ResourcesSection from "@/components/(common)/overview-page/ResourcesSection";
import WhyUseSection from "@/components/(common)/overview-page/WhyUseSection";
import Footer from "@/components/partials/Footer";
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
        <main>
          <section id="overview-panel">
            <OverviewSection />
          </section>
          <section id="benefits-panel">
            <WhyUseSection />
          </section>
          <section id="project-types-panel">
            <ProjectTypesSection />
          </section>
          <section id="capabilities-panel">
            <CapabilitiesSection />
          </section>
          <section id="extensions-panel">
            <ExtensionsSection />
          </section>
          <section id="resources-panel">
            <ResourcesSection />
          </section>
        </main>
      </div>
      <Footer />
    </main>
  );
};

export default OverviewPage;
