import { ThreePillars } from "@/components/ThreePillars";
import {
  WhoWeAreHero,
  WhoWeAreVideo,
  WhoWeAreSymbolism,
  WhoWeArePrinciples,
  LeadershipTabs,
  PhilosophyAsLife,
  FoundationInfo,
} from "@/components/who-we-are";

export const WhoWeAre = () => {
  return (
    <>
      {/* Hero Banner */}
      <WhoWeAreHero />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
            
            {/* Video Section */}
            <WhoWeAreVideo />

            {/* Symbolism */}
            <WhoWeAreSymbolism />

            {/* Principles */}
            <WhoWeArePrinciples />

            {/* Leadership Tabs */}
            <LeadershipTabs />

            {/* Philosophy as way of life */}
            <PhilosophyAsLife />

            {/* Foundation & Organization */}
            <FoundationInfo />
          </div>
        </div>
      </section>

      {/* Three Pillars / Areas de Acción */}
      <ThreePillars />
    </>
  );
};
