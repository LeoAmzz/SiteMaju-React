import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // --- Testimonials State & Logic ---
    const testimonials = [
        {
            quote: "A equipe da MAJU Assessoria demonstra profundo domínio no rastreamento e recuperação de valores residuais em ações trabalhistas e cíveis arquivadas. Com um trabalho altamente organizado, ágil e especializado, a MAJU tem contribuído de forma decisiva para a eficiência dos nossos processos internos... Estamos extremamente satisfeitos com os resultados obtidos e reconhecemos o valor estratégico que a MAJU Assessoria agrega ao nosso negócio desde 04/2023.",
            name: "Carla Lavorato Alves",
            role: "Departamento Financeiro, Grupo Casas Bahia"
        },
        {
            quote: "A MAJU Assessoria é, sem dúvida, uma importante parceira. O nível de excelência e a celeridade na prestação dos serviços de rastreamento de saldos recursais e judiciais são notáveis. A MAJU se tornou um braço essencial do nosso Departamento Jurídico, obtendo êxito no mapeamento e recuperação de valores de depósitos judiciais. A expertise deles facilita nosso controle e gestão, sendo um diferencial estratégico para o nosso segmento.",
            name: "Joana Maria F. de Magalhães",
            role: "Departamento Jurídico, Banco Rural S/A"
        },
        {
            quote: "Desde dezembro de 2022, a Citrosuco conta com o suporte da MAJU Assessoria na execução da Conciliação Contábil relacionada a créditos judiciais. A atuação da MAJU tem se mostrado consistente e tecnicamente embasada... Esse trabalho tem contribuído de forma concreta para a redução de riscos, correção de pendências históricas e maior segurança nas auditorias. Além disso, a MAJU tem facilitado a integração entre as áreas Jurídica, Contábil e Financeira.",
            name: "Juliana Mandu Gandra",
            role: "Legal Ops, Grupo Citrosuco"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isHovered, testimonials.length]);

    const handleNext = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // --- Brands Logic ---
    const brands = [
        { src: "/Imagens/logos/Banco Votorantim logo.png", alt: "Banco Votorantim" },
        { src: "/Imagens/logos/Banco Rural logo.png", alt: "Banco Rural" },
        { src: "/Imagens/logos/Banco Pine logo.png", alt: "Banco Pine" },
        { src: "/Imagens/logos/Itau logo.png", alt: "Itaú" },
        { src: "/Imagens/logos/eliane.png", alt: "Banco Industrial do Brasil" },
        { src: "/Imagens/logos/fedex.png", alt: "fedex" },
        { src: "/Imagens/logos/coca-cola.png", alt: "coca-cola" }
    ];

    const brandsTrackRef = useRef(null);

    const handleBrandNext = () => {
        if (brandsTrackRef.current) {
            brandsTrackRef.current.style.animation = 'none';
            const firstChild = brandsTrackRef.current.firstElementChild;
            brandsTrackRef.current.appendChild(firstChild);
            // Trigger reflow to restart animation
            void brandsTrackRef.current.offsetWidth;
            brandsTrackRef.current.style.animation = 'scroll-brands 20s linear infinite';
        }
    };

    const handleBrandPrev = () => {
        if (brandsTrackRef.current) {
            brandsTrackRef.current.style.animation = 'none';
            const lastChild = brandsTrackRef.current.lastElementChild;
            brandsTrackRef.current.prepend(lastChild);
            // Trigger reflow
            void brandsTrackRef.current.offsetWidth;
            brandsTrackRef.current.style.animation = 'scroll-brands 20s linear infinite';
        }
    };

    return (
        <main>
            <section className="hero">
                <div className="container hero-row">
                    <div className="hero-text">
                        <h1>
                            <span className="line1">Transformamos</span>
                            <span className="highlight">ATIVOS</span>
                            <span className="highlight">JUDICIAIS</span>
                            <span className="line3">em fluxo de caixa</span>
                        </h1>
                        <p>
                            Com tecnologia de ponta e expertise em rastreamento e recuperação, auxiliamos empresas a otimizar seu tempo, capital e esforço humano na busca e resgate de valores junto ao Judiciário.
                        </p>
                        <Link to="/contato" className="btn btn-primary">Fale com nossos especialistas</Link>
                    </div>
                    <div className="hero-curr-page">
                        <img src="/Imagens/Circulo amarelo.png" alt="" className="circle-bg-img" />
                        <img src="/Imagens/portrait-female-lawyer-formal-suit-with-clipboard (3)-Photoroom 1.png" alt="Executiva MAJU" className="hero-img" />
                    </div>
                </div>
            </section>

            <section className="section-padding solutions" id="solucoes">
                <div className="container solutions-grid">
                    <div className="solutions-text">
                        <h2>Somos especialistas na Recuperação e Conciliação de Depósitos Judiciais no Brasil.</h2>
                        <p>
                            A bússola que indicará o caminho certo para a gestão de seus depósitos. Oferecemos soluções completas e atuamos sempre com remuneração exclusivamente vinculada ao êxito (success fee).
                        </p>
                    </div>
                    <div className="cards-grid">
                        <div className="card">
                            <div className="card-icon">
                                <img src="/Imagens/icons8-wallet-100 1.png" alt="Recuperação" />
                            </div>
                            <h3>Recuperação de Depósitos Judiciais</h3>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <img src="/Imagens/icons8-handshake-100 1.png" alt="Garantias" />
                            </div>
                            <h3>Conciliação de Garantias</h3>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <img src="/Imagens/icons8-bank-building-100 1.png" alt="Bancária" />
                            </div>
                            <h3>Conciliação Bancária</h3>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <img src="/Imagens/icons8-lock-orientation-100 1.png" alt="Bloqueios" />
                            </div>
                            <h3>Conciliação de Bloqueios Judiciais</h3>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <img src="/Imagens/icons8-certificate-100 1.png" alt="Alvarás" />
                            </div>
                            <h3>Compensação de Alvarás Judiciais</h3>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <img src="/Imagens/icons8-database-search-96 1.png" alt="Dados" />
                            </div>
                            <h3>Dados Qualificados de Depósitos Judiciais</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="brands">
                <div className="container">
                    <h3>Marcas que confiam na MAJU</h3>
                    <div className="brands-wrapper">
                        <button className="brands-nav brands-prev" onClick={handleBrandPrev}><i className="fas fa-chevron-left"></i></button>
                        <div className="brands-slider">
                            {/* Duplicate array for infinite scroll CSS effect */}
                            <div className="brands-track" ref={brandsTrackRef}>
                                {[...brands, ...brands].map((brand, i) => (
                                    <div key={i} className="brand-item" aria-hidden={i >= brands.length ? "true" : "false"}>
                                        <img src={brand.src} alt={brand.alt} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="brands-nav brands-next" onClick={handleBrandNext}><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </section>

            <section className="section-padding history" style={{ backgroundImage: "url('/Imagens/Banner Gustavo.png')" }}>
                <div className="container history-container">
                    <div className="history-content">
                        <div className="history-bar"></div>
                        <h2>Conheça Nossa História</h2>
                        <p>
                            A MAJU Assessoria e Consultoria Empresarial foi fundada em 2001 por Luiz Gustavo Vasconcellos e, desde 2016, atua no rastreamento, recuperação e conciliação de depósitos judiciais.
                        </p>
                        <div className="history-list">
                            <div className="history-col">
                                <div className="history-item"><i className="fas fa-check"></i> Experiência</div>
                                <div className="history-item"><i className="fas fa-check"></i> Profissionalismo</div>
                                <div className="history-item"><i className="fas fa-check"></i> Confiabilidade</div>
                            </div>
                            <div className="history-col">
                                <div className="history-item"><i className="fas fa-check"></i> Resultados</div>
                                <div className="history-item"><i className="fas fa-check"></i> Qualificação</div>
                                <div className="history-item"><i className="fas fa-check"></i> Atendimento</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding numbers">
                <div className="container">
                    <h2>Nossos Números</h2>
                    <p className="numbers-subtitle">Nossa conquista na jornada retratada em números</p>
                    <div className="numbers-grid">
                        <div className="number-item">
                            <h3>+500</h3>
                            <p>Clientes</p>
                        </div>
                        <div className="number-item">
                            <h3>+10M</h3>
                            <p>CNPJs analisados</p>
                        </div>
                        <div className="number-item">
                            <h3>+10</h3>
                            <p>Anos de experiência</p>
                        </div>
                        <div className="number-item">
                            <h3>+6B</h3>
                            <p>saldos rastreados</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding testimonials" id="depoimentos">
                <div className="container">
                    <div className="testimonials-header">
                        <h2>O que dizem nossos clientes</h2>
                        <p className="section-subtitle">A confiança de quem já transformou ativos em resultados</p>
                    </div>

                    <div 
                        className="testimonial-carousel-container"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <button className="carousel-btn prev-btn" onClick={handlePrev}><i className="fas fa-chevron-left"></i></button>
                        
                        <div className="testimonial-track-container">
                            <ul 
                                className="testimonial-track" 
                                style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease' }}
                            >
                                {testimonials.map((t, index) => (
                                    <li key={index} className={`testimonial-slide ${index === currentSlide ? 'current-slide' : ''}`}>
                                        <div className="testimonial-card">
                                            <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                            <blockquote>"{t.quote}"</blockquote>
                                            <div className="client-info">
                                                <div className="client-details">
                                                    <cite>{t.name}</cite>
                                                    <span className="client-role">{t.role}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="carousel-btn next-btn" onClick={handleNext}><i className="fas fa-chevron-right"></i></button>
                    </div>

                    <div className="carousel-nav">
                        {testimonials.map((_, i) => (
                            <button 
                                key={i} 
                                className={`carousel-indicator ${i === currentSlide ? 'current-slide' : ''}`}
                                onClick={() => setCurrentSlide(i)}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta" style={{ backgroundImage: "url('/Imagens/Default_bookshelf_with_books_in_a_highly_realistic_law_office_3.png')" }}>
                <div className="container cta-content">
                    <h2>Como podemos te ajudar?</h2>
                    <Link to="/contato" className="btn btn-white">Fale Conosco</Link>
                </div>
            </section>
        </main>
    );
};

export default Home;
