import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* componentes*/
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';


/* pages*/ 
import Home from './components/pages/Home';
// import Home from './components/pages/Home';

function App() {
  return (
    <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
    </Router>
  );
}

export default App;

