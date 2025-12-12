import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./../ThemeToggle";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-primary text-black dark:text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            MeuPortfólio
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-6 text-lg">
            <button onClick={() => document.getElementById("inicio").scrollIntoView({behavior:"smooth"})}
            className="hover:text-gray-200">Início</button>
            <button 
              onClick={() => document.getElementById("sobre").scrollIntoView({ behavior: "smooth" })}
              className="hover:text-gray-200"
            >
              Sobre
            </button>

             <button 
              onClick={() => document.getElementById("tecnologias").scrollIntoView({ behavior: "smooth" })}
              className="hover:text-gray-200"
            >
                Tecnologias
            </button>


            <button 
              onClick={() => document.getElementById("artigos").scrollIntoView({ behavior: "smooth" })}
              className="hover:text-gray-200"
            >
                Produção Acadêmica 
            </button>
            <button 
              onClick={() => document.getElementById("experiencia").scrollIntoView({ behavior: "smooth" })}
              className="hover:text-gray-200"
            >
                Experiência Profissional
            </button>

            <ThemeToggle />

          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
      <div className="md:hidden bg-secondary dark:bg-secondary-dark text-black dark:text-white px-4 pb-4 flex flex-col items-center gap-4 text-lg">
          <button onClick={() => document.getElementById("inicio").scrollIntoView({behavior:"smooth"})}
            className="hover:text-gray-200">Início</button>
          <button 
              onClick={() => document.getElementById("sobre").scrollIntoView({ behavior: "smooth" })}
              className="hover:text-gray-200"
            >
              Sobre
          </button>
          <button 
              onClick={() => document.getElementById("tecnologias").scrollIntoView({ behavior: "smooth" })}
              className="hover:text-gray-200"
            >
              Tecnologias
          </button>
          <button 
              onClick={() => document.getElementById("artigos").scrollIntoView({ behavior: "smooth" })}
              className="hover:text-gray-200"
            >
                Produção Acadêmica 
            </button>
            <button 
              onClick={() => document.getElementById("experiencia").scrollIntoView({ behavior: "smooth" })}
              className="hover:text-gray-200"
            >
                Experiência Profissional
            </button>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
