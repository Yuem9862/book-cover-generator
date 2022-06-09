import React from "react";

function Animal({ data }) {
  const { id, name, url } = data;
  console.log(url);
  return (
    <article>
      <img className='animal-card-img' src={url} alt={name} />
      <p className='animal-card-num'>{id}</p>
    </article>
  );
}

export default Animal;
