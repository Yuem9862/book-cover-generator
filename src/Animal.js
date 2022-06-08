import React from "react";
import {
  // birdnest,
  // butterfly,
  // frog,
  jellyfish,
  // opah,
  // pterodactyl,
} from "./animals/animals";
function Animal() {
  return (
    <article>
      <img className='animal-card-img' src={jellyfish} alt='placeholder' />
      <p className='animal-card-num'>1</p>
    </article>
  );
}

export default Animal;
