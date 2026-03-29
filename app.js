/* ===================================================
   KisanBazaar – App Logic
   Farmer → Buyer Direct Marketplace
   =================================================== */

// ===== LISTING DATA =====
// Every listing is something a FARMER is selling / renting
const listings = [
  // ── PRODUCE ───────────────────────────────────────
  {
    id:1, title:"Fresh Organic Tomatoes – 500 kg available",
    category:"produce", price:1800, unit:"per quintal",
    location:"Nashik, MH", seller:"Ramesh Patil", phone:"9876543210",
    date:"2026-03-29", emoji:"🍅", badge:"produce",
    qty:"500 kg", forBulk:true, tags:["organic","tomato","vegetable"]
  },
  {
    id:2, title:"Premium Basmati Rice – 50 Quintals",
    category:"produce", price:4200, unit:"per quintal",
    location:"Amritsar, PB", seller:"Gurpreet Singh", phone:"9812345678",
    date:"2026-03-28", emoji:"🌾", badge:"produce",
    qty:"50 quintals", forBulk:true, tags:["rice","basmati","grain"]
  },
  {
    id:3, title:"Yellow Onions – 200 Bags, Direct Farm Sale",
    category:"produce", price:900, unit:"per quintal",
    location:"Lasalgaon, MH", seller:"Vijay Shinde", phone:"9765432109",
    date:"2026-03-27", emoji:"🧅", badge:"produce",
    qty:"200 bags (~20 tonnes)", forBulk:true, tags:["onion","bulk"]
  },
  {
    id:4, title:"Fresh Green Chillies – Guntur Grade A",
    category:"produce", price:3500, unit:"per quintal",
    location:"Guntur, AP", seller:"Venkat Reddy", phone:"9823456789",
    date:"2026-03-26", emoji:"🌶️", badge:"produce",
    qty:"80 quintals", forBulk:true, tags:["chilli","spice"]
  },
  {
    id:5, title:"Alphonso Mangoes – Pre-booking for May",
    category:"produce", price:12000, unit:"per quintal",
    location:"Ratnagiri, MH", seller:"Suresh Sawant", phone:"9811122334",
    date:"2026-03-26", emoji:"🥭", badge:"produce",
    qty:"25 quintals", forBulk:false, tags:["mango","alphonso","fruit"]
  },
  {
    id:6, title:"Organic Wheat – 100 Quintals Ready",
    category:"produce", price:2800, unit:"per quintal",
    location:"Indore, MP", seller:"Kamlesh Yadav", phone:"9933445566",
    date:"2026-03-25", emoji:"🌾", badge:"produce",
    qty:"100 quintals", forBulk:true, tags:["wheat","organic","grain"]
  },
  {
    id:7, title:"Fresh Potatoes – 300 Bags from AP Farm",
    category:"produce", price:1100, unit:"per quintal",
    location:"Agra, UP", seller:"Ram Kishore", phone:"9855667788",
    date:"2026-03-24", emoji:"🥔", badge:"produce",
    qty:"30 tonnes", forBulk:true, tags:["potato"]
  },
  {
    id:8, title:"Dragon Fruit – Export Quality, 10 Quintals",
    category:"produce", price:18000, unit:"per quintal",
    location:"Pune, MH", seller:"Nitin More", phone:"9900112233",
    date:"2026-03-23", emoji:"🫐", badge:"produce",
    qty:"10 quintals", forBulk:false, tags:["exotic","dragon fruit"]
  },

  // ── DAIRY ─────────────────────────────────────────
  {
    id:9, title:"Fresh Raw Milk – 200 Litres Daily Supply",
    category:"dairy", price:42, unit:"per litre",
    location:"Anand, GJ", seller:"Ashok Patel", phone:"9898989898",
    date:"2026-03-29", emoji:"🥛", badge:"dairy",
    qty:"200 litres/day", forBulk:true, tags:["milk","raw","dairy"]
  },
  {
    id:10, title:"Pure Desi Ghee – A2 Cow Ghee",
    category:"dairy", price:1400, unit:"per kg",
    location:"Mathura, UP", seller:"Gopal Das", phone:"9966778899",
    date:"2026-03-28", emoji:"🫙", badge:"dairy",
    qty:"50 kg batch monthly", forBulk:false, tags:["ghee","a2","desi cow"]
  },
  {
    id:11, title:"Buffalo Curd – 50 kg Daily",
    category:"dairy", price:70, unit:"per kg",
    location:"Karnal, HR", seller:"Surinder Kumar", phone:"9876001122",
    date:"2026-03-27", emoji:"🥣", badge:"dairy",
    qty:"50 kg/day", forBulk:true, tags:["curd","yogurt","buffalo"]
  },
  {
    id:12, title:"Paneer – Fresh Farm Made, Bulk Orders",
    category:"dairy", price:280, unit:"per kg",
    location:"Ludhiana, PB", seller:"Paramjit Singh", phone:"9988776655",
    date:"2026-03-26", emoji:"🧀", badge:"dairy",
    qty:"100 kg/week", forBulk:true, tags:["paneer","cheese","dairy"]
  },
  {
    id:13, title:"Lassi – Traditional Punjabi, 500 Cups Batch",
    category:"dairy", price:30, unit:"per cup",
    location:"Amritsar, PB", seller:"Manjeet Kaur", phone:"9855001234",
    date:"2026-03-25", emoji:"🥤", badge:"dairy",
    qty:"500 cups/batch", forBulk:true, tags:["lassi","drink","dairy"]
  },

  // ── LIVESTOCK ──────────────────────────────────────
  {
    id:14, title:"HF Dairy Cow – 18 Litres/Day, Healthy",
    category:"livestock", price:55000, unit:"fixed price",
    location:"Anand, GJ", seller:"Ashok Patel", phone:"9898989890",
    date:"2026-03-29", emoji:"🐄", badge:"livestock",
    qty:"1 cow (3 available)", forBulk:false, tags:["cow","dairy","HF"]
  },
  {
    id:15, title:"Murrah Buffaloes – High Milk Yield Breed",
    category:"livestock", price:80000, unit:"per head",
    location:"Rohtak, HR", seller:"Manoj Kumar", phone:"9876512345",
    date:"2026-03-28", emoji:"🐃", badge:"livestock",
    qty:"5 buffaloes", forBulk:false, tags:["buffalo","murrah","dairy"]
  },
  {
    id:16, title:"Sahiwal Cows – Indigenous Breed, 2 Available",
    category:"livestock", price:45000, unit:"per cow",
    location:"Ludhiana, PB", seller:"Gurdev Singh", phone:"9988001122",
    date:"2026-03-27", emoji:"🐄", badge:"livestock",
    qty:"2 cows", forBulk:false, tags:["cow","sahiwal","indigenous"]
  },
  {
    id:17, title:"Young Goats – Sirohi Breed, Ready for Sale",
    category:"livestock", price:8500, unit:"per piece",
    location:"Ajmer, RJ", seller:"Salim Khan", phone:"9977665544",
    date:"2026-03-26", emoji:"🐐", badge:"livestock",
    qty:"12 goats", forBulk:true, tags:["goat","sirohi","meat"]
  },
  {
    id:18, title:"Kadaknath Chickens – Live, 200 Birds",
    category:"livestock", price:600, unit:"per bird",
    location:"Jhabua, MP", seller:"Devilal Bhuria", phone:"9944332211",
    date:"2026-03-25", emoji:"🐓", badge:"livestock",
    qty:"200 birds", forBulk:true, tags:["poultry","kadaknath","chicken"]
  },

  // ── FERTILIZER ─────────────────────────────────────
  {
    id:19, title:"Aged Composted Cow Dung – 10 Tonne Lot",
    category:"fertilizer", price:800, unit:"per tonne",
    location:"Varanasi, UP", seller:"Brijesh Mishra", phone:"9832109876",
    date:"2026-03-29", emoji:"🌱", badge:"fertilizer",
    qty:"10 tonnes (more available)", forBulk:true, tags:["cow dung","compost","organic"]
  },
  {
    id:20, title:"Vermicompost – Certified Organic, 5 Tonne",
    category:"fertilizer", price:6500, unit:"per tonne",
    location:"Coimbatore, TN", seller:"Murugan Raja", phone:"9943218765",
    date:"2026-03-28", emoji:"🪱", badge:"fertilizer",
    qty:"5 tonnes", forBulk:true, tags:["vermicompost","organic","fertilizer"]
  },
  {
    id:21, title:"Dried Cow Dung Cakes – 1000 Pieces",
    category:"fertilizer", price:500, unit:"per 100 pieces",
    location:"Mathura, UP", seller:"Gopal Das", phone:"9966778822",
    date:"2026-03-27", emoji:"💩", badge:"fertilizer",
    qty:"1000 pieces", forBulk:true, tags:["cow dung","cake","fuel","organic"]
  },
  {
    id:22, title:"Neem Khali Fertilizer – 20 Quintals",
    category:"fertilizer", price:2200, unit:"per quintal",
    location:"Rajkot, GJ", seller:"Haresh Makwana", phone:"9911223344",
    date:"2026-03-26", emoji:"🌿", badge:"fertilizer",
    qty:"20 quintals", forBulk:true, tags:["neem","organic","fertilizer"]
  },
  {
    id:23, title:"Biogas Slurry – Liquid Fertilizer, Free Pickup",
    category:"fertilizer", price:400, unit:"per tonne",
    location:"Jaipur, RJ", seller:"Mohan Sharma", phone:"9955443322",
    date:"2026-03-25", emoji:"♻️", badge:"fertilizer",
    qty:"Unlimited (biogas plant)", forBulk:true, tags:["biogas","slurry","liquid fertilizer"]
  },

  // ── SEEDS ──────────────────────────────────────────
  {
    id:24, title:"Hybrid Tomato Seeds – High Yield Variety",
    category:"seeds", price:1200, unit:"per 100g",
    location:"Pune, MH", seller:"Arun Kulkarni", phone:"9822567890",
    date:"2026-03-29", emoji:"🍅", badge:"seeds",
    qty:"50 kg available", forBulk:true, tags:["tomato","seed","hybrid"]
  },
  {
    id:25, title:"BT Cotton Seeds – Certified, 200 Packets",
    category:"seeds", price:900, unit:"per packet",
    location:"Wardha, MH", seller:"Dinesh Kolhe", phone:"9890123456",
    date:"2026-03-28", emoji:"🌱", badge:"seeds",
    qty:"200 packets", forBulk:true, tags:["cotton","bt","seed"]
  },
  {
    id:26, title:"Mango Saplings – Alphonso Grafted, 100 Plants",
    category:"seeds", price:180, unit:"per plant",
    location:"Ratnagiri, MH", seller:"Vitthal Gavankar", phone:"9823001122",
    date:"2026-03-27", emoji:"🥭", badge:"seeds",
    qty:"100 saplings", forBulk:false, tags:["mango","sapling","alphonso"]
  },
  {
    id:27, title:"Coconut Seedlings – 6 Months Old, Healthy",
    category:"seeds", price:120, unit:"per plant",
    location:"Kollam, KL", seller:"Rajan Nair", phone:"9847001234",
    date:"2026-03-26", emoji:"🥥", badge:"seeds",
    qty:"500 seedlings", forBulk:true, tags:["coconut","sapling","planting"]
  },

  // ── EQUIPMENT ──────────────────────────────────────
  {
    id:28, title:"Mahindra 575 Tractor – FOR RENT",
    category:"equipment", price:1200, unit:"per day",
    location:"Solapur, MH", seller:"Dilip Deshmukh", phone:"9871234567",
    date:"2026-03-29", emoji:"🚜", badge:"equipment",
    qty:"Available daily", isRent:true, forBulk:true, tags:["tractor","mahindra","rent"]
  },
  {
    id:29, title:"Mini Power Tiller / Weeder – FOR RENT",
    category:"equipment", price:400, unit:"per day",
    location:"Salem, TN", seller:"Anbu Kumar", phone:"9962345678",
    date:"2026-03-28", emoji:"⚙️", badge:"equipment",
    qty:"Available", isRent:true, forBulk:false, tags:["tiller","weeder","rent"]
  },
  {
    id:30, title:"Combine Harvester – FOR RENT, Wheat Season",
    category:"equipment", price:2500, unit:"per acre",
    location:"Moga, PB", seller:"Balbir Singh", phone:"9815678901",
    date:"2026-03-27", emoji:"🌾", badge:"equipment",
    qty:"Available March–May", isRent:true, forBulk:true, tags:["harvester","wheat","rent"]
  },
  {
    id:31, title:"Drip Irrigation Kit – 1 Acre Set, Selling",
    category:"equipment", price:12000, unit:"fixed price",
    location:"Sangli, MH", seller:"Anil Patil", phone:"9823456780",
    date:"2026-03-26", emoji:"💧", badge:"equipment",
    qty:"3 sets available", isRent:false, forBulk:false, tags:["drip","irrigation","equipment"]
  },
  {
    id:32, title:"Solar Water Pump – 2HP, Used 6 Months",
    category:"equipment", price:28000, unit:"fixed price",
    location:"Nanded, MH", seller:"Sachin Kale", phone:"9822334455",
    date:"2026-03-25", emoji:"☀️", badge:"equipment",
    qty:"1 piece", isRent:false, forBulk:false, tags:["solar","pump","irrigation"]
  },
];

