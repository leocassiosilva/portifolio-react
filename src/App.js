import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* componentes */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

/* pages */
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
function App() {
  return (
    <div className="min-h-screen flex flex-col">   
      <Router>
        <Navbar />

        <div className="flex-grow bg-white dark:bg-primary mt-16">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </Container>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
