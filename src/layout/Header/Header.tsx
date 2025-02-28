import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectIsGoodsEmpty } from '../../store/goods/goods-selectors';
import { loadGoods } from '../../store/goods/goods-actions';
// import { setFunds } from '../../store/funds/funds-actions';

import { Link, NavLink } from 'react-router-dom';
import { menu } from '../../configs';
import { IMenuItem } from '../../configs/IMenuItem';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/images/shop.svg';
import { FundsSymbol } from '../../components/FundsSymbol';
import { OrdersSymbol } from '../../components/OrdersSymbol';

export const Header = () => {
    const dispatch = useDispatch();
    const isGoodsEmpty = useTypedSelector(selectIsGoodsEmpty);

    useEffect(() => {
        if (isGoodsEmpty) {
            dispatch(loadGoods());
        }
    }, [isGoodsEmpty, dispatch]);

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
                    Redux Game Shop
                </Link>
                <div className="Header__symbols">
                    <FundsSymbol />
                    <OrdersSymbol />
                </div>
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
