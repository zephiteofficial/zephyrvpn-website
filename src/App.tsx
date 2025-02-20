import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Nav from './components/nav';
import About from './pages/about';
import Plans from './pages/plans';
import Contact from './pages/contact';



function App() {
  return (
    <div className='h-screen overflow-x-hidden flex flex-col bg-background'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/*<Footer />*/}
    </div>
  )
}
export default App;