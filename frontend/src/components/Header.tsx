import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/spotify-logo.svg';

const links = [
    { name: 'Главная страница', uri: '/' },
    { name: 'Треки', uri: '/tracks' },
    { name: 'Альбомы', uri: '/albums' },
];

const Header: FC = () => {
    return (
        <header className='header'>
            <div className='container'>
                <Link to='/' className='header-logo'>
                    <img src={Logo} alt='' width='150' />
                </Link>
                <nav className='header-nav'>
                    {links.map((link, i) => {
                        return (
                            <Link className='header-nav__item' to={link.uri} key={i}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};

export default Header;
