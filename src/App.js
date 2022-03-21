import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { Herosection } from "./components/Herosection";
import Infosection from "./components/Infosection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Herosection />
            <Infosection />
            <Testimonials />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;
