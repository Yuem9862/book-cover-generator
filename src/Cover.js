import React, { useCallback, useRef } from "react";
import data from "./data";
import { toPng } from "html-to-image";

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
  //find the animal image
  const getImage = (index) => {
    return data.find((element) => element.id === index).url;
  };

  //generate the cover image
  const printRef = useRef();
  const onButtonClick = useCallback(() => {
    if (printRef.current === null) {
      return;
    }

    toPng(printRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [printRef]);

  return (
    <>
      <section className='cover-wrapper'>
        <div className='cover' ref={printRef}>
          <div
            className='top-colour-bar'
            style={{ backgroundColor: `${colour}` }}
          ></div>
          <p className='top-text'>{topText}</p>
          <img src={getImage(image)} className='animal-pic' alt='animal' />
          <div className='title' style={{ backgroundColor: `${colour}` }}>
            <p>{title}</p>
          </div>
          <div className={`guide ${placement}`}>
            <p>{guide}</p>
          </div>
          <div className='pubinfo'>
            <p className='publisher'>{publisher}</p>
            <p className='author'>{author}</p>
          </div>
        </div>
        <button type='button' className='btn' onClick={onButtonClick}>
          download
        </button>
      </section>
    </>
  );
}

export default Cover;
