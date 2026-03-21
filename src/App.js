import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';

/* componentes */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import SeoSchema from './components/SeoSchema';

/* pages */
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen flex flex-col">
          <Router>
            <SeoSchema />

            {/* Skip to content — acessibilidade */}
            <a
              href="#inicio"
              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
            >
              Pular para o conteúdo
            </a>

            <Navbar />

            <div className="flex-grow bg-white dark:bg-primary mt-16">
              <Container>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Container>
            </div>

            <Footer />
          </Router>
        </div>
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;
