import React from "react";

function Form() {
  return (
    <>
      <form className='form'>
        <label htmlFor='title'>title</label>
        <input id='title' type='text' placeholder='required' />

        <label htmlFor='guide'>guide text</label>
        <input id='guide' type='text' placeholder='required' />

        <label htmlFor='placement'>guide text placement</label>
        <select id='placement'>
          <option value='right'>right</option>
          <option value='center'>center</option>
          <option value='left'>left</option>
        </select>

        <label htmlFor='author'>author</label>
        <input id='author' type='text' placeholder='required' />

        <label htmlFor='top-text'>top text</label>
        <input id='top text' type='text' placeholder='required' />

        <label htmlFor='publisher'>publisher</label>
        <input id='publisher' type='text' />

        <label htmlFor='animals'>animal code</label>
        <input id='animals' type='number' min='1' max='6' />

        <label htmlFor='colours'>colour code</label>
        <input id='colours' type='color' value='#25BB32' />

        <button type='button' className='btn'>
          generate cover
        </button>
      </form>
    </>
  );
}

export default Form;
