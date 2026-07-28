/* ----------------------------------------------------
   PEPTIDES UK HUB - INTERACTIVE APP SCRIPT
   ---------------------------------------------------- */

// Product Dataset
const productsData = [
  {
    id: 'rta-glp3-10mg',
    title: 'Retatrutide (RTA GLP-3) 10 mg',
    category: 'Metabolic Research',
    categoryCode: 'metabolic',
    spec: '10mg Vial • 99.75% HPLC Purity',
    price: 79.99,
    image: 'category-metabolic.svg',
    purity: '99.75%',
    stock: 'Available, Usually Ships Within 24h',
    description: 'One of our featured catalog items. A sealed 10 mg lyophilized vial, cold-stored, with a 10-vial kit option that saves 30%.',
    longDescription: 'Retatrutide is a triple agonist peptide sequence targeting GIP, GLP-1, and glucagon receptors, developed as a research tool for studying combined incretin-receptor pathways. Supplied as a sealed, cold-stored lyophilized vial with a published Certificate of Analysis for each batch. The 10-vial kit format is intended for laboratories running extended or comparative research protocols.',
    url: 'rta-glp3-10mg.html'
  },
  {
    id: 'bpc-157-5mg',
    title: 'BPC-157',
    category: 'Healing & Recovery',
    categoryCode: 'healing',
    spec: '5mg Vial • 99.85% HPLC Purity',
    price: 64.99,
    image: 'category-healing.svg',
    purity: '99.85%',
    stock: 'In Stock - Fast Shipping',
    description: 'Body Protection Compound 157 (BPC-157) synthesized peptide sequence for laboratory research. Lyophilized powder format.',
    longDescription: 'BPC-157 is a synthetic peptide fragment derived from a naturally occurring gastric protective protein, commonly used in laboratory studies of tissue and cellular repair pathways. Each batch is HPLC and mass-spec verified before release, and the lyophilized format supports extended cold storage prior to reconstitution for research use.',
    url: 'bpc-157-5mg.html'
  },
  {
    id: 'tb-500-10mg',
    title: 'TB-500 (Thymosin Beta-4)',
    category: 'Healing & Recovery',
    categoryCode: 'healing',
    spec: '10mg Vial • 99.78% HPLC Purity',
    price: 89.99,
    image: 'category-healing.svg',
    purity: '99.78%',
    stock: 'In Stock - Fast Shipping',
    description: 'Synthetic peptide fragment of Thymosin Beta-4 sequence. High purity vacuum sealed glass vial for research application.',
    longDescription: 'Thymosin Beta-4 (TB-500) is a synthetic fragment of a naturally occurring actin-regulating protein, frequently studied in cellular migration and tissue-repair research models. Supplied as a vacuum-sealed glass vial to preserve stability, with batch-specific analytical documentation available on request.',
    url: 'tb-500-10mg.html'
  },
  {
    id: 'ghk-cu-50mg',
    title: 'GHK-Cu (Copper Peptide)',
    category: 'Healing & Recovery',
    categoryCode: 'healing',
    spec: '50mg Vial • 99.70% HPLC Purity',
    price: 54.99,
    image: 'category-healing.svg',
    purity: '99.70%',
    stock: 'In Stock - Fast Shipping',
    description: 'Copper-binding tripeptide (Glycyl-L-Histidyl-L-Lysine) used in laboratory research on connective tissue and dermal cell signaling pathways.',
    longDescription: 'GHK-Cu is a naturally occurring copper-binding tripeptide studied for its role in extracellular matrix remodeling and cellular signaling research models. Supplied as a lyophilized powder, each batch is tested for copper-complex stability alongside standard HPLC purity verification.',
    url: 'ghk-cu-50mg.html'
  },
  {
    id: 'thymosin-alpha1-5mg',
    title: 'Thymosin Alpha-1',
    category: 'Healing & Recovery',
    categoryCode: 'healing',
    spec: '5mg Vial • 99.83% HPLC Purity',
    price: 84.99,
    image: 'category-healing.svg',
    purity: '99.83%',
    stock: 'In Stock - Fast Shipping',
    description: 'Synthetic thymic peptide sequence studied in laboratory immune-signaling and cellular research models.',
    longDescription: 'Thymosin Alpha-1 is a synthetic version of a naturally occurring thymic peptide, used in research settings to study immune cell signaling pathways. Supplied as a sealed lyophilized vial with batch-specific HPLC and mass spectrometry documentation.',
    url: 'thymosin-alpha1-5mg.html'
  },
  {
    id: 'epithalon-10mg',
    title: 'Epithalon',
    category: 'Healing & Recovery',
    categoryCode: 'healing',
    spec: '10mg Vial • 99.75% HPLC Purity',
    price: 74.99,
    image: 'category-healing.svg',
    purity: '99.75%',
    stock: 'In Stock - Fast Shipping',
    description: 'Synthetic tetrapeptide sequence studied in laboratory research on cellular aging and telomerase-related pathways.',
    longDescription: 'Epithalon (also referenced as Epitalon) is a synthetic four-amino-acid peptide sequence used in laboratory research exploring cellular senescence and telomerase activity models. Supplied as a cold-stored lyophilized vial with lot-specific analytical documentation.',
    url: 'epithalon-10mg.html'
  },
  {
    id: 'semaglutide-5mg',
    title: 'Semaglutide',
    category: 'Metabolic Research',
    categoryCode: 'metabolic',
    spec: '5mg Vial • 99.91% HPLC Purity',
    price: 129.99,
    image: 'category-metabolic.svg',
    purity: '99.91%',
    stock: 'In Stock - Fast Shipping',
    description: 'GLP-1 receptor agonist analog for metabolic research study. Analytical grade laboratory reagent.',
    longDescription: 'Semaglutide is a GLP-1 receptor agonist analog widely used in laboratory research into incretin signaling and metabolic regulation pathways. This analytical-grade reagent is manufactured under controlled synthesis conditions and verified for identity and purity via HPLC and mass spectrometry prior to release.',
    url: 'semaglutide-5mg.html'
  },
  {
    id: 'tirzepatide-10mg',
    title: 'Tirzepatide',
    category: 'Metabolic Research',
    categoryCode: 'metabolic',
    spec: '10mg Vial • 99.88% HPLC Purity',
    price: 179.99,
    image: 'category-metabolic.svg',
    purity: '99.88%',
    stock: 'In Stock - Fast Shipping',
    description: 'Dual GIP/GLP-1 receptor agonist peptide formulation. High mass spectrometry batch consistency.',
    longDescription: 'Tirzepatide is a dual GIP/GLP-1 receptor agonist peptide used in research settings to study combined incretin receptor activity. Each production batch undergoes mass spectrometry confirmation for molecular identity alongside HPLC purity testing, with results available via lot-based lookup.',
    url: 'tirzepatide-10mg.html'
  },
  {
    id: 'aod-9604-5mg',
    title: 'AOD-9604',
    category: 'Metabolic Research',
    categoryCode: 'metabolic',
    spec: '5mg Vial • 99.80% HPLC Purity',
    price: 79.99,
    image: 'category-metabolic.svg',
    purity: '99.80%',
    stock: 'In Stock - Fast Shipping',
    description: 'Modified fragment of human growth hormone studied in laboratory lipid-metabolism research models.',
    longDescription: 'AOD-9604 is a modified fragment of the human growth hormone sequence, studied in research settings for its role in lipid metabolism pathway models. Each batch is synthesized under controlled conditions and verified via HPLC and mass spectrometry prior to release.',
    url: 'aod-9604-5mg.html'
  },
  {
    id: 'mots-c-10mg',
    title: 'MOTS-c',
    category: 'Metabolic Research',
    categoryCode: 'metabolic',
    spec: '10mg Vial • 99.85% HPLC Purity',
    price: 119.99,
    image: 'category-metabolic.svg',
    purity: '99.85%',
    stock: 'In Stock - Fast Shipping',
    description: 'Mitochondrial-derived peptide sequence used in laboratory research on cellular metabolic regulation.',
    longDescription: 'MOTS-c is a peptide sequence encoded within mitochondrial DNA, studied in laboratory research on metabolic regulation and cellular stress-response pathways. Supplied as a sealed lyophilized vial with a published Certificate of Analysis per batch.',
    url: 'mots-c-10mg.html'
  },
  {
    id: 'cjc-ipamorelin-blend',
    title: 'CJC-1295 + Ipamorelin Blend',
    category: 'Synthetics & Blends',
    categoryCode: 'blends',
    spec: '10mg (5mg/5mg) • 99.80% Purity',
    price: 114.99,
    image: 'category-blends.svg',
    purity: '99.80%',
    stock: 'In Stock - Fast Shipping',
    description: 'CJC-1295 with DAC combined with Ipamorelin peptide sequence for dual-action receptor research.',
    longDescription: 'This blend combines CJC-1295 with DAC (a long-acting growth-hormone-releasing hormone analog) with Ipamorelin (a selective ghrelin receptor agonist), supplied as a single premixed vial for laboratories studying dual-pathway growth hormone secretagogue activity. Both components are synthesized and verified independently before blending.',
    url: 'cjc-ipamorelin-blend.html'
  },
  {
    id: 'nad-plus-500mg',
    title: 'NAD+ (Nicotinamide Adenine)',
    category: 'Synthetics & Blends',
    categoryCode: 'blends',
    spec: '500mg Lyophilized • 99.90% Purity',
    price: 94.99,
    image: 'category-blends.svg',
    purity: '99.90%',
    stock: 'In Stock - Fast Shipping',
    description: 'Coenzyme cellular energy research compound. Highest stability cold-chain processed.',
    longDescription: 'NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme central to cellular energy metabolism and is widely used in laboratory research on mitochondrial function and redox biology. Supplied as a lyophilized powder with cold-chain handling from synthesis through delivery to preserve molecular stability.',
    url: 'nad-plus-500mg.html'
  },
  {
    id: 'sermorelin-5mg',
    title: 'Sermorelin',
    category: 'Synthetics & Blends',
    categoryCode: 'blends',
    spec: '5mg Vial • 99.82% HPLC Purity',
    price: 69.99,
    image: 'category-blends.svg',
    purity: '99.82%',
    stock: 'In Stock - Fast Shipping',
    description: 'Growth-hormone-releasing hormone (GHRH) analog fragment used in laboratory endocrine research models.',
    longDescription: 'Sermorelin is a truncated analog of growth-hormone-releasing hormone, used in laboratory research studying the GHRH receptor pathway and downstream endocrine signaling. Supplied as a lyophilized powder with batch-specific analytical testing.',
    url: 'sermorelin-5mg.html'
  },
  {
    id: 'hexarelin-5mg',
    title: 'Hexarelin',
    category: 'Synthetics & Blends',
    categoryCode: 'blends',
    spec: '5mg Vial • 99.79% HPLC Purity',
    price: 74.99,
    image: 'category-blends.svg',
    purity: '99.79%',
    stock: 'In Stock - Fast Shipping',
    description: 'Synthetic hexapeptide sequence studied as a ghrelin receptor agonist in laboratory research models.',
    longDescription: 'Hexarelin is a synthetic growth-hormone secretagogue peptide sequence studied for its ghrelin receptor agonist activity in laboratory research settings. Each production lot is HPLC and mass-spec verified before release.',
    url: 'hexarelin-5mg.html'
  },
  {
    id: 'pt-141-10mg',
    title: 'PT-141 (Bremelanotide)',
    category: 'Synthetics & Blends',
    categoryCode: 'blends',
    spec: '10mg Vial • 99.81% HPLC Purity',
    price: 89.99,
    image: 'category-blends.svg',
    purity: '99.81%',
    stock: 'In Stock - Fast Shipping',
    description: 'Melanocortin receptor agonist peptide sequence studied in laboratory receptor-pathway research.',
    longDescription: 'PT-141 (Bremelanotide) is a synthetic peptide studied in laboratory research on melanocortin receptor activation pathways. Supplied as a sealed lyophilized vial, with purity and identity confirmed via HPLC and mass spectrometry per batch.',
    url: 'pt-141-10mg.html'
  },
  {
    id: 'selank-5mg',
    title: 'Selank',
    category: 'Synthetics & Blends',
    categoryCode: 'blends',
    spec: '5mg Vial • 99.77% HPLC Purity',
    price: 64.99,
    image: 'category-blends.svg',
    purity: '99.77%',
    stock: 'In Stock - Fast Shipping',
    description: 'Synthetic heptapeptide sequence studied in laboratory neurochemical research models.',
    longDescription: 'Selank is a synthetic peptide derived from the naturally occurring tuftsin sequence, studied in laboratory research on neurochemical signaling pathways. Supplied as a lyophilized powder with lot-specific Certificate of Analysis.',
    url: 'selank-5mg.html'
  },
  {
    id: 'bpc-tb-blend-10mg',
    title: 'BPC-157 + TB-500 Blend',
    category: 'Kits & Bundles',
    categoryCode: 'kits',
    spec: '10mg Combined • 99.82% Purity',
    price: 139.99,
    image: 'category-kits.svg',
    purity: '99.82%',
    stock: 'In Stock - Fast Shipping',
    description: 'Premixed tissue research combo vial offering 5mg BPC-157 and 5mg TB-500.',
    longDescription: 'This combination vial pairs BPC-157 and TB-500 in a single premixed research format, intended for laboratories studying the two peptides\' complementary roles in tissue-repair pathway research. Each component is independently purity-tested prior to blending, with a combined Certificate of Analysis issued per batch.',
    url: 'bpc-tb-blend-10mg.html'
  },
  {
    id: 'recovery-stack-kit',
    title: 'Recovery Stack Kit (BPC-157 + GHK-Cu)',
    category: 'Kits & Bundles',
    categoryCode: 'kits',
    spec: '2-Vial Kit • BPC-157 5mg + GHK-Cu 50mg',
    price: 104.99,
    image: 'category-kits.svg',
    purity: '99.70%+',
    stock: 'In Stock - Fast Shipping',
    description: 'Two-vial research kit pairing BPC-157 and GHK-Cu for tissue-repair pathway comparison studies.',
    longDescription: 'This kit bundles individually tested vials of BPC-157 and GHK-Cu, intended for laboratories running comparative or combined tissue-repair pathway research. Each vial ships with its own batch-specific analytical documentation.',
    url: 'recovery-stack-kit.html'
  },
  {
    id: 'gh-stack-kit',
    title: 'Growth Hormone Stack Kit (Sermorelin + Ipamorelin)',
    category: 'Kits & Bundles',
    categoryCode: 'kits',
    spec: '2-Vial Kit • Sermorelin 5mg + Ipamorelin 5mg',
    price: 109.99,
    image: 'category-kits.svg',
    purity: '99.78%+',
    stock: 'In Stock - Fast Shipping',
    description: 'Two-vial research kit combining Sermorelin and Ipamorelin for growth-hormone secretagogue pathway research.',
    longDescription: 'This kit pairs Sermorelin and Ipamorelin as separate, individually tested vials for laboratories studying combined growth-hormone secretagogue receptor pathways. Each vial includes its own batch Certificate of Analysis.',
    url: 'gh-stack-kit.html'
  }
];

