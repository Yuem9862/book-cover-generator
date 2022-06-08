import "./App.css";
import Form from "./Form";
import Cover from "./Cover";
import Animals from "./Animals";
import Footer from "./Footer";
function App() {
  return (
    <main>
      <header className='header '>
        <h1>O'RLY Cover Generator</h1>
      </header>
      <section className='generator section-center'>
        <Form />
        <Cover />
      </section>
      <section className='reference section-center'>
        <Animals />
      </section>
      <Footer />
    </main>
  );
}

export default App;
