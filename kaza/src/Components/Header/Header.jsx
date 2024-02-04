
import logo from '../../assets/logo/logo.svg';
import { Link } from 'react-router-dom'

const currentRoute = window.location.pathname;

export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={logo} alt="kasa, location d'appartements" />
			</h1>
            <div className='header__nav'>
            <nav className='nav'>
            <ul className='nav_list'>
                <li className={currentRoute === '/' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/'>
                        Accueil
                    </Link>
                </li>
                <li className={currentRoute === '/Apropos' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/Apropos'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
        </div>
		</header>
	)
}