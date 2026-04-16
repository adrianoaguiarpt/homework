// ========== PRODUTOS ==========
const products = [
    { id: 1, name: "Capa Magnética Premium", category: "KIMASTER", price: 49.90, oldPrice: 79.90, icon: "fas fa-mobile-alt", image: "images/capa-kimaster.png" },
    { id: 2, name: "Película de Vidro Premium", category: "KIMASTER", price: 29.90, icon: "fas fa-mobile-screen", image: "images/pelicula-kimaster.png" },
    { id: 3, name: "Fone Bluetooth Pro", category: "FAM", price: 79.90, oldPrice: 129.90, icon: "fas fa-headphones", image: "images/fone-fam.png" },
    { id: 4, name: "Caixa de Som Bluetooth", category: "FAM", price: 149.90, oldPrice: 199.90, icon: "fas fa-music", image: "images/caixa-fam.png" },
    { id: 5, name: "Carregador Rápido 20W", category: "BMAX", price: 39.90, icon: "fas fa-bolt", image: "images/carregador-bmax.png" },
    { id: 6, name: "Power Bank 20000mAh", category: "BMAX", price: 89.90, oldPrice: 119.90, icon: "fas fa-battery-full", image: "images/powerbank-bmax.png" },
    { id: 7, name: "Película de Vidro HD", category: "PEINING", price: 12.90, icon: "fas fa-mobile-screen", image: "images/pelicula-peining.png" },
    { id: 8, name: "Película Privacidade", category: "PEINING", price: 24.90, oldPrice: 39.90, icon: "fas fa-eye-slash", image: "images/pelicula-privacidade.png" }
];

