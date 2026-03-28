import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./../ThemeToggle";

const navItems = [
  { label: "Início", target: "inicio" },
  { label: "Sobre", target: "sobre" },
  { label: "Tecnologias", target: "tecnologias" },
  { label: "Projetos", target: "projetos" },
  { label: "Artigos", target: "artigos" },
  { label: "Experiência", target: "experiencia" },
  { label: "Contato", target: "contato" },
];

function scrollToSection(id, navigate) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate("/#" + id);
  }
}

function NavLinks({ onItemClick, navigate }) {
  return navItems.map(({ label, target }) => (
    <button
      key={target}
      onClick={() => {
        scrollToSection(target, navigate);
        onItemClick?.();
      }}
      className="hover:text-gray-200 transition-colors"
    >
      {label}
    </button>
  ));
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-primary text-black dark:text-white shadow-md"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Leocassio
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-6 text-lg items-center">
            <NavLinks navigate={navigate} />
            <ThemeToggle />
          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-secondary dark:bg-secondary-dark text-black dark:text-white px-4 pb-4 flex flex-col items-center gap-4 text-lg">
          <NavLinks onItemClick={() => setOpen(false)} navigate={navigate} />
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
