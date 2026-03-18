import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

const PostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Busca o post no array tendo como base o slug da URL
  const post = posts.find((p) => p.slug === slug);

  // Rola para o topo da página sempre que abrir a rota
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Tela de fallback para posts inexistentes
  if (!post) {
    return (
      <main
        className="section-padding"
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--light-beige)",
        }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--primary-brown)",
              fontSize: "2.5rem",
              marginBottom: "20px",
            }}>
            Post não encontrado
          </h1>
          <p
            style={{
              color: "var(--gray-text)",
              marginBottom: "30px",
              fontSize: "1.1rem",
            }}>
            Desculpe, o artigo que você está procurando não existe ou foi
            removido.
          </p>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/blog");
            }}
            className="btn btn-primary"
            style={{ cursor: "pointer" }}>
            &larr; Voltar para o Blog
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{ backgroundColor: "var(--light-beige)", paddingBottom: "80px" }}>
      <section
        className="post-header"
        style={{ padding: "120px 0 40px", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                backgroundColor: "var(--primary-yellow)",
                color: "var(--dark-blue)",
                padding: "6px 16px",
                borderRadius: "30px",
                fontSize: "0.85rem",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}>
              {post.category}
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--primary-brown)",
              fontSize: "2.8rem",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}>
            {post.title}
          </h1>
          <div
            style={{
              color: "var(--gray-text)",
              fontSize: "1rem",
              fontWeight: "500",
            }}>
            <time>{post.date}</time> &nbsp;•&nbsp; <span>{post.author}</span>
          </div>
        </div>
      </section>

      <section className="post-content">
        <div className="container" style={{ maxWidth: "800px" }}>
          {post.videoUrl ? (
            <div
              style={{
                marginBottom: "40px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}>
              <video
                controls
                style={{ width: "100%", height: "auto", display: "block" }}
                poster={post.imageUrl}>
                <source src={post.videoUrl} type="video/mp4" />
                Seu navegador não suporta o player de vídeo.
              </video>
            </div>
          ) : (
            <div
              style={{
                marginBottom: "40px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}>
              <img
                src={post.imageUrl}
                alt={post.title}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          )}

          <div
            className="post-body"
            style={{
              color: "var(--gray-text)",
              lineHeight: "1.8",
              fontSize: "1.15rem",
              backgroundColor: "var(--white)",
              padding: "40px 50px",
              borderRadius: "15px",
              boxShadow: "0 5px 25px rgba(0,0,0,0.03)",
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/blog");
              }}
              className="btn btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}>
              &larr; Voltar para o Blog
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostPage;
