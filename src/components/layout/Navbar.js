import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0d2438] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            MeuPortfólio
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-6 text-lg">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/sobre" className="hover:text-gray-200">Sobre</Link>
            {/* <Link to="/projetos" className="hover:text-gray-200">Projetos</Link> */}
            {/* <Link to="/contato" className="hover:text-gray-200">Contato</Link> */}
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
        <div className="md:hidden bg-[#0d2438] px-4 pb-4 flex flex-col gap-4 text-lg">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/sobre" onClick={() => setOpen(false)}>Sobre</Link>
          {/* <Link to="/projetos" onClick={() => setOpen(false)}>Projetos</Link> */}
          {/* <Link to="/contato" onClick={() => setOpen(false)}>Contato</Link> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
