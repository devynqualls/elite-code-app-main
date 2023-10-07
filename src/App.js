import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import About from "./components/About";
import AboutUs2 from "./components/AboutUs2";
import Banner from "./components/Banner";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import GetStartedSection from "./components/GetStartedSection";
import Header from "./components/Header";
import Introducing from "./components/Introducing";
function App() {
	return (
		<>
			<Header />
			<Banner />
			<About />
			<Introducing />
			<GetStartedSection />
			<AboutUs2 />
			<Faqs />
			<Contact />
			<CTA />
			<Footer />
		</>
	);
}

export default App;
