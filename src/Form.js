import React from "react";

function Form() {
  return (
    <>
      <form className='generator-form'>
        <label htmlFor='title'>title</label>
        <input id='title' type='text' placeholder='required' />

        <label htmlFor='guide'>guide text</label>
        <input id='guide' type='text' placeholder='required' />

        <label htmlFor='author'>author</label>
        <input id='author' type='text' placeholder='required' />

        <label htmlFor='top-text'>top text</label>
        <input id='top text' type='text' placeholder='required' />

        <label htmlFor='animals'>animal code</label>
        <input id='animals' type='number' min='1' max='6' />

        <label htmlFor='colours'>colour code</label>
        <input id='colours' type='number' min='1' max='6' />

        <button type='button' class='btn'>
          generate cover
        </button>
      </form>
    </>
  );
}

export default Form;
