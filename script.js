document.addEventListener('DOMContentLoaded', function() {

    // Add necessary CSS for the mobile menu via JS or assume it's in CSS
    // Let's verify style.css handling of .mobile-active. 
    // I noticed I didn't explicitly add .mobile-active in style.css for the nav. Let's add it via a style block injection or just rely on the user to fix if I missed it? 
    // Better to be robust: I'll check if I can inject styles or I should have added it.
    // I missed the .mobile-active styles in the previous CSS step. I will create a small correction step after this to update style.css or inject it here.
    // For now, I'll write the JS structure.

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navbar.classList.contains('mobile-active')) {
                navbar.classList.remove('mobile-active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Testimonial Carousel ---
    const track = document.querySelector('.testimonial-track');
    
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');
        const dotsNav = document.querySelector('.carousel-nav');
        // Ensure dotsNav exists before getting children
        const dots = dotsNav ? Array.from(dotsNav.children) : [];

        let currentIndex = 0;
        let autoplayInterval;

        const updateCarousel = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
            
            // Update dots
            dots.forEach(dot => dot.classList.remove('current-slide'));
            if (dots[index]) dots[index].classList.add('current-slide');
            
            currentIndex = index;
        };

        const moveToNextSlide = () => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0;
            }
            updateCarousel(nextIndex);
        };

        const moveToPrevSlide = () => {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                prevIndex = slides.length - 1;
            }
            updateCarousel(prevIndex);
        };

        // Event Listeners
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                moveToNextSlide();
                resetAutoplay();
            });
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                moveToPrevSlide();
                resetAutoplay();
            });
        }

        if (dots.length > 0) {
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    updateCarousel(index);
                    resetAutoplay();
                });
            });
        }

        // Autoplay Logic
        const startAutoplay = () => {
            clearInterval(autoplayInterval);
            autoplayInterval = setInterval(moveToNextSlide, 5000); 
        };

        const stopAutoplay = () => {
            clearInterval(autoplayInterval);
        };

        const resetAutoplay = () => {
            stopAutoplay();
            startAutoplay();
        };

        // Pause on Hover
        const carouselContainer = document.querySelector('.testimonial-carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoplay);
            carouselContainer.addEventListener('mouseleave', startAutoplay);
        }

        // Initialize
        startAutoplay();
    }

});

// --- Blog Functionality ---
document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return; // Only run on blog page

    const mockPosts = [
        {
            id: 1,
            title: 'Recuperação de Depósitos Judiciais: O que você precisa saber',
            excerpt: 'Entenda como a recuperação de ativos pode transformar o fluxo de caixa da sua empresa com estratégias jurídicas inteligentes.',
            date: '23 Jan, 2024',
            category: 'Jurídico',
            imageUrl: 'Imagens/Maju Journal/Journal1.jpg',
            author: 'Dra. Maria Júlia'
        },
        {
            id: 2,
            title: 'Tendências do Mercado Financeiro para 2024',
            excerpt: 'Uma análise detalhada das principais movimentações econômicas e como elas impactam o cenário jurídico-financeiro no Brasil.',
            date: '15 Jan, 2024',
            category: 'Tendências',
            imageUrl: 'Imagens/Maju Journal/Journal2.jpg',
            author: 'Equipe MAJU'
        },
        {
            id: 3,
            title: 'Como otimizar a gestão de garantias bancárias',
            excerpt: 'Dicas práticas para empresas que buscam eficiência na administração de garantias e redução de custos operacionais.',
            date: '10 Jan, 2024',
            category: 'Dicas',
            imageUrl: 'Imagens/Maju Journal/Journal3.jpg', 
            author: 'Carlos Eduardo'
        },
        {
            id: 4,
            title: 'Impacto das novas regulações no setor corporativo',
            excerpt: 'Fique por dentro das alterações legislativas recentes e como preparar seu negócio para o compliance.',
            date: '05 Jan, 2024',
            category: 'Jurídico',
            imageUrl: 'Imagens/Maju Journal/Journal1.jpg',
            author: 'Dra. Maria Júlia'
        },
         {
            id: 5,
            title: 'Lifestyle Corporativo: Equilíbrio e Alta Performance',
            excerpt: 'Como manter a saúde mental e a produtividade em ambientes de alta pressão no mundo jurídico.',
            date: '28 Dez, 2023',
            category: 'Lifestyle',
            imageUrl: 'Imagens/Maju Journal/Journal2.jpg',
            author: 'Ana Clara'
        },
        {
            id: 6,
            title: 'Estratégias para Conciliação de Bloqueios Judiciais',
            excerpt: 'Métodos eficazes para resolver bloqueios de forma célere e liberar recursos vitais para a operação.',
            date: '20 Dez, 2023',
            category: 'Jurídico',
            imageUrl: 'Imagens/Maju Journal/Journal3.jpg',
            author: 'Equipe MAJU'
        }
    ];

    let displayedPosts = [...mockPosts]; 

    // Render Posts
    function renderPosts(posts) {
        blogGrid.innerHTML = '';
        
        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'blog-card';
            // Use date for accessibility time element
            article.innerHTML = `
                <div class='blog-card-img-wrapper'>
                    <img src='${post.imageUrl}' alt='${post.title}' loading='lazy'>
                </div>
                <div class='blog-card-content'>
                    <div class='blog-category'>${post.category}</div>
                    <h3><a href='#'>${post.title}</a></h3>
                    <p>${post.excerpt}</p>
                    <div class='blog-footer'>
                        <time datetime='2024-01-23'>${post.date}</time>
                        <a href='#' class='read-more'>Ler Mais <i class='fas fa-arrow-right'></i></a>
                    </div>
                </div>
            `;
            blogGrid.appendChild(article);
        });
    }

    // Filter Functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            if (category === 'all') {
                displayedPosts = [...mockPosts];
            } else {
                displayedPosts = mockPosts.filter(post => post.category === category);
            }
            
            renderPosts(displayedPosts);
        });
    });

    // Initial Render
    renderPosts(displayedPosts);

    // Load More (Mock functionality)
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Mock loading more posts
            const morePosts = mockPosts.map(p => ({...p, id: p.id + 100})); 
            displayedPosts = [...displayedPosts, ...morePosts];
            renderPosts(displayedPosts);
            // In a real scenario we might hide button if no more posts, here we just show functionality
        });
    }
});
