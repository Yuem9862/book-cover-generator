import React from "react";

function Cover({
  title,
  guide,
  placement,
  author,
  topText,
  publisher,
  colour,
}) {
  //todo: fix the colour
  // console.log(colour);

  //useEffect when subitting the form
  return (
    <>
      <section className='cover-wrapper'>
        <div className='cover'>
          <div className='top-colour-bar colour-1'></div>
          <div className='top-text'>
            <p>{topText}</p>
          </div>
          <div className='picture'>
            <img
              src='https://etc.usf.edu/clipart/3100/3126/butterfly_2_lg.gif'
              className='animal-pic'
              alt='animal'
            />
          </div>
          <div className='title colour-1'>
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