// ========== MARCAS E CATEGORIAS ==========
const marcas = [
    {
        nome: "KIMASTER",
        imagem: "images/kimaster-logo.png",
        fallbackIcon: "fas fa-mobile-alt",
        categorias: [
            { nome: "Fones", imagem: "images/kimaster-fones.png", icone: "fas fa-headphones", count: 24 },
            { nome: "Capas", imagem: "images/kimaster-capas.png", icone: "fas fa-mobile-alt", count: 18 },
            { nome: "Cabos", imagem: "images/kimaster-cabos.png", icone: "fas fa-plug", count: 15 },
            { nome: "Carregadores", imagem: "images/kimaster-carregadores.png", icone: "fas fa-bolt", count: 12 }
        ]
    },
    {
        nome: "FAM",
        imagem: "images/fam-logo.png",
        fallbackIcon: "fas fa-headphones",
        categorias: [
            { nome: "Fones Bluetooth", imagem: "images/fam-fones.png", icone: "fas fa-headphones", count: 30 },
            { nome: "Caixas de Som", imagem: "images/fam-caixas.png", icone: "fas fa-music", count: 15 },
            { nome: "Cabos", imagem: "images/fam-cabos.png", icone: "fas fa-plug", count: 22 },
            { nome: "Carregadores", imagem: "images/fam-carregadores.png", icone: "fas fa-bolt", count: 18 }
        ]
    },
    {
        nome: "BMAX",
        imagem: "images/bmax-logo.png",
        fallbackIcon: "fas fa-bolt",
        categorias: [
            { nome: "Carregadores", imagem: "images/bmax-carregadores.png", icone: "fas fa-bolt", count: 20 },
            { nome: "Power Banks", imagem: "images/bmax-powerbanks.png", icone: "fas fa-battery-full", count: 12 },
            { nome: "Cabos", imagem: "images/bmax-cabos.png", icone: "fas fa-plug", count: 18 },
            { nome: "Fones", imagem: "images/bmax-fones.png", icone: "fas fa-headphones", count: 15 }
        ]
    },
    {
        nome: "PEINING",
        imagem: "images/peining-logo.png",
        fallbackIcon: "fas fa-mobile-screen",
        categorias: [
            { nome: "Películas", imagem: "images/peining-peliculas.png", icone: "fas fa-mobile-screen", count: 25 },
            { nome: "Capas", imagem: "images/peining-capas.png", icone: "fas fa-mobile-alt", count: 20 },
            { nome: "Fones", imagem: "images/peining-fones.png", icone: "fas fa-headphones", count: 18 },
            { nome: "Cabos", imagem: "images/peining-cabos.png", icone: "fas fa-plug", count: 15 }
        ]
    },
    {
        nome: "KNUP",
        imagem: "images/knup-logo.png",
        fallbackIcon: "fas fa-clock",
        categorias: [
            { nome: "Smartwatches", imagem: "images/knup-smartwatch.png", icone: "fas fa-clock", count: 12 },
            { nome: "Fones Gamer", imagem: "images/knup-fones.png", icone: "fas fa-headphones", count: 20 },
            { nome: "Teclados", imagem: "images/knup-teclados.png", icone: "fas fa-keyboard", count: 15 },
            { nome: "Mouses", imagem: "images/knup-mouses.png", icone: "fas fa-mouse", count: 18 }
        ]
    },
    {
        nome: "KNUP",
        imagem: "images/knup-logo.png",
        fallbackIcon: "fas fa-clock",
        categorias: [
            { nome: "Smartwatches", imagem: "images/knup-smartwatch.png", icone: "fas fa-clock", count: 12 },
            { nome: "Fones Gamer", imagem: "images/knup-fones.png", icone: "fas fa-headphones", count: 20 },
            { nome: "Teclados", imagem: "images/knup-teclados.png", icone: "fas fa-keyboard", count: 15 },
            { nome: "Mouses", imagem: "images/knup-mouses.png", icone: "fas fa-mouse", count: 18 }
        ]
    },
    {
        nome: "KNUP",
        imagem: "images/knup-logo.png",
        fallbackIcon: "fas fa-clock",
        categorias: [
            { nome: "Smartwatches", imagem: "images/knup-smartwatch.png", icone: "fas fa-clock", count: 12 },
            { nome: "Fones Gamer", imagem: "images/knup-fones.png", icone: "fas fa-headphones", count: 20 },
            { nome: "Teclados", imagem: "images/knup-teclados.png", icone: "fas fa-keyboard", count: 15 },
            { nome: "Mouses", imagem: "images/knup-mouses.png", icone: "fas fa-mouse", count: 18 }
        ]
    },
    {
        nome: "KNUP",
        imagem: "images/knup-logo.png",
        fallbackIcon: "fas fa-clock",
        categorias: [
            { nome: "Smartwatches", imagem: "images/knup-smartwatch.png", icone: "fas fa-clock", count: 12 },
            { nome: "Fones Gamer", imagem: "images/knup-fones.png", icone: "fas fa-headphones", count: 20 },
            { nome: "Teclados", imagem: "images/knup-teclados.png", icone: "fas fa-keyboard", count: 15 },
            { nome: "Mouses", imagem: "images/knup-mouses.png", icone: "fas fa-mouse", count: 18 }
        ]
    },
    {
        nome: "KNUP",
        imagem: "images/knup-logo.png",
        fallbackIcon: "fas fa-clock",
        categorias: [
            { nome: "Smartwatches", imagem: "images/knup-smartwatch.png", icone: "fas fa-clock", count: 12 },
            { nome: "Fones Gamer", imagem: "images/knup-fones.png", icone: "fas fa-headphones", count: 20 },
            { nome: "Teclados", imagem: "images/knup-teclados.png", icone: "fas fa-keyboard", count: 15 },
            { nome: "Mouses", imagem: "images/knup-mouses.png", icone: "fas fa-mouse", count: 18 }
        ]
    },
    {
        nome: "KNUP",
        imagem: "images/knup-logo.png",
        fallbackIcon: "fas fa-clock",
        categorias: [
            { nome: "Smartwatches", imagem: "images/knup-smartwatch.png", icone: "fas fa-clock", count: 12 },
            { nome: "Fones Gamer", imagem: "images/knup-fones.png", icone: "fas fa-headphones", count: 20 },
            { nome: "Teclados", imagem: "images/knup-teclados.png", icone: "fas fa-keyboard", count: 15 },
            { nome: "Mouses", imagem: "images/knup-mouses.png", icone: "fas fa-mouse", count: 18 }
        ]
    },
    {
        nome: "KNUP",
        imagem: "images/knup-logo.png",
        fallbackIcon: "fas fa-clock",
        categorias: [
            { nome: "Smartwatches", imagem: "images/knup-smartwatch.png", icone: "fas fa-clock", count: 12 },
            { nome: "Fones Gamer", imagem: "images/knup-fones.png", icone: "fas fa-headphones", count: 20 },
            { nome: "Teclados", imagem: "images/knup-teclados.png", icone: "fas fa-keyboard", count: 15 },
            { nome: "Mouses", imagem: "images/knup-mouses.png", icone: "fas fa-mouse", count: 18 }
        ]
    },
    {
        nome: "KNUP",
        imagem: "images/knup-logo.png",
        fallbackIcon: "fas fa-clock",
        categorias: [
            { nome: "Smartwatches", imagem: "images/knup-smartwatch.png", icone: "fas fa-clock", count: 12 },
            { nome: "Fones Gamer", imagem: "images/knup-fones.png", icone: "fas fa-headphones", count: 20 },
            { nome: "Teclados", imagem: "images/knup-teclados.png", icone: "fas fa-keyboard", count: 15 },
            { nome: "Mouses", imagem: "images/knup-mouses.png", icone: "fas fa-mouse", count: 18 }
        ]
    },
    {
        nome: "KNUP",
        imagem: "images/knup-logo.png",
        fallbackIcon: "fas fa-clock",
        categorias: [
            { nome: "Smartwatches", imagem: "images/knup-smartwatch.png", icone: "fas fa-clock", count: 12 },
            { nome: "Fones Gamer", imagem: "images/knup-fones.png", icone: "fas fa-headphones", count: 20 },
            { nome: "Teclados", imagem: "images/knup-teclados.png", icone: "fas fa-keyboard", count: 15 },
            { nome: "Mouses", imagem: "images/knup-mouses.png", icone: "fas fa-mouse", count: 18 }
        ]
    }
];

