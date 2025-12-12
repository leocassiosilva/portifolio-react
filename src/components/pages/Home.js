import { useEffect } from "react";
import { motion } from "framer-motion";
import minhaFoto from "../../assets/img/Programming-rafiki.png";
import curriculoPDF from "../../assets/curriculo/francisco_leocassio.pdf";
import { Github, Linkedin, Instagram } from "lucide-react"; 
import { DiJava } from "react-icons/di"; // Java
import { SiDjango, SiJavascript, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiHtml5, SiCss3, SiMongodb, SiMysql } from "react-icons/si";
import ArtigoCard from "../layout/ArtigoCard";
import SectionDivider from "../layout/SectionDivider";
import ExperienciaCard from "../layout/ExperienciaCard";
function Home() {

  const tecnologiasPassadas = [
    { name: "Java", icon: <DiJava /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Node", icon: <SiNodedotjs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Python", icon: <SiPython /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Mongoose", icon: <SiMongodb /> },
  ];


  const experiencias = [
    {
      empresa: "Novadata",
      cargo: "Desenvolvedor Backend (Python | Django)",
      periodo: "Set 2023 – Out 2025",
      atividades: [
        "Desenvolvimento e manutenção de aplicações web",
        "Criação e integração de APIs RESTful",
        "Automação e Web Scraping com Selenium WebDriver",
        "Modelagem e consultas em PostgreSQL/SQL",
        "Controle de versão com Git/GitHub",
        "Participação em reuniões Scrum"
      ]
    },
    {
      empresa: "Novadata",
      cargo: "Estagiário Backend (Python | Django)",
      periodo: "Jun 2022 – Set 2023",
      atividades: [
        "Apoio no desenvolvimento de aplicações web",
        "Implementação de APIs REST",
        "Criação de rotinas de Web Scraping",
        "Versionamento com Git/GitHub"
      ]
    },
    {
      empresa: "NADIC",
      cargo: "Desenvolvedor Full Stack Web",
      periodo: "Nov 2020 – Jun 2022",
      atividades: [
        "Desenvolvimento com Python/Django",
        "Desenvolvimento de Web Scraping",
        "Criação de API com Django Rest Framework"
      ]
    }
  ];



  useEffect(() => {
    document.title = "Home | Meu Portfólio";
  }, []);

  function handleDownload() {
    const link = document.createElement("a");
    link.href = curriculoPDF;
    link.download = "francisco_leocassio.pdf";
    link.click();
  }

  return (
    <div className="w-full">

      {/* ============================
          SEÇÃO 1 — APRESENTAÇÃO
      ============================ */}
      <section
        id="inicio"
        className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-8 min-h-[80vh]"
      >
        
        {/* TEXTO */}
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
              Sou desenvolvedor backend especializado em <strong>Django/Python</strong> e <strong>Node.js</strong>,
              criando aplicações modernas e eficientes.  
              Aqui você encontra meus projetos, habilidades e formas de contato.
            </p>

            {/* BOTÕES E ÍCONES */}
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

              <a href="https://github.com/leocassiosilva" className="hover:scale-110 transition-transform">
                <Github size={30} />
              </a>

              <a href="https://www.linkedin.com/in/leocassio-silva/" className="hover:scale-110 transition-transform">
                <Linkedin size={30} />
              </a>
            </div>

          </motion.div>
        </div>

        {/* IMAGEM */}
        <div className="md:w-1/3 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={minhaFoto}
              alt="Ilustração Programação"
              className="transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        </div>
      </section>

      <SectionDivider />  
      
      {/* ============================
          SEÇÃO 2 — SOBRE MIM
      ============================ */}
      <section
        id="sobre"
        className="flex flex-col justify-center px-10 py-10 max-w-4xl mx-auto"
      >
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
          <h1 className="text-3xl font-bold mb-6 text-center">Sobre Mim</h1>

          <p className="text-lg mb-4 leading-relaxed">
            Sou desenvolvedor com foco em <strong>Python e Django</strong>, especializado na criação
            de APIs REST, automação de processos e backends escaláveis. Também trabalho com Selenium
            e web scraping, criando soluções eficientes e inteligentes.
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            Atualmente estou me aprofundando em tecnologias <strong>JavaScript</strong>, como 
            <strong> Node.js, React.js e React Native</strong>, para expandir minhas habilidades e
            complementar meu trabalho principal no backend.
          </p>

          <p className="text-lg leading-relaxed">
            Sou formado em <strong>Licenciatura em Computação</strong> e também em
            <strong> Análise e Desenvolvimento de Sistemas</strong>. 
            Gosto de desenvolver soluções completas — da lógica ao código final — buscando clareza,
            qualidade e impacto real.
          </p>
        </motion.div>
      </section>

      <SectionDivider />


      {/* ============================ Tecnologias =========================== */}
      <section
        id="tecnologias"
        className="flex flex-col justify-center px-10 py-10 max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
        <h2 className="text-3xl font-bold mb-8 text-center">Tecnologias</h2>
        
        <div className="flex flex-wrap gap-3">
          {tecnologiasPassadas.map((tech, index) => (
            <span key={index} className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
              {tech.icon} {tech.name}
            </span>
          ))}
        </div>
        </motion.div>
      </section>

      <SectionDivider />  

      <section id="artigos" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Produção Acadêmica 
          </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              <ArtigoCard
                titulo="A MÁQUINA E AS RELAÇÕES LÍQUIDAS EM “HER”"
                evento="EXPOSIÇÃO CIENTÍFICA,TECNOLÓGICAECULTURAL(EXPOTEC) - 2018"
                link="https://memoria.ifrn.edu.br/bitstream/handle/1044/1808/ANAIS%20-%20Expotec%20Pau%20dos%20ferros%202018%20-%20baixares%20%281%29.pdf?sequence=1&isAllowed=y"
              />


              <ArtigoCard
                titulo="Análise das dificuldades na aprendizagem de programação no curso de análise e desenvolvimento de sistemas do IFRN/Pau dos Ferros"
                evento="Anais do XIV Encontro Unificado de Computação do Piauí e XI Simpósio de Sistemas de Informação do Piauí (ENUCOMPI 2021)"
                link="https://doi.org/10.5753/enucompi.2021.17752"
              />
              <ArtigoCard
                titulo="Bewell: Protótipo mobile para auxiliar pessoas em crises de ansiedade"
                evento="Anais do VI Encontro de Computação do Oeste Potiguar (ECOP 2022)"
                link="https://periodicos.ufersa.edu.br/index.php/ecop/article/view/11829/11170"
              />
              <ArtigoCard
                titulo="Ampliando as Oportunidades por Meio do Desenvolvimento de Competências Técnicas Com Programação Aplicada: Um relato de Experiência"
                evento="Anais do VI Encontro de Computação do Oeste Potiguar (ECOP 2022)"
                link="https://periodicos.ufersa.edu.br/index.php/ecop/article/view/11824/11164"
              />

              <ArtigoCard
                titulo="Mineração de Texto para extrair informações de certidões federais e estaduais solicitadas em processos licitatórios"
                evento="Anais do VI Encontro de Computação do Oeste Potiguar (ECOP 2022)"
                link="https://periodicos.ufersa.edu.br/index.php/ecop/article/view/11845/11163"
              />

              <ArtigoCard
                titulo="MONEMOTION: UMA PROPOSTA DE UMA PLATAFORMA WEB PARA O MONITORAMENTO DE EMOÇÕES"
                evento="Anais do VI Encontro de Computação do Oeste Potiguar (ECOP 2023)"
                link="https://revistacaatinga.com.br/index.php/ecop/article/view/12218/11390"
              />
              <ArtigoCard
                titulo="NossaVaga: Proposta de uma Plataforma Web para divulgação de vagas de estágios e empregos"
                evento="Anais do VI Encontro de Computação do Oeste Potiguar (ECOP 2023)"
                link="https://periodicos.ufersa.edu.br/index.php/ecop/article/view/12219/11389"
              />

            </div>
            </motion.div>
      </section>

      <SectionDivider />  

    {/* ============================EXPERIÊNCIA PROFISSIONAL =========================== */}
      <section id="experiencia" className="max-w-6xl mx-auto px-4 py-16">
        
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
          <h2 className="text-3xl font-bold text-center mb-8">Experiência Profissional</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiencias.map((exp, index) => (
            <ExperienciaCard
              key={index}
              empresa={exp.empresa}
              cargo={exp.cargo}
              periodo={exp.periodo}
              atividades={exp.atividades}
            />
          ))}
        </div>
        </motion.div>
      </section>
      <SectionDivider /> 
    </div>
  );
}

export default Home;
