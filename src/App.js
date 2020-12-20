import "./App.css";
import Header from "./containers/Header";
import Features from "./containers/Features";
import Services from "./containers/Services";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import MyMap from "./containers/MyMap";

function App() {
  return (
    <div>
      <Header />
      <Features />
      <Services />
      <Contact />
      <MyMap/>
      <Footer />
    </div>
  );
}

export default App;
