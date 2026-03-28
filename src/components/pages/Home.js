import { useEffect } from "react";
import { motion } from "framer-motion";
import minhaFoto from "../../assets/img/Programming-rafiki.png";
import curriculoPDF from "../../assets/curriculo/francisco_leocassio.pdf";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { DiJava } from "react-icons/di";
import {
  SiDjango, SiJavascript, SiNodedotjs, SiPostgresql, SiPython,
  SiHtml5, SiCss3, SiMongodb, SiMysql, SiReact, SiGit, SiDocker, SiTailwindcss
} from "react-icons/si";
import ArtigoCard from "../layout/ArtigoCard";
import SectionDivider from "../layout/SectionDivider";
import ExperienciaCard from "../layout/ExperienciaCard";
import ProjetoCard from "../layout/ProjetoCard";

const tecnologias = [
  { name: "Python", icon: <SiPython /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Java", icon: <DiJava /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Docker", icon: <SiDocker /> },
];

const projetos = [
  {
    titulo: "Portfólio Pessoal",
    descricao: "Meu portfólio profissional desenvolvido com React.js e Tailwind CSS, com dark mode, animações e SEO otimizado.",
    tecnologias: ["React", "Tailwind CSS", "Framer Motion"],
    demo: "https://leocassio-silva.vercel.app/",
  },
  {
    titulo: "NossaVaga",
    descricao: "Plataforma web para divulgação de vagas de estágios e empregos, conectando empresas e candidatos.",
    tecnologias: ["Python", "Django", "PostgreSQL"],
  },
  {
    titulo: "MonEmotion",
    descricao: "Plataforma web para monitoramento de emoções, auxiliando no acompanhamento da saúde mental.",
    tecnologias: ["Python", "Django", "JavaScript"],
  },
  {
    titulo: "Bewell",
    descricao: "Protótipo mobile para auxiliar pessoas em crises de ansiedade com técnicas de relaxamento.",
    tecnologias: ["React Native", "Node.js"],
  },
  {
    titulo: "Mineração de Texto",
    descricao: "Sistema de mineração de texto para extrair informações de certidões federais e estaduais em processos licitatórios.",
    tecnologias: ["Python", "Selenium", "NLP"],
  },
  {
    titulo: "Web Scraping Automação",
    descricao: "Soluções de automação e web scraping para coleta e processamento de dados de diversas fontes.",
    tecnologias: ["Python", "Selenium", "Django"],
  },
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
      "Participação em reuniões Scrum",
    ],
  },
  {
    empresa: "Novadata",
    cargo: "Estagiário Backend (Python | Django)",
    periodo: "Jun 2022 – Set 2023",
    atividades: [
      "Apoio no desenvolvimento de aplicações web",
      "Implementação de APIs REST",
      "Criação de rotinas de Web Scraping",
      "Versionamento com Git/GitHub",
    ],
  },
  {
    empresa: "NADIC",
    cargo: "Desenvolvedor Full Stack Web",
    periodo: "Nov 2020 – Jun 2022",
    atividades: [
      "Desenvolvimento com Python/Django",
      "Desenvolvimento de Web Scraping",
      "Criação de API com Django Rest Framework",
    ],
  },
];

