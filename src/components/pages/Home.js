import { useEffect } from "react";
import { motion } from "framer-motion";
import minhaFoto from "../../assets/img/undraw_programming_j1zw.png";
import curriculoPDF from "../../assets/curriculo/francisco_leocassio.pdf";
import { Github, Linkedin, Instagram } from "lucide-react";
import ThemeToggle from "../../components/ThemeToggle";

function Home() {

  useEffect(() => {
    document.title = "Home | Meu Portfólio";
  }, []);

  function handleDownload() {
    const link = document.createElement('a');
    link.href = curriculoPDF;
    link.download = 'seu-curriculo.pdf';
    link.click();
  }

  return (
  <div className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-20 min-h-[80vh]">
    <div className="absolute top-5 right-5">
      <ThemeToggle />
    </div>
    {/* CONTAINER DO TEXTO */}
    <div className="md:w-1/2 flex justify-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bem-vindo ao meu Portfólio
        </h1>

        <p className="text-lg max-w-xl mb-6">
          Olá! Meu nome é <strong>Leocassio</strong>.  
          Sou desenvolvedor backend especializado em <strong>Django/Python</strong> e <strong>Node.js</strong>, com foco em criar aplicações modernas, rápidas e responsivas.  
          Aqui você encontra meus projetos, habilidades e formas de contato.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Baixar Currículo</span>
          </motion.button>
          <a href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Github size={30} />
          </a>
          <a href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
          <Linkedin size={30} />
          </a>
          <a href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
          <Instagram size={30} />
          </a>
        </div>
        
      </motion.div>
    </div>

    {/* CONTAINER DA IMAGEM */}
    <div className="md:w-1/3 flex justify-center">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={minhaFoto}
          alt="Foto de Leocassio"
        className="transition-transform duration-300 hover:scale-110"/>
      </motion.div>
    </div>

  </div>

  );
}

export default Home;
