import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../routes/Routes';
import './Header.scss'

const Header: React.FC = () => {
    const navBarItems = [
        {title: 'Profile', link: PATH.PROFILE},
        {title: 'Login', link: PATH.LOGIN},
        {title: 'SignUp', link: PATH.SIGNUP},
        {title: 'TestPage', link: PATH.TESTPAGE},
        {title: 'Recovery', link: PATH.RECOVERY},
        {title: 'Packs', link: PATH.PACKS}
    ]
    return (
        <div className='headerBlock'>
            <div className='headerBlock__navBar'>
                {
                    navBarItems.map(el => {
                        // добавил key, была ошибка
                        return <NavLink key={el.link} activeClassName='headerBlock__navBar-active' className='headerBlock__navBar-item' to={el.link}>{el.title}</NavLink>
                    })
                }
            </div>
        </div>
    );
};

export default Header;