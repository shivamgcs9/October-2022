import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonials from "../../components/testimonials/Testimonials";
import Works from "../../components/works/Works";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
