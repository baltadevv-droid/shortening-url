import "./App.css";
import Container from "./components/layout/containers/Container";
import Footer from "./components/layout/navigation/Footer";
import Navbar from "./components/layout/navigation/Navbar";
import Section from "./features/cardshortener/components/Section";
import Boost from "./layout/Boost";
import Header from "./layout/Header";

import Search from "./layout/Search";

function App() {
  return (
    <Container className="w-full min-h-screen overflow-x-hidden">
      <div className="">
        <Navbar />
        <Header />
      </div>
      <div className="">
        <Search />
      </div>
      <div>
        <Section />
        <Boost />
        <Footer />
      </div>
    </Container>
  );
}

export default App;
