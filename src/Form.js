import React, { useState } from "react";
import Cover from "./Cover";

function Form() {
  const defaultInfo = {
    title: "Title Text",
    guide: "Guide Text",
    placement: "Right",
    author: "Author",
    topText: "Top Text",
    publisher: "O'RLY",
    image: 1,
    colour: "3BA544",
  };
  const [info, setInfo] = useState(defaultInfo);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='title'>title</label>
        <input
          id='title'
          type='text'
          placeholder='required'
          onChange={(event) => {
            setInfo({ ...info, title: event.target.value });
          }}
        />

        <label htmlFor='guide'>guide text</label>
        <input
          id='guide'
          type='text'
          placeholder='required'
          onChange={(event) => {
            setInfo({ ...info, guide: event.target.value });
          }}
        />

        <label htmlFor='placement'>guide text placement</label>
        <select
          id='placement'
          onChange={(event) => {
            setInfo({ ...info, placement: event.target.value });
          }}
        >
          <option value='right'>right</option>
          <option value='center'>center</option>
          <option value='left'>left</option>
        </select>

        <label htmlFor='author'>author</label>
        <input
          id='author'
          type='text'
          placeholder='required'
          onChange={(event) => {
            setInfo({ ...info, author: event.target.value });
          }}
        />

        <label htmlFor='top-text'>top text</label>
        <input
          id='top text'
          type='text'
          placeholder='required'
          onChange={(event) => {
            setInfo({ ...info, topText: event.target.value });
          }}
        />

        <label htmlFor='publisher'>publisher</label>
        <input
          id='publisher'
          type='text'
          placeholder="O'RLY"
          onChange={(event) => {
            setInfo({ ...info, publisher: event.target.value });
          }}
        />

        <label htmlFor='animals'>animal code</label>
        <input
          id='animals'
          type='number'
          min='1'
          max='6'
          onChange={(event) => {
            setInfo({ ...info, image: event.target.value });
          }}
        />

        <label htmlFor='colours'>colour code</label>
        <input
          id='colours'
          type='color'
          onChange={(event) => {
            setInfo({ ...info, colour: event.target.value });
          }}
        />

        {/* todo: generate a random cover
        <button type='submt' className='btn'>
          random
        </button> */}
      </form>

      <Cover {...info} />
    </>
  );
}

export default Form;
