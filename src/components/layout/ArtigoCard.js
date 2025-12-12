import { motion } from "framer-motion";

function ArtigoCard({ titulo, evento, resumo, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-[#374151] shadow-md p-4 rounded cursor-pointer hover:shadow-xl"
    >
      <h3 className="font-semibold text-lg mb-2">{titulo}</h3>
      <p className="text-sm mb-2">{evento}</p>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{resumo}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 inline-block hover:underline"
      >
        Ver artigo
      </a>
    </motion.div>
  );
}

export default ArtigoCard;