// ========== VARIÁVEIS GLOBAIS ==========
let currentFilter = "TODOS";
let activeMenu = null;
let closeTimeout = null;
let cartCount = 0;

// ========== RENDERIZAR PRODUTOS ==========
function renderProducts() {
    const container = document.getElementById("productsGrid");
    if (!container) return;
    
    let filtered = currentFilter === "TODOS" ? products : products.filter(p => p.category === currentFilter);
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="no-products"><p>🔍 Nenhum produto encontrado</p></div>';
        return;
    }
    
    container.innerHTML = filtered.map(prod => {
        const hasDiscount = prod.oldPrice && prod.oldPrice > prod.price;
        const discountPercent = hasDiscount ? Math.round(((prod.oldPrice - prod.price) / prod.oldPrice) * 100) : 0;
        
        return `
            <div class="product-card" data-category="${prod.category.toLowerCase()}">
                <div class="product-img">
                    <img src="${prod.image}" alt="${prod.name}" class="product-img-real" 
                         onerror="this.style.display='none'; this.parentElement.innerHTML += '<i class=\'${prod.icon}\' style=\'font-size: 3rem; color: #0a192f;\'></i>'">
                </div>
                ${hasDiscount ? `<div class="badge">${discountPercent}% OFF</div>` : ''}
                <h3>${prod.name}</h3>
                <div class="price">
                    ${hasDiscount ? `<span class="old-price">R$ ${prod.oldPrice.toFixed(2)}</span>` : ''}
                    R$ ${prod.price.toFixed(2)}
                </div>
                <button class="btn-buy" data-id="${prod.id}">Adicionar ao Carrinho</button>
            </div>
        `;
    }).join('');
    
    // Reaplicar eventos aos botões de compra
    document.querySelectorAll('.btn-buy').forEach(btn => {
        btn.removeEventListener('click', handleBuyClick);
        btn.addEventListener('click', handleBuyClick);
    });
}

// ========== HANDLER DO BOTÃO COMPRAR ==========
function handleBuyClick(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    const product = products.find(p => p.id === id);
    if (product) {
        cartCount++;
        updateCartBadge();
        showToast(`🛒 ${product.name} adicionado ao carrinho!`);
        
        // Animação do botão
        const btn = e.currentTarget;
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Adicionado!';
        btn.style.background = '#10b981';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '#00b4d8';
        }, 1500);
    }
}

// ========== ATUALIZAR BADGE DO CARRINHO ==========
function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        badge.textContent = cartCount;
        // Animação de pulso
        badge.style.transform = 'scale(1.2)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 200);
    }
}

// ========== RENDERIZAR MENU ==========
function renderMenu() {
    const container = document.getElementById("categoryMenu");
    if (!container) return;
    
    container.innerHTML = marcas.map((marca, index) => `
        <div class="menu-item" data-marca="${marca.nome}" data-index="${index}">
            <button class="menu-trigger" data-marca="${marca.nome}" aria-label="Menu ${marca.nome}">
                <img src="${marca.imagem}" alt="${marca.nome}" class="menu-img" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
                <i class="${marca.fallbackIcon}" style="display: none; font-size: 1.8rem;"></i>
                <span>${marca.nome}</span>
            </button>
            <div class="megamenu" data-megamenu="${marca.nome}">
                <div class="megamenu-header">
                    <img src="${marca.imagem}" alt="${marca.nome}" class="megamenu-header-img" 
                         onerror="this.style.display='none'">
                    <div>
                        <h3>${marca.nome}</h3>
                        <p>Confira todos os produtos da marca ${marca.nome}</p>
                    </div>
                </div>
                <div class="megamenu-grid">
                    ${marca.categorias.map(cat => `
                        <div class="megamenu-category" data-categoria="${cat.nome}" data-marca="${marca.nome}">
                            <img src="${cat.imagem}" alt="${cat.nome}" class="megamenu-category-img" 
                                 onerror="this.src='https://via.placeholder.com/70/0a192f/00b4d8?text=${cat.nome.substring(0,3)}'">
                            <span class="category-name">${cat.nome}</span>
                            <span class="category-count">${cat.count} produtos</span>
                        </div>
                    `).join('')}
                </div>
                <div class="megamenu-footer">
                    <a href="#" class="view-all-link" data-marca="${marca.nome}">Ver todos os produtos ${marca.nome} →</a>
                </div>
            </div>
        </div>
    `).join('');
    
    setupMenuEvents();
}