function Home() {
  useEffect(() => {
    document.title = "Home | Meu Portfólio";
  }, []);

  return (
    <div className="w-full">
      {/* SEÇÃO 1 — APRESENTAÇÃO */}
      <section
        id="inicio"
        className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-8 min-h-[80vh]"
      >
        <div className="md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
              Olá, meu nome é
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Leocassio Silva
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
              Desenvolvedor Backend
            </h2>

            <p className="text-lg max-w-xl mb-6 text-gray-700 dark:text-gray-300">
              Especializado em <strong>Django/Python</strong>, criando
              aplicações modernas, APIs robustas e soluções de automação
              eficientes.
            </p>

            <div className="flex justify-center md:justify-start items-center space-x-4 mb-6">
              <motion.a
                href={curriculoPDF}
                download="francisco_leocassio.pdf"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg inline-flex items-center transition-colors"
                aria-label="Baixar currículo em PDF"
              >
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Baixar Currículo</span>
              </motion.a>

              <motion.a
                href="#contato"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-bold py-2 px-6 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contato
              </motion.a>
            </div>

            <div className="flex justify-center md:justify-start items-center space-x-4">
              <a
                href="https://github.com/leocassiosilva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Leocassio"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-110 transition-all"
              >
                <Github size={28} aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/in/leocassio-silva/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Leocassio"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 hover:scale-110 transition-all"
              >
                <Linkedin size={28} aria-hidden="true" />
              </a>

              <a
                href="mailto:leocassiosilva@gmail.com"
                aria-label="Enviar email"
                className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:scale-110 transition-all"
              >
                <Mail size={28} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={minhaFoto}
              alt="Ilustração de programador trabalhando no computador"
              width={400}
              height={400}
              loading="lazy"
              className="transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* SEÇÃO 2 — SOBRE MIM */}
      <section
        id="sobre"
        className="flex flex-col justify-center px-10 py-10 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Sobre Mim</h2>

          <p className="text-lg mb-4 leading-relaxed">
            Sou desenvolvedor com foco em <strong>Python e Django</strong>,
            especializado na criação de APIs REST, automação de processos e
            backends escaláveis. Também trabalho com Selenium e web scraping,
            criando soluções eficientes e inteligentes.
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            Atualmente estou me aprofundando em tecnologias{" "}
            <strong>JavaScript</strong>, como
            <strong> Node.js, React.js e React Native</strong>, para expandir
            minhas habilidades e complementar meu trabalho principal no backend.
          </p>

          <p className="text-lg leading-relaxed">
            Sou formado em <strong>Licenciatura em Computação</strong> e também
            em <strong> Análise e Desenvolvimento de Sistemas</strong>. Gosto de
            desenvolver soluções completas — da lógica ao código final — buscando
            clareza, qualidade e impacto real.
          </p>
        </motion.div>
      </section>

      <SectionDivider />

      {/* TECNOLOGIAS */}
      <section
        id="tecnologias"
        className="flex flex-col justify-center px-10 py-10 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Tecnologias</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {tecnologias.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex flex-col items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{tech.icon}</span>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* PROJETOS */}
      <section id="projetos" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-center">Projetos</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Alguns dos projetos que desenvolvi ao longo da minha carreira
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetos.map((projeto) => (
              <ProjetoCard
                key={projeto.titulo}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                tecnologias={projeto.tecnologias}
                demo={projeto.demo}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* PRODUÇÃO ACADÊMICA */}
      <section id="artigos" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-center">
            Produção Acadêmica
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Artigos publicados em eventos e periódicos científicos
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArtigoCard
              titulo='A MÁQUINA E AS RELAÇÕES LÍQUIDAS EM "HER"'
              evento="EXPOSIÇÃO CIENTÍFICA, TECNOLÓGICA E CULTURAL (EXPOTEC) - 2018"
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

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section id="experiencia" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Experiência Profissional
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiencias.map((exp) => (
              <ExperienciaCard
                key={`${exp.empresa}-${exp.periodo}`}
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

      {/* CONTATO */}
      <section id="contato" className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center mb-3">Contato</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Quer trocar uma ideia ou trabalhar juntos? Entre em contato!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <motion.a
              href="mailto:leocassiosilva@gmail.com"
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center gap-3 bg-white dark:bg-card-dark p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <Mail size={32} className="text-red-500" />
              <span className="font-semibold">E-mail</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                leocassiosilva@gmail.com
              </span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/leocassio-silva/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center gap-3 bg-white dark:bg-card-dark p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <Linkedin size={32} className="text-blue-600" />
              <span className="font-semibold">LinkedIn</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                /in/leocassio-silva
              </span>
            </motion.a>

            <motion.a
              href="https://github.com/leocassiosilva"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center gap-3 bg-white dark:bg-card-dark p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <Github size={32} />
              <span className="font-semibold">GitHub</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                /leocassiosilva
              </span>
            </motion.a>
          </div>

          <div className="text-center">
            <motion.a
              href="mailto:leocassiosilva@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              <Send size={20} />
              Enviar E-mail
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
