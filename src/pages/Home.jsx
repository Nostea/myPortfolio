import HeaderGreetingSection from "../components/HeaderGreetingSection.jsx";
import TechstackSection from "../components/TechstackSection.jsx";
import WorkSection from "../components/WorkSection.jsx";
import ContactSectionSplit from "../components/ContactSectionSplit";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <HeaderGreetingSection />
      <WorkSection />
      <TechstackSection />
      <Footer />
    </div>
  );
};

export default Home;
