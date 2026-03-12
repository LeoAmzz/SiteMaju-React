class MajuHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="container header-container">
                <div class="logo">
                    <a href="index.html">
                        <img src="Imagens/logomaju-vJJ5d3sEkuUvPeg-AiN_1w-removebg-preview 1.png" alt="MAJU Logo">
                    </a>
                </div>
                <nav id="navbar">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="quem-somos.html">Quem Somos</a></li>
                        <li><a href="solucoes.html">Soluções</a></li>
                        <li><a href="contato.html">Contato</a></li>
                        <li><a href="blog.html">MAJU Journal</a></li>
                        <li><a href="#">Sistema CORA</a></li>
                    </ul>
                </nav>
                <div class="mobile-toggle">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </header>
        `;

        // Highlight active link
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = this.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
        
        // Mobile Toggle Logic
        const mobileToggle = this.querySelector('.mobile-toggle');
        const navbar = this.querySelector('nav');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', function() {
                navbar.classList.toggle('mobile-active');
                const icon = this.querySelector('i');
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }
    }
}

class MajuFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container">
                <div class="footer-top">
                    <div class="footer-col footer-brand">
                        <a href="index.html" class="footer-logo">
                            <img src="Imagens/LogoMajuBranca1.png" alt="MAJU Logo White">
                        </a>
                        <p class="footer-desc">A bússola que indicará o caminho certo para a gestão de seus depósitos judiciais. Transformamos ativos em resultados com excelência.</p>
                        <div class="social-links">
                            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    
                    <div class="footer-col footer-contact-info">
                        <h4>Contato</h4>
                        <div class="footer-info">
                            <div class="info-row">
                                <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
                                <div>Rua Urussuí, 71 Cj. 43 <br> São Paulo, 04542050</div>
                            </div>
                            <div class="info-row">
                                <div class="info-icon"><i class="fas fa-phone-alt"></i></div>
                                <div><a href="tel:+551126110527">+55(11) 2611 0527</a> | <a href="tel:+551126110527">+55(11) 2611 0527</a></div>
                            </div>
                            <div class="info-row">
                                <div class="info-icon"><i class="fas fa-envelope"></i></div>
                                <div><a href="mailto:contato@majuassessoria.com.br">contato@majuassessoria.com.br</a></div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-col footer-links-col">
                        <h4>Acesso Rápido</h4>
                        <div class="footer-menu-grid">
                            <a href="index.html">Início</a>
                            <a href="quem-somos.html">Quem Somos</a>
                            <a href="solucoes.html">Soluções</a>
                            <a href="contato.html">Contato</a>
                            <a href="lgpd.html">LGPD</a>
                            <a href="denuncias.html">Denúncias</a>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="copyright">
                        &copy; ${new Date().getFullYear()} MAJU Assessoria e Consultoria Empresarial. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('maju-header', MajuHeader);
customElements.define('maju-footer', MajuFooter);
