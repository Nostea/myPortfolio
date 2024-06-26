import AboutMeSection from "../components/AboutMeSection.jsx";
import HeaderGreetingSection from "../components/HeaderGreetingSection.jsx";
import TechstackSection from "../components/TechstackSection.jsx";
import WorkSection from "../components/WorkSection.jsx";
import ContactSectionSplit from "../components/ContactSectionSplit";

const Home = () => {
  return (
    <div>
      <HeaderGreetingSection />
      <AboutMeSection />
      <WorkSection />
      <TechstackSection />
      <ContactSectionSplit />
    </div>
  );
};

export default Home;
