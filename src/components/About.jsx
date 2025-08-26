import AboutHeroSection from "./AboutHeroSection";
import AboutIntroSection from "./AboutIntroSection";
import ClientsSection from "./ClientsSection";
import ContactBanner from "./ContactBanner";
import StatsSection from "./StatsSection";
import TimelineHistory from "./TimelineHistory";

function About() {
  return (
    <div>
      <AboutHeroSection />
      <AboutIntroSection />
      <TimelineHistory />
      <StatsSection />
      <ClientsSection />
      <ContactBanner />
      {/* more sections as needed */}
    </div>
  );
}

export default About;
