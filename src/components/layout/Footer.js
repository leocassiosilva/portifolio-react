import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-primary text-gray-700 dark:text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-black dark:text-white mb-1">
              Leocassio Silva
            </h3>
            <p className="text-sm">Desenvolvedor Backend</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/leocassiosilva"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/leocassio-silva/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:leocassio.work@gmail.com"
              aria-label="E-mail"
              className="hover:text-red-500 transition-colors"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-6 pt-4 text-center">
          <span className="text-sm">
            &copy; {new Date().getFullYear()} Leocassio Silva — Todos os
            direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
