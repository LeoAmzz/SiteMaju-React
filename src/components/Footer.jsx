import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-col footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src="/Imagens/LogoMajuBranca1.webp" alt="MAJU Logo White" />
                        </Link>
                        <p className="footer-desc">A bússola que indicará o caminho certo para a gestão de seus depósitos judiciais. Transformamos ativos em resultados com excelência.</p>
                        <div className="social-links">
                            <a href="https://web.facebook.com/profile.php?id=100057122813947" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/company/maju-assessoria-e-consultoria-empresarial-ltda/posts/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    
                    <div className="footer-col footer-contact-info">
                        <h4>Contato</h4>
                        <div className="footer-info">
                            <div className="info-row">
                                <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                                <div>Rua Urussuí, 71 Cj. 43 <br /> São Paulo, 04542050</div>
                            </div>
                            <div className="info-row">
                                <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
                                <div><a href="tel:+551126110527">+55(11) 2611 0527</a> | <a href="tel:+551126110527">+55(11) 2611 0528</a></div>
                            </div>
                            <div className="info-row">
                                <div className="info-icon"><i className="fas fa-envelope"></i></div>
                                <div><a href="mailto:contato@majuassessoria.com.br">contato@majuassessoria.com.br</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-col footer-links-col">
                        <h4>Acesso Rápido</h4>
                        <div className="footer-menu-grid">
                            <Link to="/">Início</Link>
                            <Link to="/quem-somos">Quem Somos</Link>
                            <Link to="/solucoes">Soluções</Link>
                            <Link to="/contato">Contato</Link>
                            <Link to="/lgpd">LGPD</Link>
                            <Link to="/denuncias">Denúncias</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        &copy; {new Date().getFullYear()} MAJU Assessoria e Consultoria Empresarial. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
