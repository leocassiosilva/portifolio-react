import { motion } from "framer-motion";

function ExperienceCard({ empresa, cargo, periodo, atividades }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-card-dark shadow-md p-4 rounded hover:shadow-xl"
    >
      <h3 className="font-semibold text-lg mb-1">
        {empresa} – {cargo}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        {periodo}
      </p>

      <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
        {atividades.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ExperienceCard;
