import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Nav from './components/nav';
import Plans from './pages/plans';
import Footer from "./components/footer";

function App() {
  return (
    <Router> {/* Use HashRouter */}
      <div className="bg-background">
        <Nav />
        <Routes>
          <Route path="/zephyrvpn-website/" element={<Home />} />
          <Route path="/zephyrvpn-website/plans" element={<Plans />} />
        </Routes>
        <div className="mt-24">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
