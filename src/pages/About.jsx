import AboutHeroSection from "../components/AboutHeroSection";
import AboutIntroSection from "../components/AboutIntroSection";
import ClientsSection from "../components/ClientsSection";
import ContactBanner from "../components/ContactBanner";
import StatsSection from "../components/StatsSection";
import TimelineHistory from "../components/TimelineHistory";

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
