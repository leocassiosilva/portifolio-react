import { motion } from "framer-motion";

function ArtigoCard({ titulo, evento, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-card-dark shadow-md p-5 rounded-lg hover:shadow-xl flex flex-col"
    >
      <h3 className="font-bold text-lg mb-2">{titulo}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{evento}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 inline-block hover:underline font-medium mt-auto"
      >
        Ver artigo
      </a>
    </motion.div>
  );
}

export default ArtigoCard;

