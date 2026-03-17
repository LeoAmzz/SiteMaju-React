import React, { useRef, useState } from 'react';

const Denuncias = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form.current);
        if (!formData.get('assunto') || !formData.get('mensagem')) {
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
            <section className="contact-hero" style={{ backgroundColor: 'var(--dark-blue)', color: 'var(--white)', paddingBottom: '60px' }}>
                <div className="container">
                    <h1 style={{ color: 'var(--white)', fontFamily: 'var(--font-serif)' }}>Canal de Denúncias</h1>
                    <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>Espaço seguro, sigiloso e anônimo para reportar condutas que transgridam nossos princípios éticos ou a legislação vigente.</p>
                </div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--light-beige)', position: 'relative' }}>
                <div className="container contact-container" style={{ maxWidth: '800px', flexDirection: 'column', background: 'transparent', boxShadow: 'none' }}>
                    
                    <div style={{ backgroundColor: 'var(--white)', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                        
                        <div style={{ padding: '40px', borderBottom: '1px solid #eee', textAlign: 'center' }}>
                            <h2 style={{ fontFamily: 'var(--font-sans)', color: 'var(--primary-brown)', marginBottom: '15px' }}>Sua identidade está protegida</h2>
                            <p style={{ color: 'var(--gray-text)', lineHeight: 1.6 }}>
                                A MAJU Assessoria preza pela transparência e integridade. Este canal é estritamente anônimo. 
                                Utilize este formulário de forma responsável para reportar quaisquer irregularidades percebidas nas operações que envolvam colaboradores, clientes ou fornecedores.
                            </p>
                        </div>

                        <div className="contact-form-wrapper" style={{ padding: '40px' }}>
                            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />
                                
                                {/* Início: Honeypot Anti-Bot Web3Forms */}
                                <input type="text" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                                {/* Fim: Honeypot */}

                                <input type="hidden" name="subject" value="[DENÚNCIA ANÔNIMA] - MAJU" />
                                
                                <div className="form-group full-width">
                                    <label htmlFor="assunto">Assunto da Denúncia</label>
                                    <input type="text" id="assunto" name="assunto" placeholder="Ex: Quebra de compliance, assédio, fraude..." required style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', border: '1px solid #e0e0e0' }} />
                                </div>
                                
                                <div className="form-group full-width">
                                    <label htmlFor="mensagem">Detalhes da Ocorrência</label>
                                    <textarea id="mensagem" name="mensagem" rows="6" placeholder="Por favor, forneça o máximo possível de detalhes: o que aconteceu, quando, onde e quem esteve envolvido. Não é necessário se identificar." required style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', border: '1px solid #e0e0e0' }}></textarea>
                                </div>
                                
                                <div className="form-submit" style={{ textAlign: 'center', marginTop: '30px' }}>
                                    <button type="submit" className="btn btn-dark" style={{ padding: '15px 40px', width: '100%' }} disabled={status === 'loading'}>
                                        {status === 'loading' ? 'Enviando...' : 'Enviar Denúncia Anônima'}
                                    </button>
                                    {status === 'success' && <p style={{ color: 'green', marginTop: '15px', fontWeight: 'bold' }}>Denúncia enviada com sucesso de forma segura e anônima!</p>}
                                    {status === 'error' && <p style={{ color: 'red', marginTop: '15px' }}>Erro ao enviar. Tente novamente.</p>}
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
};

export default Denuncias;