// ===== STATE =====
let activeCategory  = "all";
let activeBuyerType = "all";
let searchQuery     = "";

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderListings(listings);
  setupNavbar();
  setupButtons();
  setupSearch();
  animateOnScroll();
});

// ===== NAVBAR =====
function setupNavbar() {
  window.addEventListener("scroll", () => {
    document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 20);
  });

  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
    document.getElementById("navActions").classList.toggle("open");
  });
}

// ===== BUTTONS =====
function setupButtons() {
  document.getElementById("postListingBtn").addEventListener("click", () => openModal("postModal"));
  document.getElementById("heroPostBtn").addEventListener("click",    () => openModal("postModal"));
  document.getElementById("ctaPostBtn").addEventListener("click",     () => openModal("postModal"));
  document.getElementById("loginBtn").addEventListener("click",       () => openModal("loginModal"));

  document.querySelectorAll(".modal-overlay").forEach(o =>
    o.addEventListener("click", e => { if (e.target === o) closeModal(o.id); })
  );
  document.addEventListener("keydown", e => {
    if (e.key === "Escape")
      document.querySelectorAll(".modal-overlay.open").forEach(m => m.classList.remove("open"));
  });
}

// ===== SEARCH =====
function setupSearch() {
  const btn   = document.getElementById("searchBtn");
  const input = document.getElementById("searchInput");
  const cat   = document.getElementById("categorySelect");

  const doSearch = () => {
    searchQuery    = input.value.toLowerCase().trim();
    activeCategory = cat.value || "all";

    // sync category tabs
    document.querySelectorAll(".cat-card").forEach(c => {
      c.classList.toggle("active-cat", c.dataset.cat === activeCategory);
    });

    applyFilters();
    document.getElementById("listings").scrollIntoView({ behavior:"smooth" });
  };

  btn.addEventListener("click", doSearch);
  input.addEventListener("keydown", e => { if (e.key === "Enter") doSearch(); });
}

