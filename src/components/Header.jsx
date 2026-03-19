import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMobileActive, setIsMobileActive] = useState(false);
    const location = useLocation();

    const toggleMobile = () => {
        setIsMobileActive(!isMobileActive);
    };

    const isActive = (path) => {
        if (location.pathname === path) return 'active';
        if (location.pathname === '/' && path === '/index.html') return 'active';
        return '';
    };

    return (
        <header>
            <div className="container header-container">
                <div className="logo">
                    <Link to="/">
                        <img src="/Imagens/logomaju-vJJ5d3sEkuUvPeg-AiN_1w-removebg-preview 1.png" alt="MAJU Logo" />
                    </Link>
                </div>
                <nav id="navbar" className={isMobileActive ? 'mobile-active' : ''}>
                    <ul>
                        <li><Link to="/" className={isActive('/')}>Home</Link></li>
                        <li><Link to="/quem-somos" className={isActive('/quem-somos')}>Quem Somos</Link></li>
                        <li><Link to="/solucoes" className={isActive('/solucoes')}>Soluções</Link></li>
                        <li><Link to="/contato" className={isActive('/contato')}>Contato</Link></li>
                        <li><Link to="/blog" className={isActive('/blog')}>MAJU News</Link></li>
                        <li><a href="https://sistemacora.com.br/login">Sistema CORA</a></li>
                    </ul>
                </nav>
                <div className="mobile-toggle" onClick={toggleMobile}>
                    <i className={`fas ${isMobileActive ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </header>
    );
};

export default Header;
