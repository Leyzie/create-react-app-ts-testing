import React from 'react';
import {MENU_FORMATE} from '../../constants/menu';

export const NavBar = ({setActivMenu, activeMenu}: {setActivMenu: Function, activeMenu: string}) => {
	const renderMenu = MENU_FORMATE.map(({name, id, value}) =>
        <div key={id} className="col s3">
			<button
				className={`waves-effect waves-light btn-small ${activeMenu === value && 'disabled'}`}
				onClick={setActivMenu(value)}
			>
				{name}
			</button>
		</div>
	);

	return (
		<nav className="navbar-fixed">
			<div className="nav-wrapper padding-left-30">
				<div className="row center-align">
					{renderMenu}
				</div>
			</div>
		</nav>
	);
}