import React from 'react';
import './Menu.scss';
import { IPropsClassName } from '../../interfaces/IPropsClassName';
import { menu } from '../../configs';
import { NavLink } from 'react-router-dom';
import { IMenuItem } from '../../configs/IMenuItem';

interface IMenuProps extends IPropsClassName {}

export const Menu: React.FC<IMenuProps> = ({ className }) => {
    const classname = `${className} Menu`;

    return (
        <nav className={classname}>
            <ul className="Menu__list">
                {menu?.map((m: IMenuItem) => {
                    return (
                        <li
                            className="Menu__item"
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
        </nav>
    );
};
