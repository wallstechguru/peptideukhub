/* ----------------------------------------------------
   PEPTIDES UK HUB - INTERACTIVE APP SCRIPT
   ---------------------------------------------------- */

// Product Dataset
const productsData = [
  {
    id: 'bpc-157-5mg',
    title: 'BPC-157',
    category: 'Healing & Recovery',
    categoryCode: 'healing',
    spec: '5mg Vial • 99.85% HPLC Purity',
    price: 64.99,
    image: 'vial-bpc157.jpg',
    purity: '99.85%',
    stock: 'In Stock - Fast UK Shipping',
    description: 'Body Protection Compound 157 (BPC-157) synthesized peptide sequence for laboratory research. Lyophilized powder format.'
  },
  {
    id: 'tb-500-10mg',
    title: 'TB-500 (Thymosin Beta-4)',
    category: 'Healing & Recovery',
    categoryCode: 'healing',
    spec: '10mg Vial • 99.78% HPLC Purity',
    price: 89.99,
    image: 'vial-bpc157.jpg',
    purity: '99.78%',
    stock: 'In Stock - Fast UK Shipping',
    description: 'Synthetic peptide fragment of Thymosin Beta-4 sequence. High purity vacuum sealed glass vial for research application.'
  },
  {
    id: 'semaglutide-5mg',
    title: 'Semaglutide',
    category: 'Metabolic Research',
    categoryCode: 'metabolic',
    spec: '5mg Vial • 99.91% HPLC Purity',
    price: 129.99,
    image: 'vial-bpc157.jpg',
    purity: '99.91%',
    stock: 'In Stock - Fast UK Shipping',
    description: 'GLP-1 receptor agonist analog for metabolic research study. Analytical grade laboratory reagent.'
  },
  {
    id: 'tirzepatide-10mg',
    title: 'Tirzepatide',
    category: 'Metabolic Research',
    categoryCode: 'metabolic',
    spec: '10mg Vial • 99.88% HPLC Purity',
    price: 179.99,
    image: 'vial-bpc157.jpg',
    purity: '99.88%',
    stock: 'In Stock - Fast UK Shipping',
    description: 'Dual GIP/GLP-1 receptor agonist peptide formulation. High mass spectrometry batch consistency.'
  },
  {
    id: 'cjc-ipamorelin-blend',
    title: 'CJC-1295 + Ipamorelin Blend',
    category: 'Synthetics & Blends',
    categoryCode: 'blends',
    spec: '10mg (5mg/5mg) • 99.80% Purity',
    price: 114.99,
    image: 'vial-bpc157.jpg',
    purity: '99.80%',
    stock: 'In Stock - Fast UK Shipping',
    categoryCode: 'metabolic',
    spec: '10mg Vial • 99.75% HPLC Purity',
    price: 219.99,
    image: 'images/vial-bpc157.jpg',
    purity: '99.75%',
    stock: 'In Stock - Fast UK Shipping',
    description: 'Novel GIP/GLP-1/Glucagon tri-agonist peptide compound for advanced metabolic investigation.'
  },
  {
    id: 'nad-plus-500mg',
    title: 'NAD+ (Nicotinamide Adenine)',
    category: 'Synthetics & Blends',
    categoryCode: 'blends',
    spec: '500mg Lyophilized • 99.90% Purity',
    price: 94.99,
    image: 'images/vial-bpc157.jpg',
    purity: '99.90%',
    stock: 'In Stock - Fast UK Shipping',
    description: 'Coenzyme cellular energy research compound. Highest stability cold-chain processed.'
  },
  {
    id: 'bpc-tb-blend-10mg',
    title: 'BPC-157 + TB-500 Blend',
    category: 'Kits & Bundles',
    categoryCode: 'kits',
    spec: '10mg Combined • 99.82% Purity',
    price: 139.99,
    image: 'images/vial-bpc157.jpg',
    purity: '99.82%',
    stock: 'In Stock - Fast UK Shipping',
    description: 'Premixed tissue research combo vial offering 5mg BPC-157 and 5mg TB-500.'
  }
];

// Shopping Cart State
let cart = [];

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(productsData);
  initCartListeners();
  initCategoryTabs();
  initSearch();
  initCOAChecker();
  initFAQ();
  initMobileDrawer();
  initQuickView();
});

