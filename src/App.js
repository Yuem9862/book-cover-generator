import "./App.css";
import Form from "./Form";
import Animals from "./Animals";
import Footer from "./Footer";
import data from "./data";
function App() {
  console.log(
    "%c Time to troll your coworker with a O'RLY book! :p -- Yuemin",
    "background: #222; color: #bada55"
  );
  return (
    <main>
      <header className='header'>
        <h1>O'RLY Cover Generator</h1>
      </header>
      <section className='generator section-center'>
        <Form />
      </section>
      <section className='section-center'>
        <Animals animals={data} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
