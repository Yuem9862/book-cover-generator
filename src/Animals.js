import React from "react";
import Animal from "./Animal";
function Animals({ animals }) {
  return (
    <section className='section-center'>
      <h3>animal codes</h3>
      <div className='animals-container'>
        {animals.map((animal) => {
          return <Animal id={animal.id} data={animal} />;
        })}
      </div>
    </section>
  );
}

export default Animals;