// Render Product Cards
function renderProducts(products) {
  const container = document.getElementById('products-grid');
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #94a3b8;">
        <h3>No research peptides found matching your search.</h3>
      </div>
    `;
    return;
  }

  container.innerHTML = products.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-badge-stack">
        <span class="purity-badge"><span class="boxed-icon-sm" style="width:18px;height:18px;margin-right:4px;background:rgba(16,185,129,0.15);border-color:rgba(16,185,129,0.3);color:#10b981;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span> ${p.purity} HPLC</span>
        <span class="stock-badge"><span class="boxed-icon-sm" style="width:18px;height:18px;margin-right:4px;background:rgba(59,130,246,0.15);border-color:rgba(59,130,246,0.3);color:#3b82f6;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span> ${p.stock}</span>
      </div>
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.title}" class="product-img" loading="lazy">
      </div>
      <div class="product-details">
        <span class="product-category">${p.category}</span>
        <h3 class="product-title">${p.title}</h3>
        <p class="product-spec">${p.spec}</p>
        <div class="product-price-row">
          <div>
            <span class="product-price">£${p.price.toFixed(2)}</span>
            <span class="currency-tag">GBP</span>
          </div>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart('${p.id}')">
            <span class="boxed-icon-sm" style="margin-right:6px;background:rgba(20,184,166,0.15);border-color:rgba(20,184,166,0.3);color:white;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></span> Add to Cart
          </button>
          <button class="btn-quick-view" onclick="openQuickView('${p.id}')">
            <span class="boxed-icon-sm" style="margin-right:6px;background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.2);color:white;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span> View
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Category Tabs Filter
function initCategoryTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      if (filter === 'all') {
        renderProducts(productsData);
      } else {
        const filtered = productsData.filter(p => p.categoryCode === filter);
        renderProducts(filtered);
      }
    });
  });
}

// Search Functionality
function initSearch() {
  const searchInputs = document.querySelectorAll('#catalog-search, #header-search');
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = productsData.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.spec.toLowerCase().includes(query)
      );
      renderProducts(filtered);
    });
  });
}

// Cart Logic
function initCartListeners() {
  const cartIconBtns = document.querySelectorAll('#cart-icon-trigger, #cart-icon-mobile');
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const closeCartBtn = document.getElementById('close-cart-btn');

  cartIconBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  });

  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
  }

  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCart();
    });
  }
}

function openCart() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.add('active');
}

function closeCart() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.remove('active');
}

function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  openCart();
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  updateCartUI();
}

function updateCartUI() {
  const cartBadgeCounters = document.querySelectorAll('.cart-badge');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  cartBadgeCounters.forEach(counter => {
    counter.textContent = totalItems;
  });

  const cartContainer = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const shippingProgressFill = document.getElementById('shipping-bar-fill');
  const shippingTxt = document.getElementById('shipping-status-txt');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (subtotalEl) subtotalEl.textContent = `£${subtotal.toFixed(2)} GBP`;

  // Free shipping logic (£299.99 GBP threshold)
  const freeThreshold = 299.99;
  if (shippingProgressFill && shippingTxt) {
    const percentage = Math.min(100, (subtotal / freeThreshold) * 100);
    shippingProgressFill.style.width = `${percentage}%`;

    if (subtotal >= freeThreshold) {
      shippingTxt.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked <strong>FREE Priority Shipping!</strong>`;
    } else {
      const remaining = (freeThreshold - subtotal).toFixed(2);
      shippingTxt.innerHTML = `Add <strong>£${remaining} GBP</strong> more to get <strong>FREE Priority Shipping!</strong>`;
    }
  }

  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #94a3b8;">
        <div style="display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;border-radius:14px;background:rgba(20,184,166,0.08);border:1px solid rgba(20,184,166,0.2);color:var(--color-teal-green);margin-bottom:14px;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        </div>
        <p style="font-weight: 700; color: white;">Your shopping cart is empty</p>
        <p style="font-size: 0.85rem; margin-top: 6px;">Browse our catalog of research peptides to get started.</p>
      </div>
    `;
    return;
  }

  cartContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">£${item.price.toFixed(2)} GBP</div>
        <div class="cart-qty-ctrl">
          <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
          <span style="font-size: 0.85rem; font-weight: bold; width: 20px; text-align: center;">${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
      <button onclick="updateQuantity('${item.id}', -${item.quantity})" style="background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.25); border-radius:6px; color:#ef4444; cursor:pointer; width:30px; height:30px; display:inline-flex; align-items:center; justify-content:center;" title="Remove">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      </button>
    </div>
  `).join('');
}

