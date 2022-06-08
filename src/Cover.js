import React from "react";

function Cover() {
  return (
    <>
      <section className='cover-wrapper'>
        <div className='cover'>
          <div className='top-colour-bar colour-1'></div>
          <div className='top-text'>
            <p>Top Text</p>
          </div>
          <div className='picture'>
            <img
              src='https://etc.usf.edu/clipart/3100/3126/butterfly_2_lg.gif'
              className='animal-pic'
              alt='animal'
            />
          </div>
          <div className='title colour-1'>
            <p>Title Text</p>
          </div>
          <div className='guide'>
            <p>Guide Text</p>
          </div>
          <div className='pubinfo'>
            <p className='publisher'>O'RLY</p>
            <p className='author'>Author</p>
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
