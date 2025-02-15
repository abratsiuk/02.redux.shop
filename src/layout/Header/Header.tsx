import { Link, NavLink } from 'react-router-dom';
import { menu } from '../../configs';
import { IMenuItem } from '../../configs/IMenuItem';
import './Header.scss';

export const Header = () => {
    return (
        <header
            id="header"
            className="Header"
        >
            <Link
                to="/"
                className="Header__logo"
            >
                Redux Shop
            </Link>
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
