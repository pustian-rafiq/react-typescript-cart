import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import Navmenu from "./components/Navmenu";

function App() {
  return (
    <>
      <Navmenu />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
