import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Nav from './components/nav';
import Plans from './pages/plans';
import Contact from './pages/contact';
import Footer from "./components/footer";


function App() {
  return (
    <div className="bg-background">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className="mt-24">
            <Footer />
          </div>
    </div>
    
  )
}
export default App;

