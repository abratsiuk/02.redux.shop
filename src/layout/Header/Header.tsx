import { Link, NavLink } from 'react-router-dom';
import { menu } from '../../configs';
import { IMenuItem } from '../../configs/IMenuItem';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/images/shop.svg';

export const Header = () => {
    return (
        <header
            id="header"
            className="Header"
        >
            <div className="Header__block">
                <Logo className="Header__img" />
                <Link
                    to="/"
                    className="Header__logo"
                >
                    Redux Shop
                </Link>
            </div>
            <ul className="Header__menu">
                {menu?.map((m: IMenuItem) => {
                    return (
                        <li
                            className="Header__menuItem"
                            key={m.to}
                        >
                            <NavLink
                                to={m.to}
                                className={({ isActive }) =>
                                    isActive ? 'link link_active' : 'link'
                                }
                            >
                                {m.text}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
};