// ========== EVENTOS DO MENU ==========
function setupMenuEvents() {
    const menuItems = document.querySelectorAll('.menu-item');
    const overlay = document.getElementById('menuOverlay');
    
    menuItems.forEach(item => {
        const trigger = item.querySelector('.menu-trigger');
        const megamenu = item.querySelector('.megamenu');
        
        if (!trigger || !megamenu) return;
        
        // Eventos para desktop (hover)
        trigger.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                clearTimeout(closeTimeout);
                closeAllMegamenus();
                megamenu.classList.add('active');
                if (overlay) overlay.classList.add('active');
            }
        });
        
        item.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                clearTimeout(closeTimeout);
                closeTimeout = setTimeout(() => {
                    megamenu.classList.remove('active');
                    if (overlay && !document.querySelector('.megamenu.active')) {
                        overlay.classList.remove('active');
                    }
                }, 300);
            }
        });
        
        // Eventos para mobile (clique)
        trigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                
                const isActive = megamenu.classList.contains('active');
                closeAllMegamenus();
                
                if (!isActive) {
                    megamenu.classList.add('active');
                    if (overlay) overlay.classList.add('active');
                }
            }
        });
    });
    
    // Eventos das categorias
    document.querySelectorAll('.megamenu-category').forEach(cat => {
        cat.removeEventListener('click', handleCategoryClick);
        cat.addEventListener('click', handleCategoryClick);
    });
    
    // Eventos "Ver todos"
    document.querySelectorAll('.view-all-link').forEach(link => {
        link.removeEventListener('click', handleViewAllClick);
        link.addEventListener('click', handleViewAllClick);
    });
    
    // Fechar ao clicar no overlay
    if (overlay) {
        overlay.removeEventListener('click', closeAllMegamenus);
        overlay.addEventListener('click', closeAllMegamenus);
    }
    
    // Fechar ao pressionar ESC
    document.removeEventListener('keydown', handleEscKey);
    document.addEventListener('keydown', handleEscKey);
}

// ========== HANDLER CATEGORIA ==========
function handleCategoryClick(e) {
    const category = e.currentTarget;
    const marca = category.dataset.marca;
    const categoria = category.dataset.categoria;
    
    currentFilter = marca;
    renderProducts();
    closeAllMegamenus();
    
    // Scroll suave até os produtos
    const productsSection = document.querySelector('.products-grid');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    showToast(`📱 ${marca} - ${categoria}`);
}

// ========== HANDLER VER TODOS ==========
function handleViewAllClick(e) {
    e.preventDefault();
    const marca = e.currentTarget.dataset.marca;
    
    currentFilter = marca;
    renderProducts();
    closeAllMegamenus();
    
    // Scroll suave até os produtos
    const productsSection = document.querySelector('.products-grid');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    showToast(`🛍️ Mostrando produtos ${marca}`);
}

// ========== FECHAR TECLA ESC ==========
function handleEscKey(e) {
    if (e.key === 'Escape') {
        closeAllMegamenus();
    }
}

// ========== FECHAR TODOS MEGAMENUS ==========
function closeAllMegamenus() {
    document.querySelectorAll('.megamenu').forEach(menu => {
        menu.classList.remove('active');
    });
    const overlay = document.getElementById('menuOverlay');
    if (overlay) overlay.classList.remove('active');
    clearTimeout(closeTimeout);
}

