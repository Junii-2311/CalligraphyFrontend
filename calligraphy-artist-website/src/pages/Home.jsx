import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutIntro from "../components/AboutIntro";
import PortfolioCarousel from "../components/PortfolioCarousel";
import ArtworkGrid from "../components/ArtWorkGrid";
import ArtworkCarousel from "../components/ArtworkCarousel";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden"> {/* Bootstrap utility class */}
      <Header />
      <Hero />
      <ArtworkGrid />
      <ArtworkCarousel />
      <AboutIntro />
      <PortfolioCarousel />
      <Footer />
    </div>
  );
};

export default Home;