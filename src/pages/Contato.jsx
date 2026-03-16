import React, { useRef, useState } from 'react';

const Contato = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form.current);
        if (!formData.get('nome') || !formData.get('sobrenome') || !formData.get('email')) {
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
                    <h1>Vamos conversar?</h1>
                    <p>Dúvidas ou observações? Agende uma conversa conosco!</p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container contact-container">
                    <div className="contact-info-card">
                        <h2>Informações de Contato</h2>
                        
                        <div className="contact-info-item">
                            <i className="fas fa-phone-alt"></i>
                            <span>+55 (11) 2611 0527 | +55 (11) 2611 0528</span>
                        </div>
                        
                        <div className="contact-info-item">
                            <i className="fas fa-envelope"></i>
                            <span>contato@majuassessoria.com.br</span>
                        </div>
                        
                        <div className="contact-info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <span>Rua Urussuí, 71 Cj. 43</span><br />
                                <span>São Paulo, 04542050</span>
                            </div>
                        </div>

                        <div className="contact-social">
                            <a href="#" className="linkedin-btn"><i className="fab fa-linkedin"></i></a>
                        </div>

                        <div className="contact-decoration">
                            <img src="/Imagens/Logo Maju Contato.png" alt="Decoração" className="contact-deco-img" />
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" ref={form} onSubmit={sendEmail}>
                            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />
                            <input type="hidden" name="subject" value="Novo Contato do Site - MAJU" />
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="nome">Nome</label>
                                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome..." required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sobrenome">Sobrenome</label>
                                    <input type="text" id="sobrenome" name="sobrenome" placeholder="Digite seu sobrenome..." required />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" name="email" placeholder="Digite seu e-mail..." required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telefone">Número de telefone</label>
                                    <input type="tel" id="telefone" name="telefone" placeholder="Digite seu número de telefone..." />
                                </div>
                            </div>
                            
                            <div className="form-group full-width">
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea id="mensagem" name="mensagem" rows="5" placeholder="Escreva sua mensagem..."></textarea>
                            </div>
                            
                            <div className="form-submit">
                                <button type="submit" className="btn-contact-submit" disabled={status === 'loading'}>
                                    {status === 'loading' ? 'Enviando...' : 'Enviar'}
                                </button>
                                {status === 'success' && <p style={{ color: 'green', marginTop: '10px' }}>Mensagem enviada com sucesso!</p>}
                                {status === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Erro ao enviar, verifique os campos e tente novamente.</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contato;
