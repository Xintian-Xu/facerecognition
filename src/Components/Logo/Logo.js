import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face from './faceIcon.png';

const Logo = () => {
	return(
		<div className='ma4 mt4'>
			<Tilt className="Tilt br2 shadow-2 center" options={{ max : 40 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa2">
 					<img className='centerLogo' alt='logo' src={face}/>
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;