import "./App.css";
import Form from "./Form";
import Cover from "./Cover";
import Animals from "./Animals";
import Colours from "./Colours";
function App() {
  return (
    <main>
      <header className='header'>
        <h1>O'RLY Cover Generator</h1>
      </header>
      <section className='generator'>
        <Form />
        <Cover />
      </section>
      <section className='reference'>
        <Animals />
        <Colours />
      </section>
      <footer>footer</footer>
    </main>
  );
}

export default App;
