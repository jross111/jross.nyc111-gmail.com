import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
	return (
		<div>
			<div className='header'>
				<div className='container clearfix'>
					<img
						className='profile-image img-fluid float-left'
						src='https://i.gyazo.com/71bca8e5caa93de8b247fc5af58e94a7.jpg'
						alt='James Lee'
					/>
					<div class='profile-content float-left'>
						<h1 className='name'>James Ross</h1>
						<h2 className='desc'>Software Developer</h2>
						<ul className='social list-inline'>
							<li className='list-inline-item'>
								<FontAwesomeIcon icon={faCoffee} />
							</li>
							<li className='list-inline-item'>
								<FontAwesomeIcon icon={faCoffee} />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
