import React from 'react';

const QuemSomos = () => {
    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>QUEM SOMOS</h1>
                </div>
            </section>

            <section className="section-padding about-intro">
                <div className="container">
                    <div className="about-grid">
                        <div className="video-container">
                            <video controls autoPlay muted loop playsInline style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                <source src="/Imagens/VideoMaju.mp4" type="video/mp4" />
                                Seu navegador não suporta a tag de vídeo.
                            </video>
                        </div>
                        <div className="about-text">
                            <p>
                                A MAJU Assessoria e Consultoria Empresarial foi fundada em 2001 por Luiz Gustavo
                                Vasconcellos.
                                Desde 2016 se especializou no rastreamento, recuperação e conciliação de saldos residuais em
                                ações trabalhistas e cíveis arquivadas.
                            </p>
                            <p>
                                Nosso time é comprometido em otimizar tempo, capital e esforço humano das empresas na busca
                                de valores no Poder Judiciário.
                            </p>
                            <p>
                                Com atendimento especializado, a MAJU permite que clientes foquem nas demandas diárias
                                enquanto revisita e monetiza oportunidades não identificadas.
                            </p>
                        </div>
                    </div>
                    <div className="about-full-text">
                        <p>
                            Atuamos, também, nas conciliações bancária e de garantia depositadas em juízo. Localizamos
                            documentos necessários para baixa contábil dos créditos recebidos em contas correntes das
                            empresas, oriundos de processos trabalhistas, cíveis e federais ainda pendentes de
                            identificação.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding team">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '3rem' }}>Nosso Time</h2>

                    <div className="team-grid">
                        <div className="team-card">
                            <img src="/Imagens/Retrato/Gustavo.png" alt="Luiz Gustavo" />
                            <a href="#" className="icon-link"><i className="fas fa-external-link-alt"></i></a>
                            <div className="team-overlay">
                                <div className="team-name">Luiz Gustavo</div>
                                <span className="team-role">CEO</span>
                                <span className="team-bio">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <a href="#" className="linkedin-icon"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src="/Imagens/Retrato/Carol.png" alt="Ana Carolina" />
                            <a href="#" className="icon-link"><i className="fas fa-external-link-alt"></i></a>
                            <div className="team-overlay">
                                <div className="team-name">Ana Carolina</div>
                                <span className="team-role">COO</span>
                                <span className="team-bio">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <a href="#" className="linkedin-icon"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src="/Imagens/Retrato/Julia.png" alt="Julia" />
                            <a href="#" className="icon-link"><i className="fas fa-external-link-alt"></i></a>
                            <div className="team-overlay">
                                <div className="team-name">Julia</div>
                                <span className="team-role">Head Jurídico</span>
                                <span className="team-bio">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <a href="#" className="linkedin-icon"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src="/Imagens/Retrato/Mariana.png" alt="Mariana" />
                            <a href="#" className="icon-link"><i className="fas fa-external-link-alt"></i></a>
                            <div className="team-overlay">
                                <div className="team-name">Mariana</div>
                                <span className="team-role">Head Financeiro</span>
                                <span className="team-bio">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <a href="#" className="linkedin-icon"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src="/Imagens/Retrato/Silvio.png" alt="Silvio Helene" />
                            <a href="#" className="icon-link"><i className="fas fa-external-link-alt"></i></a>
                            <div className="team-overlay">
                                <div className="team-name">Silvio Helene</div>
                                <span className="team-role">Coordenador Jurídico</span>
                                <span className="team-bio">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <a href="#" className="linkedin-icon"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src="/Imagens/Retrato/STEPHANNE.png" alt="Stephanne" />
                            <a href="#" className="icon-link"><i className="fas fa-external-link-alt"></i></a>
                            <div className="team-overlay">
                                <div className="team-name">Stephanne</div>
                                <span className="team-role">Head Operacional</span>
                                <span className="team-bio">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <a href="#" className="linkedin-icon"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src="/Imagens/Retrato/Marina.png" alt="Marina Barros" />
                            <a href="#" className="icon-link"><i className="fas fa-external-link-alt"></i></a>
                            <div className="team-overlay">
                                <div className="team-name">Marina Barros</div>
                                <span className="team-role">Head Conciliação</span>
                                <span className="team-bio">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <a href="#" className="linkedin-icon"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src="/Imagens/Retrato/Rose.png" alt="Roseli Silvia" />
                            <a href="#" className="icon-link"><i className="fas fa-external-link-alt"></i></a>
                            <div className="team-overlay">
                                <div className="team-name">Roseli Silvia</div>
                                <span className="team-role">Administrativo</span>
                                <span className="team-bio">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <a href="#" className="linkedin-icon"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src="/Imagens/Retrato/Joao.png" alt="João Ribeiro" />
                            <a href="#" className="icon-link"><i className="fas fa-external-link-alt"></i></a>
                            <div className="team-overlay">
                                <div className="team-name">João Ribeiro</div>
                                <span className="team-role">Head de TI</span>
                                <span className="team-bio">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <a href="#" className="linkedin-icon"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default QuemSomos;
