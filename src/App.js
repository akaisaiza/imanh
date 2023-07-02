import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Extension } from "./components/Extension";
import { Footer } from "./components/Footer";
import { Loading } from "./components/Loading";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loading() {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    loading(); 
  }, []); 

  return (
    <>
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <>
            <NavBar />
            <Banner />
            <Skills />
            {/* <Projects />
            <Contact /> */}
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
