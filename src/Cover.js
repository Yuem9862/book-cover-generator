import React, { useRef } from "react";
import data from "./data";
import html2canvas from "html2canvas";
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
  const handleDownloadImage = async () => {
    console.log("download begins");

    const element = printRef.current;
    const canvas = await html2canvas(element, { allowTaint: true });

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "cover.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <>
      <section className='cover-wrapper'>
        <div className='cover' ref={printRef}>
          <div
            className='top-colour-bar'
            style={{ backgroundColor: `${colour}` }}
          ></div>
          <div className='top-text'>
            <p>{topText}</p>
          </div>
          <div className='picture'>
            <img
              src={getImage(image)}
              className='animal-pic picture'
              alt='animal'
            />
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
        <button type='button' className='btn' onClick={handleDownloadImage}>
          download
        </button>
      </section>
    </>
  );
}

export default Cover;
