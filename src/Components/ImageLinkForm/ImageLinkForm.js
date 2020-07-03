import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div>
			<p className='f3 mid-gray'>
				{'Choose an image and the scanner will detect faces in your picture'}
			</p>
			<div className='center'>
				<div className='form pa4 br2 shadow-2 center'>
					<input className='f4 pa2 w-70 center' type ='text' onChange={onInputChange}/>
					<button className='w-30 pa2 dim f4 link ph3 pv2 dib white bg-gray shadow-5'
							onClick={ onButtonSubmit }
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;