import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation, useRoutes } from 'react-router-dom';
import Logo from '../assets/spotify-logo.svg';

const links = [
    { name: 'Главная страница', uri: '/' },
    { name: 'Треки', uri: '/tracks' },
    { name: 'Альбомы', uri: '/albums' },
];

const Header: FC = () => {
    const [currentPage, setCurrentPage] = useState<string>(links[0].name);
    const location = useLocation();

    useEffect(() => {
        const page = location.pathname;

        setCurrentPage(page);
    }, [location]);

    return (
        <header className='header'>
            <div className='container'>
                <Link to='/' className='header-logo'>
                    <img src={Logo} alt='' width='150' />
                </Link>
                <nav className='header-nav'>
                    {links.map((link, i) => {
                        return (
                            <Link
                                className={`header-nav__item ${
                                    currentPage === link.uri && 'header-nav__item__active'
                                }`}
                                to={link.uri}
                                key={i}>
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
