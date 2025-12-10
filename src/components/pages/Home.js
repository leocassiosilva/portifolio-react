import { useEffect } from "react";

function Home() {

  useEffect(() => {
    document.title = "Home | Meu Portfólio";
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
