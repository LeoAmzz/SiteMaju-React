import React, { useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

const Blog = () => {
  const [currentCategory, setCurrentCategory] = useState("all");

  // Inicializar os posts com os dados provenientes do src/data/posts.js
  const [displayedPosts, setDisplayedPosts] = useState(
    [...posts].sort((a, b) => b.id - a.id),
  );

  const handleFilter = (category) => {
    setCurrentCategory(category);
    const sorted = [...posts].sort((a, b) => b.id - a.id);
    if (category === "all") {
      setDisplayedPosts(sorted);
    } else {
      setDisplayedPosts(sorted.filter((post) => post.category === category));
    }
  };

  const handleLoadMore = () => {
    // Exemplo: se tivesse mais dados a buscar, seria feito aqui.
    // Mantive a lógica simples já que possuímos 6 posts totais,
    // ou podemos usar a paginação caso o array de posts aumente futuramente.
    alert("Aqui conectaremos a nossa futura paginação!");
  };

  return (
    <main>
      <section className="blog-hero">
        <div className="container">
          <span className="eyebrow">Insights & Notícias</span>
          <h1>MAJU News</h1>
          <p>
            Fique por dentro das principais novidades institucionais, eventos
            exclusivos e atualizações oficiais sobre a trajetória da MAJU.
          </p>
        </div>
      </section>

      <section className="section-padding blog-content">
        <div className="container">
          <div className="blog-filters">
            <button
              className={`filter-btn ${currentCategory === "all" ? "active" : ""}`}
              onClick={() => handleFilter("all")}>
              Todos
            </button>
            <button
              className={`filter-btn ${currentCategory === "Novidades MAJU" ? "active" : ""}`}
              onClick={() => handleFilter("Novidades MAJU")}>
              Novidades MAJU
            </button>
            <button
              className={`filter-btn ${currentCategory === "Jurídico" ? "active" : ""}`}
              onClick={() => handleFilter("Jurídico")}>
              Jurídico
            </button>
            <button
              className={`filter-btn ${currentCategory === "Dicas" ? "active" : ""}`}
              onClick={() => handleFilter("Dicas")}>
              Dicas
            </button>
            <button
              className={`filter-btn ${currentCategory === "Responsabilidade Social" ? "active" : ""}`}
              onClick={() => handleFilter("Responsabilidade Social")}>
              Responsabilidade Social
            </button>
          </div>

          <div className="blog-grid" id="blog-grid">
            {displayedPosts.map((post) => (
              <article className="blog-card" key={post.id}>
                <div className="blog-card-img-wrapper">
                  <Link to={`/blog/${post.slug}`}>
                    <img src={post.imageUrl} alt={post.title} loading="lazy" />
                  </Link>
                </div>
                <div className="blog-card-content">
                  <div className="blog-category">{post.category}</div>
                  <h3>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-footer">
                    <time dateTime={post.date}>{post.date}</time>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      Ler Mais <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* <div className="load-more-container">
                        <button id="load-more-btn" className="btn btn-outline" onClick={handleLoadMore}>Carregar Mais</button>
                    </div> */}
        </div>
      </section>

      <section
        className="cta"
        style={{
          backgroundImage:
            "url('/Imagens/Default_bookshelf_with_books_in_a_highly_realistic_law_office_3.webp')",
        }}>
        <div className="container cta-content">
          <h2>Mantenha-se informado</h2>
          <p style={{ color: "white", marginBottom: "20px" }}>
            Como podemos te ajudar?
          </p>
          <Link to="/contato" className="btn btn-white">
            Fale conosco
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Blog;
