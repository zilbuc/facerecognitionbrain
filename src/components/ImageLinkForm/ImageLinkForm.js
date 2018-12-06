import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Skull will detect faces in your pictures!'}
      </p>
      <div className='centerCust'>
        <div className='centerCust pa4 br3 shadow-5 form'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-silver'
            onClick={onPictureSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
