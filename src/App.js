import "./App.css";
import Form from "./Form";
import Animals from "./Animals";
import Footer from "./Footer";
import data from "./data";
function App() {
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
