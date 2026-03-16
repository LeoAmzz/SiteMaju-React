import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mockPosts = [
    {
        id: 1,
        title: 'Recuperação de Depósitos Judiciais: O que você precisa saber',
        excerpt: 'Entenda como a recuperação de ativos pode transformar o fluxo de caixa da sua empresa com estratégias jurídicas inteligentes.',
        date: '23 Jan, 2024',
        category: 'Jurídico',
        imageUrl: '/Imagens/Maju Journal/Journal1.jpg',
        author: 'Dra. Maria Júlia'
    },
    {
        id: 2,
        title: 'Tendências do Mercado Financeiro para 2024',
        excerpt: 'Uma análise detalhada das principais movimentações econômicas e como elas impactam o cenário jurídico-financeiro no Brasil.',
        date: '15 Jan, 2024',
        category: 'Tendências',
        imageUrl: '/Imagens/Maju Journal/Journal2.jpg',
        author: 'Equipe MAJU'
    },
    {
        id: 3,
        title: 'Como otimizar a gestão de garantias bancárias',
        excerpt: 'Dicas práticas para empresas que buscam eficiência na administração de garantias e redução de custos operacionais.',
        date: '10 Jan, 2024',
        category: 'Dicas',
        imageUrl: '/Imagens/Maju Journal/Journal3.jpg', 
        author: 'Carlos Eduardo'
    },
    {
        id: 4,
        title: 'Impacto das novas regulações no setor corporativo',
        excerpt: 'Fique por dentro das alterações legislativas recentes e como preparar seu negócio para o compliance.',
        date: '05 Jan, 2024',
        category: 'Jurídico',
        imageUrl: '/Imagens/Maju Journal/Journal1.jpg',
        author: 'Dra. Maria Júlia'
    },
     {
        id: 5,
        title: 'Lifestyle Corporativo: Equilíbrio e Alta Performance',
        excerpt: 'Como manter a saúde mental e a produtividade em ambientes de alta pressão no mundo jurídico.',
        date: '28 Dez, 2023',
        category: 'Lifestyle',
        imageUrl: '/Imagens/Maju Journal/Journal2.jpg',
        author: 'Ana Clara'
    },
    {
        id: 6,
        title: 'Estratégias para Conciliação de Bloqueios Judiciais',
        excerpt: 'Métodos eficazes para resolver bloqueios de forma célere e liberar recursos vitais para a operação.',
        date: '20 Dez, 2023',
        category: 'Jurídico',
        imageUrl: '/Imagens/Maju Journal/Journal3.jpg',
        author: 'Equipe MAJU'
    }
];

const Blog = () => {
    const [currentCategory, setCurrentCategory] = useState('all');
    const [displayedPosts, setDisplayedPosts] = useState(mockPosts);

    const handleFilter = (category) => {
        setCurrentCategory(category);
        if (category === 'all') {
            setDisplayedPosts(mockPosts);
        } else {
            setDisplayedPosts(mockPosts.filter(post => post.category === category));
        }
    };

    const handleLoadMore = () => {
        // Mock load more by duplicating the existing list with new IDs
        const morePosts = displayedPosts.map(p => ({ ...p, id: p.id + 100 }));
        setDisplayedPosts([...displayedPosts, ...morePosts]);
    };

    return (
        <main>
            <section className="blog-hero">
                <div className="container">
                    <span className="eyebrow">Insights & Notícias</span>
                    <h1>MAJU Journal</h1>
                    <p>Fique por dentro das principais novidades institucionais, eventos exclusivos e atualizações oficiais sobre a trajetória da MAJU.</p>
                </div>
            </section>

            <section className="section-padding blog-content">
                <div className="container">
                    <div className="blog-filters">
                        <button className={`filter-btn ${currentCategory === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>Todos</button>
                        <button className={`filter-btn ${currentCategory === 'Tendências' ? 'active' : ''}`} onClick={() => handleFilter('Tendências')}>Tendências</button>
                        <button className={`filter-btn ${currentCategory === 'Dicas' ? 'active' : ''}`} onClick={() => handleFilter('Dicas')}>Dicas</button>
                        <button className={`filter-btn ${currentCategory === 'Lifestyle' ? 'active' : ''}`} onClick={() => handleFilter('Lifestyle')}>Lifestyle</button>
                        <button className={`filter-btn ${currentCategory === 'Jurídico' ? 'active' : ''}`} onClick={() => handleFilter('Jurídico')}>Jurídico</button>
                    </div>

                    <div className="blog-grid" id="blog-grid">
                        {displayedPosts.map(post => (
                            <article className="blog-card" key={post.id}>
                                <div className="blog-card-img-wrapper">
                                    <img src={post.imageUrl} alt={post.title} loading="lazy" />
                                </div>
                                <div className="blog-card-content">
                                    <div className="blog-category">{post.category}</div>
                                    <h3><a href="#">{post.title}</a></h3>
                                    <p>{post.excerpt}</p>
                                    <div className="blog-footer">
                                        <time dateTime="2024-01-23">{post.date}</time>
                                        <a href="#" className="read-more">Ler Mais <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="load-more-container">
                        <button id="load-more-btn" className="btn btn-outline" onClick={handleLoadMore}>Carregar Mais</button>
                    </div>
                </div>
            </section>

            <section className="cta" style={{ backgroundImage: "url('/Imagens/Default_bookshelf_with_books_in_a_highly_realistic_law_office_3.png')" }}>
                <div className="container cta-content">
                    <h2>Mantenha-se informado</h2>
                    <p style={{ color: 'white', marginBottom: '20px' }}>Como podemos te ajudar?</p>
                    <Link to="/contato" className="btn btn-white">Fale conosco</Link>
                </div>
            </section>
        </main>
    );
};

export default Blog;