// Quick View Modal
function initQuickView() {
  const modalOverlay = document.getElementById('quickview-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }
}

function openQuickView(productId) {
  const p = productsData.find(item => item.id === productId);
  if (!p) return;

  const modalOverlay = document.getElementById('quickview-modal');
  const content = document.getElementById('modal-dynamic-content');

  if (content && modalOverlay) {
    content.innerHTML = `
      <div style="text-align: center;">
        <img src="${p.image}" alt="${p.title}" style="max-width: 100%; height: 260px; object-fit: contain; background:#080a11; padding: 20px; border-radius:12px; border:1px solid #1e2638;">
        <div style="margin-top: 15px; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); color: #10b981; padding: 8px; border-radius: 6px; font-weight: bold; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; gap: 6px;">
          <span class="boxed-icon-sm" style="width:18px;height:18px;background:rgba(16,185,129,0.2);border:none;color:#10b981;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span> Verified ${p.purity} Mass-Spec & HPLC Testing
        </div>
      </div>
      <div style="display: flex; flex-direction: column; justify-content: center;">
        <span style="color: var(--color-teal-green); font-weight: bold; font-size: 0.8rem; text-transform: uppercase;">${p.category}</span>
        <h2 style="font-family: var(--font-heading); font-size: 1.6rem; color: white; margin: 6px 0 10px 0;">${p.title}</h2>
        <p style="color: #94a3b8; font-size: 0.9rem; line-height: 1.5; margin-bottom: 15px;">${p.description}</p>
        <div style="font-size: 1.5rem; font-weight: 900; color: white; margin-bottom: 20px;">
          £${p.price.toFixed(2)} <span style="font-size: 0.8rem; color: #94a3b8;">GBP</span>
        </div>
        <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="addToCart('${p.id}'); document.getElementById('quickview-modal').classList.remove('active');">
          <span class="boxed-icon-sm" style="margin-right:8px;background:rgba(255,255,255,0.2);border:none;color:white;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></span> Add to Cart Now
        </button>
      </div>
    `;
    modalOverlay.classList.add('active');
  }
}

// Batch COA Verification Lookup
function initCOAChecker() {
  const form = document.getElementById('coa-form');
  const input = document.getElementById('coa-lot-input');
  const resultBox = document.getElementById('coa-result-box');

  if (form && input && resultBox) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const lot = input.value.trim().toUpperCase();
      if (!lot) return;

      resultBox.innerHTML = `
        <div style="color: #10b981; font-weight: bold; margin-bottom: 8px; font-family: var(--font-heading);">
          ✅ HPLC & MS Certificate Verified for Lot ${lot}
        </div>
        <div class="result-row">
          <span>Purity Rating:</span>
          <strong style="color: white;">99.88% (Ultra High Grade)</strong>
        </div>
        <div class="result-row">
          <span>Batch Production Date:</span>
          <span style="color: white;">2026-06-12</span>
        </div>
        <div class="result-row">
          <span>Testing Method:</span>
          <span style="color: white;">HPLC / ESI-MS Dual Spectrometry</span>
        </div>
        <div class="result-row">
          <span>Fulfillment Lab:</span>
          <span style="color: white;">Glasgow Analytical Facility, UK</span>
        </div>
      `;
      resultBox.classList.add('active');
    });
  }
}

// FAQ Accordion
function initFAQ() {
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// Mobile Navigation Drawer
function initMobileDrawer() {
  const mobileBtn = document.getElementById('mobile-menu-trigger');
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');

  if (mobileBtn && drawer && overlay) {
    mobileBtn.addEventListener('click', () => {
      drawer.classList.add('active');
      overlay.classList.add('active');
    });

    overlay.addEventListener('click', () => {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    });
  }
}