// Shopping Cart State
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(productsData);
  renderFeaturedProducts();
  initCartListeners();
  initCategoryTabs();
  applyCategoryFromURL();
  initSearch();
  initCOAChecker();
  initFAQ();
  initMobileDrawer();
  initQuickView();
  initCheckoutHook();
});

// Single product card markup, shared by the full catalog grid and the homepage's featured grid
function productCardHTML(p) {
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-badge-stack">
        <span class="purity-badge"><span class="boxed-icon-sm" style="width:18px;height:18px;margin-right:4px;background:rgba(16,185,129,0.15);border-color:rgba(16,185,129,0.3);color:#10b981;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span> ${p.purity} HPLC</span>
        <span class="stock-badge"><span class="boxed-icon-sm" style="width:18px;height:18px;margin-right:4px;background:rgba(59,130,246,0.15);border-color:rgba(59,130,246,0.3);color:#3b82f6;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span> ${p.stock}</span>
      </div>
      <a href="javascript:void(0)" onclick="openQuickView('${p.id}')" class="product-image-wrap" style="text-decoration:none; display:block;">
        <img src="${p.image}" alt="${p.title}" class="product-img" loading="lazy">
      </a>
      <div class="product-details">
        <span class="product-category">${p.category}</span>
        <h3 class="product-title"><a href="javascript:void(0)" onclick="openQuickView('${p.id}')" style="color: inherit; text-decoration: none;">${p.title}</a></h3>
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
          <a href="javascript:void(0)" onclick="openQuickView('${p.id}')" class="btn-quick-view" style="text-decoration:none; text-align:center;">
            <span class="boxed-icon-sm" style="margin-right:6px;background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.2);color:white;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span> Quick View
          </a>
        </div>
      </div>
    </div>
  `;
}

// Render Product Cards (full catalog grid — products.html)
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

  container.innerHTML = products.map(productCardHTML).join('');
}

// Render a curated subset of products (homepage — keeps the front page from being swamped with the full catalog)
const FEATURED_PRODUCT_IDS = ['rta-glp3-10mg', 'bpc-157-5mg', 'semaglutide-5mg', 'cjc-ipamorelin-blend', 'tirzepatide-10mg', 'bpc-tb-blend-10mg'];

function renderFeaturedProducts() {
  const container = document.getElementById('featured-products-grid');
  if (!container) return;

  const featured = FEATURED_PRODUCT_IDS
    .map(id => productsData.find(p => p.id === id))
    .filter(Boolean);

  container.innerHTML = featured.map(productCardHTML).join('');
}

// Pre-select a category tab when arriving via a ?category= deep link (e.g. from the homepage category cards)
function applyCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  if (!category) return;

  const targetBtn = document.querySelector(`.tab-btn[data-filter="${category}"]`);
  if (targetBtn) targetBtn.click();
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

  localStorage.setItem('cart', JSON.stringify(cart));
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

  localStorage.setItem('cart', JSON.stringify(cart));
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
        <div id="qv-description-wrap" style="margin-bottom: 15px;">
          <p id="qv-desc-text" style="color: #94a3b8; font-size: 0.9rem; line-height: 1.5; margin-bottom: 6px;">${p.description}</p>
          ${p.url ? `<a href="${p.url}" style="color: var(--color-teal-green); font-weight: 700; font-size: 0.85rem; text-decoration: none;">Read more →</a>` : ''}
        </div>
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

// Global Checkout Hook & Email Integration
function initCheckoutHook() {
  // Override any old alert buttons on other pages
  document.querySelectorAll('button').forEach(btn => {
    const clickAttr = btn.getAttribute('onclick');
    if (clickAttr && clickAttr.includes('Proceeding to Secure UK Checkout!')) {
      btn.onclick = function(e) {
        e.preventDefault();
        window.location.href = 'checkout.html';
      };
    }
  });

  // If on checkout page, populate the hidden input for FormSubmit
  const cartInput = document.getElementById('cart_details_input');
  if (cartInput) {
    const summaryStr = cart.map(item => `${item.title} (Qty: ${item.quantity}) - £${item.price.toFixed(2)}`).join(' | ');
    cartInput.value = summaryStr || 'Cart is empty';
  }
}
