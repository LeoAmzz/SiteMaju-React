import React from 'react';
import { Link } from 'react-router-dom';

const Solucoes = () => {
    return (
        <main>
            <section className="solutions-hero">
                <div className="container">
                    <div className="solutions-hero-text">
                        <h1>As melhores soluções para a gestão de Depósitos Judiciais.</h1>
                        <p>
                            O rastreamento de valores residuais em demandas Trabalhistas e
                            Cíveis já encerradas e arquivadas, possibilita a recuperação de
                            ativos. Além disso, oferecemos a atualização de informações
                            jurídicas e contábeis que dão suporte a eventuais auditorias.
                            Cuidamos de todo o processo, garantimos tranquilidade e confiança
                            aos nossos clientes.
                        </p>
                        <Link to="/contato" className="btn btn-sol-yellow">Fale com nossos especialistas</Link>
                    </div>
                    <div className="solutions-hero-img">
                        <img src="/Imagens/Soluções/Soluções1.png" alt="Soluções MAJU" />
                    </div>
                </div>
            </section>

            <section className="service-section service-left bg-cream">
                <div className="container service-grid">
                    <div className="service-image">
                        <img src="/Imagens/Soluções/Soluções2.png" alt="Recuperação de Recursos Financeiros" />
                    </div>
                    <div className="service-content">
                        <h2>Recuperação de Recursos Financeiros</h2>
                        <p>
                            Identificamos e recuperamos valores esquecidos em processos
                            judiciais antigos, garantindo que sua empresa retome capital que
                            estava inativo.
                        </p>
                        <Link to="/contato" className="btn btn-sol-dark">Contrate agora</Link>
                    </div>
                </div>
            </section>

            <section className="service-section service-right bg-white">
                <div className="container service-grid">
                    <div className="service-image">
                        <img src="/Imagens/Soluções/Soluções3.png" alt="Conciliação Bancária" />
                    </div>
                    <div className="service-content">
                        <h2>Conciliação Bancária</h2>
                        <p>
                            Realizamos o cruzamento de dados financeiros para assegurar que
                            todos os depósitos e levantamentos estejam devidamente
                            contabilizados e justificados.
                        </p>
                        <Link to="/contato" className="btn btn-sol-yellow">Contrate agora</Link>
                    </div>
                </div>
            </section>

            <section className="service-section service-left bg-cream">
                <div className="container service-grid">
                    <div className="service-image">
                        <img src="/Imagens/Soluções/Soluções4.png" alt="Conciliação de Garantia" />
                    </div>
                    <div className="service-content">
                        <h2>Conciliação de Garantia</h2>
                        <p>
                            Gestão eficiente de garantias judiciais, permitindo a substituição
                            ou liberação de ativos bloqueados indevidamente ou em excesso.
                        </p>
                        <Link to="/contato" className="btn btn-sol-dark">Contrate agora</Link>
                    </div>
                </div>
            </section>

            <section className="service-section service-right bg-white">
                <div className="container service-grid">
                    <div className="service-image">
                        <img src="/Imagens/Soluções/Soluções5.png" alt="Dados Qualificados" />
                    </div>
                    <div className="service-content">
                        <h2>Dados Qualificados de Depósitos Judiciais</h2>
                        <p>
                            Fornecemos relatórios detalhados e saneados sobre seus depósitos
                            judiciais, facilitando auditorias e tomadas de decisão
                            estratégicas.
                        </p>
                        <Link to="/contato" className="btn btn-sol-yellow">Contrate agora</Link>
                    </div>
                </div>
            </section>

            <section className="service-section service-left bg-cream">
                <div className="container service-grid">
                    <div className="service-image">
                        <img src="/Imagens/Soluções/Soluções6.png" alt="Compensação de Alvarás Judiciais" />
                    </div>
                    <div className="service-content">
                        <h2>Compensação de Alvarás Judiciais</h2>
                        <p>
                            Agilizamos o levantamento de alvarás expedidos, garantindo que os
                            valores cheguem ao caixa da empresa no menor tempo possível.
                        </p>
                        <Link to="/contato" className="btn btn-sol-dark">Contrate agora</Link>
                    </div>
                </div>
            </section>

            <section className="service-section service-right bg-white">
                <div className="container service-grid">
                    <div className="service-image">
                        <img src="/Imagens/Soluções/Soluções7.png" alt="Soluções Personalizadas" />
                    </div>
                    <div className="service-content">
                        <h2>Soluções Personalizadas</h2>
                        <p>
                            Desenvolvemos estratégias sob medida para a realidade jurídica e
                            financeira do seu negócio, maximizando resultados.
                        </p>
                        <Link to="/contato" className="btn btn-sol-yellow">Contrate agora</Link>
                    </div>
                </div>
            </section>

            <section className="service-section service-left bg-cream">
                <div className="container service-grid">
                    <div className="service-image">
                        <img src="/Imagens/Soluções/Soluções8.png" alt="Expertise e Dedicação" />
                    </div>
                    <div className="service-content">
                        <h2>Expertise e Dedicação</h2>
                        <p>
                            Nossa equipe multidisciplinar une conhecimento jurídico e
                            financeiro para entregar excelência em cada etapa do processo.
                        </p>
                        <Link to="/contato" className="btn btn-sol-dark">Contrate agora</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Solucoes;
