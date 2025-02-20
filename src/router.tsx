
import Home from './pages/home';
import Nav from './components/nav';

function App() {
  return (
    <div className='bg-background bg-flex w-screen h-screen'>
      {/* Top Navigation Bar */}
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
