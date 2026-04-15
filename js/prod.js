// ========== RENDERIZAR PRODUTOS ==========
function renderProducts() {
    const container = document.getElementById("productsGrid");
    let filtered = currentFilter === "TODOS" ? products : products.filter(p => p.category === currentFilter);
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="grid-column:1/-1; text-align:center;">Nenhum produto encontrado</p>';
        return;
    }
    
    container.innerHTML = filtered.map(prod => {
        const hasDiscount = prod.oldPrice && prod.oldPrice > prod.price;
        const discountPercent = hasDiscount ? Math.round(((prod.oldPrice - prod.price) / prod.oldPrice) * 100) : 0;
        
        return `
            <div class="product-card">
                <div class="product-img">
                    <img src="${prod.image}" alt="${prod.name}" class="product-img-real" onerror="this.style.display='none'; this.parentElement.innerHTML += '<i class=\'${prod.icon}\' style=\'font-size: 3rem; color: #0a192f;\'></i>'">
                </div>
                ${hasDiscount ? `<div class="badge" style="position:absolute; top:12px; left:12px; background:#dc2626; color:white; font-size:0.7rem; padding:4px 10px; border-radius:20px;">${discountPercent}% OFF</div>` : ''}
                <h3>${prod.name}</h3>
                <div class="price">
                    ${hasDiscount ? `<span class="old-price">R$ ${prod.oldPrice.toFixed(2)}</span>` : ''}
                    R$ ${prod.price.toFixed(2)}
                </div>
                <button class="btn-buy" data-id="${prod.id}">Adicionar ao Carrinho</button>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('.btn-buy').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            alert(`🛒 ${product.name} adicionado ao carrinho!`);
        });
    });
}

// ========== RENDERIZAR MENU ==========
function renderMenu() {
    const container = document.getElementById("categoryMenu");
    
    container.innerHTML = marcas.map((marca, index) => `
        <div class="menu-item" data-marca="${marca.nome}" data-index="${index}">
            <button class="menu-trigger" data-marca="${marca.nome}">
                <img src="${marca.imagem}" alt="${marca.nome}" class="menu-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
                <i class="${marca.fallbackIcon}" style="display: none; font-size: 1.8rem;"></i>
                <span>${marca.nome}</span>
            </button>
            <div class="megamenu" data-megamenu="${marca.nome}">
                <div class="megamenu-header">
                    <img src="${marca.imagem}" alt="${marca.nome}" class="megamenu-header-img" onerror="this.style.display='none'">
                    <div>
                        <h3>${marca.nome}</h3>
                        <p>Confira todos os produtos da marca ${marca.nome}</p>
                    </div>
                </div>
                <div class="megamenu-grid">
                    ${marca.categorias.map(cat => `
                        <div class="megamenu-category" data-categoria="${cat.nome}" data-marca="${marca.nome}">
                            <img src="${cat.imagem}" alt="${cat.nome}" class="megamenu-category-img" onerror="this.src='https://via.placeholder.com/70/0a192f/00b4d8?text=${cat.nome.substring(0,3)}'">
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
        
        trigger.addEventListener('mouseenter', () => {
            clearTimeout(closeTimeout);
            closeAllMegamenus();
            megamenu.classList.add('active');
            activeMenu = megamenu;
            if (overlay) overlay.classList.add('active');
        });
        
        item.addEventListener('mouseleave', () => {
            clearTimeout(closeTimeout);
            closeTimeout = setTimeout(() => {
                megamenu.classList.remove('active');
                if (overlay && !document.querySelector('.megamenu.active')) overlay.classList.remove('active');
                activeMenu = null;
            }, 300);
        });
        
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            if (megamenu.classList.contains('active')) {
                megamenu.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
            } else {
                closeAllMegamenus();
                megamenu.classList.add('active');
                if (overlay) overlay.classList.add('active');
            }
        });
    });
    
    document.querySelectorAll('.megamenu-category').forEach(cat => {
        cat.addEventListener('click', () => {
            const marca = cat.dataset.marca;
            const categoria = cat.dataset.categoria;
            currentFilter = marca;
            renderProducts();
            closeAllMegamenus();
            showToast(`📱 ${marca} - ${categoria}`);
        });
    });
    
    document.querySelectorAll('.view-all-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const marca = link.dataset.marca;
            currentFilter = marca;
            renderProducts();
            closeAllMegamenus();
            showToast(`🛍️ Mostrando produtos ${marca}`);
        });
    });
    
    if (overlay) {
        overlay.addEventListener('click', () => closeAllMegamenus());
    }
}

function closeAllMegamenus() {
    document.querySelectorAll('.megamenu').forEach(menu => menu.classList.remove('active'));
    const overlay = document.getElementById('menuOverlay');
    if (overlay) overlay.classList.remove('active');
    clearTimeout(closeTimeout);
}

function showToast(message) {
    let toast = document.getElementById('dynamicToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'dynamicToast';
        toast.style.cssText = `position:fixed; bottom:30px; left:50%; transform:translateX(-50%); background:#0a192f; color:#00b4d8; padding:12px 24px; border-radius:40px; font-weight:500; z-index:2000; font-size:0.9rem; box-shadow:0 5px 15px rgba(0,0,0,0.2);`;
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => toast.style.display = 'none', 2000);
}

// ========== BUSCA ==========
function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', () => {
        const term = searchInput.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(term));
        const container = document.getElementById("productsGrid");
        
        if (filtered.length === 0) {
            container.innerHTML = '<p style="grid-column:1/-1; text-align:center;">Nenhum produto encontrado</p>';
            return;
        }
        
        container.innerHTML = filtered.map(prod => `
            <div class="product-card">
                <div class="product-img"><img src="${prod.image}" class="product-img-real" onerror="this.style.display='none'"></div>
                <h3>${prod.name}</h3>
                <div class="price">R$ ${prod.price.toFixed(2)}</div>
                <button class="btn-buy">Adicionar</button>
            </div>
        `).join('');
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchBtn.click();
    });
}

// ========== INICIALIZAÇÃO ==========
function init() {
    renderMenu();
    renderProducts();
    setupSearch();
}

init();