// ===== FILTER =====
function filterListings(cat, el) {
  activeCategory = cat;
  searchQuery    = "";
  document.getElementById("searchInput").value = "";
  document.getElementById("categorySelect").value = cat === "all" ? "" : cat;

  document.querySelectorAll(".cat-card").forEach(c => c.classList.remove("active-cat"));
  el.classList.add("active-cat");

  applyFilters();
  setTimeout(() => document.getElementById("listings").scrollIntoView({ behavior:"smooth" }), 80);
}

function filterBuyerType(type, el) {
  activeBuyerType = type;
  document.querySelectorAll(".toggle-tab").forEach(t => t.classList.remove("active"));
  el.classList.add("active");
  applyFilters();
}

function applyFilters() {
  let data = [...listings];

  if (activeCategory !== "all") data = data.filter(l => l.category === activeCategory);

  if (activeBuyerType === "bulk")   data = data.filter(l => l.forBulk === true);
  if (activeBuyerType === "retail") data = data.filter(l => l.forBulk === false);

  if (searchQuery) {
    data = data.filter(l =>
      l.title.toLowerCase().includes(searchQuery)   ||
      l.location.toLowerCase().includes(searchQuery) ||
      l.seller.toLowerCase().includes(searchQuery)   ||
      (l.tags||[]).some(t => t.toLowerCase().includes(searchQuery))
    );
  }

  renderListings(data);
}

