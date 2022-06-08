import React from "react";
import Animal from "./Animal";
function Animals() {
  return (
    <section className='section-center'>
      <h3>animal codes</h3>
      <div className='animals-container'>
        <Animal />
        <Animal />
        <Animal />
        <Animal />
        <Animal />
        <Animal />
      </div>
    </section>
  );
}

export default Animals;