// ========== TOAST (MENSAGEM FLUTUANTE) ==========
function showToast(message) {
    let toast = document.getElementById('dynamicToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'dynamicToast';
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: #0a192f;
            color: #00b4d8;
            padding: 12px 24px;
            border-radius: 40px;
            font-weight: 500;
            z-index: 2000;
            font-size: 0.9rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            white-space: nowrap;
            max-width: 90%;
            white-space: normal;
            text-align: center;
        `;
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.style.display = 'block';
    toast.style.opacity = '1';
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.style.display = 'none';
            toast.style.opacity = '1';
        }, 300);
    }, 2500);
}

// ========== BUSCA DE PRODUTOS ==========
function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (!searchBtn || !searchInput) return;
    
    function performSearch() {
        const term = searchInput.value.trim().toLowerCase();
        const container = document.getElementById("productsGrid");
        
        if (!container) return;
        
        if (term === '') {
            renderProducts();
            return;
        }
        
        const filtered = products.filter(p => p.name.toLowerCase().includes(term));
        
        if (filtered.length === 0) {
            container.innerHTML = '<div class="no-products"><p>🔍 Nenhum produto encontrado para "' + term + '"</p></div>';
            return;
        }
        
        container.innerHTML = filtered.map(prod => `
            <div class="product-card">
                <div class="product-img">
                    <img src="${prod.image}" class="product-img-real" 
                         onerror="this.style.display='none'; this.parentElement.innerHTML += '<i class=\'${prod.icon}\' style=\'font-size: 3rem; color: #0a192f;\'></i>'">
                </div>
                <h3>${prod.name}</h3>
                <div class="price">R$ ${prod.price.toFixed(2)}</div>
                <button class="btn-buy" data-id="${prod.id}">Adicionar ao Carrinho</button>
            </div>
        `).join('');
        
        // Reaplicar eventos
        document.querySelectorAll('.btn-buy').forEach(btn => {
            btn.removeEventListener('click', handleBuyClick);
            btn.addEventListener('click', handleBuyClick);
        });
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

// ========== ANIMAÇÃO DE SCROLL ==========
function setupScrollAnimation() {
    const elements = document.querySelectorAll('.product-card, .feature-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '50px' });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
}

// ========== INICIALIZAÇÃO ==========
function init() {
    renderMenu();
    renderProducts();
    setupSearch();
    setupScrollAnimation();
    
    // Carregar contador do carrinho do localStorage
    const savedCart = localStorage.getItem('cartCount');
    if (savedCart) {
        cartCount = parseInt(savedCart);
        updateCartBadge();
    }
}

// ========== CARROSSEL DE MARCAS (SETAS FIXAS, MARCAS ROLAM) ==========

function setupCarrossel() {
    const wrapper = document.getElementById('carrosselWrapper');
    const prevBtn = document.getElementById('carrosselPrev');
    const nextBtn = document.getElementById('carrosselNext');
    
    if (!wrapper || !prevBtn || !nextBtn) return;
    
    // Função para atualizar visibilidade das setas
    function updateArrows() {
        const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
        const currentScroll = wrapper.scrollLeft;
        
        if (currentScroll <= 10) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }
        
        if (currentScroll >= maxScroll - 10) {
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('hidden');
        }
    }
    
    // Rolar para a esquerda (marcas vão para a direita)
    function scrollPrev() {
        const scrollStep = wrapper.clientWidth * 0.6;
        wrapper.scrollBy({
            left: -scrollStep,
            behavior: 'smooth'
        });
    }
    
    // Rolar para a direita (marcas vão para a esquerda)
    function scrollNext() {
        const scrollStep = wrapper.clientWidth * 0.6;
        wrapper.scrollBy({
            left: scrollStep,
            behavior: 'smooth'
        });
    }
    
    // Eventos dos botões
    prevBtn.addEventListener('click', scrollPrev);
    nextBtn.addEventListener('click', scrollNext);
    
    // Atualizar setas ao rolar
    wrapper.addEventListener('scroll', () => {
        requestAnimationFrame(updateArrows);
    });
    
    // Atualizar ao redimensionar a tela
    window.addEventListener('resize', () => {
        setTimeout(updateArrows, 100);
    });
    
    // Observar mudanças no DOM
    const observer = new MutationObserver(() => {
        setTimeout(updateArrows, 100);
    });
    
    observer.observe(wrapper, { childList: true, subtree: true });
    
    // Inicializar
    setTimeout(updateArrows, 200);
}

// Modificar a função renderMenu original para usar o carrossel
const originalRenderMenu = renderMenu;
renderMenu = function() {
    originalRenderMenu();
    setTimeout(() => {
        setupCarrossel();
    }, 100);
};

// Também chamar após o DOM carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(setupCarrossel, 200);
    });
} else {
    setTimeout(setupCarrossel, 200);
}

// Salvar carrinho ao sair
window.addEventListener('beforeunload', () => {
    localStorage.setItem('cartCount', cartCount);
});

// Iniciar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}