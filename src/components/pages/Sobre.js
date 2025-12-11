function Sobre() {
    return (
        <div className="flex flex-col justify-center px-10 py-20 min-h-[80vh] max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Sobre Mim</h1>

            <p className="text-lg mb-4 leading-relaxed">
                Sou desenvolvedor com foco em <strong>Python e Django</strong>, especializado na criação
                de APIs REST, automação de processos e desenvolvimento de backends escaláveis. Também
                trabalho com Selenium e web scraping, criando soluções eficientes que integram dados,
                regras de negócio e alta performance.
            </p>

            <p className="text-lg mb-4 leading-relaxed">
                Atualmente estou me aprofundando no ecossistema <strong>JavaScript</strong>, estudando
                <strong> Node.js, React.js e React Native</strong> para expandir minhas habilidades e
                complementar minha atuação principal no backend.
            </p>

            <p className="text-lg leading-relaxed">
                Sou formado em <strong>Licenciatura em Computação</strong> e também em
                <strong> Análise e Desenvolvimento de Sistemas</strong>. Gosto de desenvolver soluções
                completas — da modelagem ao código final — buscando clareza, qualidade e impacto real.
            </p>
        </div>
    );
}

export default Sobre;
