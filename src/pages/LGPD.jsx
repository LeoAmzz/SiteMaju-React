import React from 'react';

const LGPD = () => {
    return (
        <main>
            <section className="contact-hero">
                <div className="container">
                    <h1>Canal LGPD</h1>
                    <p>Gestão de solicitações referentes à Lei Geral de Proteção de Dados.</p>
                </div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--light-beige)' }}>
                <div className="container contact-container" style={{ maxWidth: '900px', flexDirection: 'column' }}>
                    
                    <div style={{ padding: '40px', backgroundColor: 'var(--white)', borderBottom: '2px solid #f0f0f0' }}>
                        <h2 style={{ fontFamily: 'var(--font-sans)', color: 'var(--primary-brown)', marginBottom: '20px' }}>Privacidade e Proteção de Dados</h2>
                        <p style={{ color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: '15px', textAlign: 'justify' }}>
                            Este é o canal oficial dedicado aos nossos clientes e parceiros (na qualidade de Controladores de Dados) para a gestão de solicitações referentes à Lei Geral de Proteção de Dados (LGPD).
                        </p>
                        <p style={{ color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: '15px', textAlign: 'justify' }}>
                            A <strong>MAJU Assessoria & Consultoria</strong> atua com seriedade no papel de Operadora dos dados confiados por sua empresa.
                        </p>
                        <p style={{ color: 'var(--gray-text)', lineHeight: 1.8, textAlign: 'justify' }}>
                            Se você é o representante legal ou o Encarregado de Dados (DPO) de uma empresa cliente e precisa formalizar uma requisição (como a correção ou remoção de dados de um titular vinculado à sua organização ou o descarte de dados ao término de um contrato), por favor, utilize o formulário abaixo para iniciar o processo de validação e atendimento.
                        </p>
                    </div>

                    <div className="contact-form-wrapper" style={{ padding: '40px', width: '100%' }}>
                        <form className="contact-form" action="#" method="POST">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="empresa">Empresa</label>
                                    <input type="text" id="empresa" name="empresa" placeholder="Nome da empresa..." required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nome">Nome Completo</label>
                                    <input type="text" id="nome" name="nome" placeholder="Seu nome..." required />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">E-mail Corporativo</label>
                                    <input type="email" id="email" name="email" placeholder="Seu e-mail..." required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telefone">Telefone</label>
                                    <input type="tel" id="telefone" name="telefone" placeholder="Seu telefone..." />
                                </div>
                            </div>
                            
                            <div className="form-group full-width">
                                <label htmlFor="mensagem">Mensagem / Requisição</label>
                                <textarea id="mensagem" name="mensagem" rows="5" placeholder="Descreva sua solicitação da LGPD em detalhes..." required></textarea>
                            </div>
                            
                            <div className="form-submit" style={{ textAlign: 'center' }}>
                                <button type="submit" className="btn btn-primary" style={{ padding: '15px 50px' }}>Enviar Solicitação</button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default LGPD;
