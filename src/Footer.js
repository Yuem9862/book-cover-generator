import React from "react";
import GitHub from "./GitHub.png";
function Footer() {
  return (
    <footer>
      <p>
        This project is inspired by{" "}
        <a className='link' href='https://orly.nanmu.me/'>
          https://orly.nanmu.me/
        </a>{" "}
        but is powered by React.
      </p>
      <p>
        The animal images are from the{" "}
        <a href='https://etc.usf.edu/clipart/' className='link'>
          USF ClipArt ETC
        </a>{" "}
        project.
      </p>
      <p>I hope you enjoy it and have fun! 👻 -- Yuemin</p>
      <a href='https://github.com/Yuem9862/book-cover-generator'>
        <img className='icon' src={GitHub} alt='GitHub' />
      </a>
    </footer>
  );
}

export default Footer;
