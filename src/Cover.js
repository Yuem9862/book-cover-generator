import React, { useEffect } from "react";
import data from "./data";
function Cover({
  title,
  guide,
  placement,
  author,
  topText,
  publisher,
  colour,
  image,
}) {
  console.log(colour);
  const getImage = (index) => {
    return data.find((element) => element.id === index).url;
  };

  return (
    <>
      <section className='cover-wrapper'>
        <div className='cover'>
          <div
            className='top-colour-bar'
            style={{ backgroundColor: `${colour}` }}
          ></div>
          <div className='top-text'>
            <p>{topText}</p>
          </div>
          <div className='picture'>
            <img src={getImage(image)} className='animal-pic' alt='animal' />
          </div>
          <div className='title' style={{ backgroundColor: `${colour}` }}>
            <p>{title}</p>
          </div>
          <div className={`guide + ${placement}`}>
            <p>{guide}</p>
          </div>
          <div className='pubinfo'>
            <p className='publisher'>{publisher}</p>
            <p className='author'>{author}</p>
          </div>
        </div>
        <button type='button' className='btn'>
          download
        </button>
      </section>
    </>
  );
}

export default Cover;
