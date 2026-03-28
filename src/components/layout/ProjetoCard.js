import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function ProjetoCard({ titulo, descricao, tecnologias, demo }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-card-dark shadow-md rounded-lg overflow-hidden hover:shadow-xl flex flex-col"
    >
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2">{titulo}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
          {descricao}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tecnologias.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {demo && (
          <div className="flex gap-3 mt-auto">
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              aria-label={`Demo de ${titulo}`}
            >
              <ExternalLink size={18} />
              Demo
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProjetoCard;
