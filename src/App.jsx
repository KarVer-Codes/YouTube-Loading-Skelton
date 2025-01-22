import "./App.css";
import CardsList from "./components/CardsList/cards";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {

  return (
    <>
      <Header/>
      <section className="main">
        <CardsList/>
      </section>
      <Footer/>
    </>
  );
}

export default App;
