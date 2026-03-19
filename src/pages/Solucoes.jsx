import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/contato" className="btn btn-sol-yellow">
              Fale com nossos especialistas
            </Link>
          </div>
          <div className="solutions-hero-img">
            <img src="/Imagens/Soluções/Soluções1.png" alt="Soluções MAJU" />
          </div>
        </div>
      </section>

      <section className="service-section service-left bg-cream">
        <div className="container service-grid">
          <div className="service-image">
            <img
              src="/Imagens/Soluções/Soluções2.png"
              alt="Recuperação de Recursos Financeiros"
            />
          </div>
          <div className="service-content">
            <h2>Recuperação de Recursos Financeiros</h2>
            <p>
              Na MAJU Assessoria, mapeamos de forma sistemática os valores
              vinculados aos nossos clientes como depósitos judiciais, saldos
              remanescentes e créditos esquecidos que já estão aptos a resgate.
              <br />O resultado é direto: caixa que retorna para a empresa e receita
              adicional mensurável, sem ruído operacional e com relatórios
              transparentes que comprovam o avanço de ponta a ponta.
            </p>
            <Link to="/contato" className="btn btn-sol-dark">
              Contrate agora
            </Link>
          </div>
        </div>
      </section>

      <section className="service-section service-right bg-white">
        <div className="container service-grid">
          <div className="service-image">
            <img
              src="/Imagens/Soluções/Soluções3.png"
              alt="Conciliação Bancária"
            />
          </div>
          <div className="service-content">
            <h2>Conciliação Bancária</h2>
            <p>
              A equipe da MAJU atua na identificação das origens dos créditos
              oriundos das Justiças Federal, Estadual e Trabalhista ainda
              pendentes de baixa contábil. <br />Para satisfação dos nossos clientes e
              para orgulho do nosso time, o sucesso do trabalho que prestamos
              alcança uma média de até 95%.
            </p>
            <Link to="/contato" className="btn btn-sol-yellow">
              Contrate agora
            </Link>
          </div>
        </div>
      </section>

      <section className="service-section service-left bg-cream">
        <div className="container service-grid">
          <div className="service-image">
            <img
              src="/Imagens/Soluções/Soluções4.png"
              alt="Conciliação de Garantia"
            />
          </div>
          <div className="service-content">
            <h2>Conciliação de Garantia</h2>
            <p>
              Visando as boas práticas contábeis, a Conciliação de Garantia é
              essencial, pois ela traz à luz a documentação necessária para as
              baixas contábeis de forma segura, como foi determinado pelo Juízo
              do Processo. <br/>A Conciliação de Garantia também permite que as
              reversões das provisões sejam feitas de maneira transparente e
              segura para a empresa. A finalidade é identificar os beneficiários
              dos levantamentos.
            </p>
            <Link to="/contato" className="btn btn-sol-dark">
              Contrate agora
            </Link>
          </div>
        </div>
      </section>

      <section className="service-section service-right bg-white">
        <div className="container service-grid">
          <div className="service-image">
            <img
              src="/Imagens/Soluções/Soluções5.png"
              alt="Dados Qualificados"
            />
          </div>
          <div className="service-content">
            <h2>Dados Qualificados de Depósitos Judiciais</h2>
            <p>
              Geramos relatório informativo sobre os ativos rastreados em
              processos cujos clientes constam como parte no polo passivo.
            </p>
            <Link to="/contato" className="btn btn-sol-yellow">
              Contrate agora
            </Link>
          </div>
        </div>
      </section>

      <section className="service-section service-left bg-cream">
        <div className="container service-grid">
          <div className="service-image">
            <img
              src="/Imagens/Soluções/Soluções6.png"
              alt="Compensação de Alvarás Judiciais"
            />
          </div>
          <div className="service-content">
            <h2>Compensação de Alvarás Judiciais</h2>
            <p>
              Destravamos os alvarás que estão parados e entregamos resultados
              com agilidade e precisão.
            </p>
            <Link to="/contato" className="btn btn-sol-dark">
              Contrate agora
            </Link>
          </div>
        </div>
      </section>

      <section className="service-section service-right bg-white">
        <div className="container service-grid">
          <div className="service-image">
            <img
              src="/Imagens/Soluções/Soluções7.png"
              alt="Soluções Personalizadas"
            />
          </div>
          <div className="service-content">
            <h2>Soluções Personalizadas</h2>
            <p>
              Nosso time de especialistas cria soluções sob medida,
              transformando cada desafio em um projeto único.
            </p>
            <Link to="/contato" className="btn btn-sol-yellow">
              Contrate agora
            </Link>
          </div>
        </div>
      </section>

      <section className="service-section service-left bg-cream">
        <div className="container service-grid">
          <div className="service-image">
            <img
              src="/Imagens/Soluções/Soluções8.png"
              alt="Expertise e Dedicação"
            />
          </div>
          <div className="service-content">
            <h2>Expertise e Dedicação</h2>
            <p>
              O sucesso da gestão dos seus depósitos judiciais começa com um
              clique. Converse com nossos especialistas e descubra a melhor
              solução para sua empresa
            </p>
            <Link to="/contato" className="btn btn-sol-dark">
              Contrate agora
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solucoes;
