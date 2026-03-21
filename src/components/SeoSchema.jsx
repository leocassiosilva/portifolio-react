import { useEffect } from 'react';

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Francisco Leocassio da Silva",
  "url": "https://leocassio-silva.vercel.app/",
  "jobTitle": "Analista de Sistemas",
  "description": "Analista de Sistemas com experiência em desenvolvimento de software e soluções tecnológicas. Disponível para oportunidades CLT e freelance.",
  "sameAs": [
    "https://www.linkedin.com/in/leocassio-silva/",
    "https://github.com/leocassiosilva"
  ],
  "knowsAbout": [
    "Análise de Sistemas",
    "Desenvolvimento de Software",
    "React",
    "JavaScript",
    "Python",
    "Django",
    "Node.js",
    "PostgreSQL",
    "MongoDB"
  ]
};

export default function SeoSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
