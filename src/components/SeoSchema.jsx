import { Helmet } from 'react-helmet-async';

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
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
