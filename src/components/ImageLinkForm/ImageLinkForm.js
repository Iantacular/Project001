import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onInputSubmit }) => {
    return (
     <div>
        <p className='f3 white'>
            { 'Placeholder Text FOR NOW'}
        </p>
        <div className='center'>
            <div className= 'form center pa4 br3 shadow-5'>
            <input 
            className= 'f4 pa2 w-70 center black bg-white' 
            type='text'
            onChange={onInputChange}/>
            <button 
            className='w-30 grow f4 link ph3 pv2 dib white bg-black'
            onClick={onInputSubmit}>
                Grab it!</button>
            </div>
        </div>
     </div>
        
    );
}

export default ImageLinkForm;