// ===== SORT =====
function sortListings(value) {
  applyFiltersAndSort(value);
}

function applyFiltersAndSort(sortBy) {
  let data = [...listings];
  if (activeCategory !== "all")   data = data.filter(l => l.category === activeCategory);
  if (activeBuyerType === "bulk") data = data.filter(l => l.forBulk === true);
  if (activeBuyerType === "retail")data= data.filter(l => l.forBulk === false);
  if (searchQuery) data = data.filter(l =>
    l.title.toLowerCase().includes(searchQuery) ||
    l.location.toLowerCase().includes(searchQuery) ||
    (l.tags||[]).some(t => t.toLowerCase().includes(searchQuery))
  );

  const sort = sortBy || document.getElementById("sortSelect").value;
  if (sort === "price-asc")  data.sort((a,b) => a.price - b.price);
  if (sort === "price-desc") data.sort((a,b) => b.price - a.price);

  renderListings(data);
}

// ===== RENDER =====
const catLabel = {
  produce:"🥬 PRODUCE", dairy:"🥛 DAIRY", livestock:"🐄 LIVESTOCK",
  fertilizer:"♻️ FERTILIZER", seeds:"🌱 SEEDS", equipment:"🚜 EQUIPMENT"
};

function renderListings(data) {
  const grid = document.getElementById("listingsGrid");
  document.getElementById("listingCount").textContent = data.length;

  if (!data.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);">
      <div style="font-size:3rem;margin-bottom:12px">🔍</div>
      <p style="font-size:1.05rem">No listings found. Try a different search or category.</p>
    </div>`;
    return;
  }

  grid.innerHTML = data.map((item, i) => `
    <div class="listing-card" style="animation-delay:${i*0.04}s" onclick="openContactModal(${item.id})">
      <div class="card-img-wrap">
        <div class="card-emoji">${item.emoji}</div>
        <div class="card-badges">
          <span class="card-badge badge-${item.badge}">${catLabel[item.badge]||item.badge.toUpperCase()}</span>
        </div>
        ${item.isRent ? '<span class="badge-rent">FOR RENT</span>' : ''}
        ${item.forBulk && !item.isRent ? '<span class="badge-bulk">📦 BULK OK</span>' : ''}
        <span class="direct-tag">⚡ DIRECT FROM FARMER</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <div class="card-meta">
          <span>📍 ${item.location}</span>
          <span>•</span>
          <span>👨‍🌾 ${item.seller}</span>
        </div>
        <div class="card-qty">📦 ${item.qty}</div>
        <div class="card-footer">
          <div class="card-price">
            ₹${item.price.toLocaleString("en-IN")}
            <small>${item.unit}</small>
          </div>
          <button class="card-contact-btn" onclick="event.stopPropagation();openContactModal(${item.id})">
            📞 Contact
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// ===== MODALS =====
function openModal(id) { document.getElementById(id).classList.add("open"); document.body.style.overflow="hidden"; }
function closeModal(id) { document.getElementById(id).classList.remove("open"); document.body.style.overflow=""; }

function openContactModal(id) {
  const item = listings.find(l => l.id === id);
  if (!item) return;

  document.getElementById("contactModalTitle").textContent  = item.title;
  document.getElementById("contactModalSeller").textContent = `Listed by farmer: ${item.seller}`;
  document.getElementById("contactPhone").textContent       = `+91 ${item.phone.replace(/(\d{5})(\d{5})/,"$1 $2")}`;
  document.getElementById("contactLocation").textContent    = item.location;
  document.getElementById("contactQty").textContent         = item.qty;
  document.getElementById("contactPrice").textContent       = `₹${item.price.toLocaleString("en-IN")} ${item.unit}`;

  const msg = `Hi ${item.seller}, I found your listing on KisanBazaar: *"${item.title}"*. Is it still available? What is the best price?`;
  document.getElementById("whatsappBtn").href = `https://wa.me/91${item.phone}?text=${encodeURIComponent(msg)}`;
  document.getElementById("callBtn").href     = `tel:+91${item.phone}`;

  openModal("contactModal");
}

function submitListing(e) {
  e.preventDefault();
  closeModal("postModal");
  showToast("🌾 Your listing is live! Buyers will contact you directly on WhatsApp.");
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.createElement("div");
  t.innerHTML = msg;
  t.style.cssText = `
    position:fixed;bottom:28px;left:50%;transform:translateX(-50%);
    background:linear-gradient(135deg,#2E7D32,#4CAF50);
    color:#fff;padding:14px 28px;border-radius:50px;
    font-weight:700;font-size:0.9rem;z-index:9999;
    box-shadow:0 8px 32px rgba(0,0,0,0.4);
    animation:toastPop 0.4s ease;white-space:nowrap;
  `;
  document.head.insertAdjacentHTML("beforeend",`<style>@keyframes toastPop{from{opacity:0;transform:translateX(-50%) translateY(16px);}to{opacity:1;transform:translateX(-50%) translateY(0);}}</style>`);
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4500);
}

// ===== SCROLL ANIMATIONS =====
function animateOnScroll() {
  const els = document.querySelectorAll(".for-card,.step-card,.cat-card,.buyer-chip");
  const io  = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity="1"; e.target.style.transform="none"; }
    });
  }, { threshold:0.1 });
  els.forEach(el => {
    el.style.opacity    = "0";
    el.style.transform  = "translateY(16px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    io.observe(el);
  });
}
