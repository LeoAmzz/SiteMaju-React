import React, { useRef, useState } from 'react';

const LGPD = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form.current);
        if (!formData.get('empresa') || !formData.get('nome') || !formData.get('email') || !formData.get('mensagem')) {
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            } else {
                console.error('FAILED...', response.statusText);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            console.error('FAILED...', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

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
                        <form className="contact-form" ref={form} onSubmit={sendEmail}>
                            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />
                            <input type="hidden" name="subject" value="Nova Solicitação LGPD - MAJU" />
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
                                <button type="submit" className="btn btn-primary" style={{ padding: '15px 50px' }} disabled={status === 'loading'}>
                                    {status === 'loading' ? 'Enviando...' : 'Enviar Solicitação'}
                                </button>
                                {status === 'success' && <p style={{ color: 'green', marginTop: '10px' }}>Solicitação enviada com sucesso!</p>}
                                {status === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Erro ao enviar. Tente novamente.</p>}
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default LGPD;
