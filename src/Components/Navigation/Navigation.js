import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	
		if(isSignedIn){
			return (
				<nav style= {{ display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signout')} className='f4 link dim black underline pa2 ma2 pointer'>Logout</p>
				</nav>
			);
		}
		else{
			return(
				<nav style= {{ display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signin')} className='f4 link dim black underline pa2 ma2 pointer'>Login</p>
					<p onClick={() => onRouteChange('signup')} className='f4 link dim black underline pa2 ma2 pointer'>Sign Up</p>
				</nav>
			);
		}
	
}

export default Navigation;