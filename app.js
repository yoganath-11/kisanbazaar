/* ===================================================
   KisanBazaar – App Logic
   =================================================== */

// ===== LISTING DATA =====
const listings = [
  // -- PRODUCE --
  { id: 1, title: "Fresh Organic Tomatoes", category: "produce", price: 1800, unit: "per quintal", location: "Nashik, MH", seller: "Ramesh Patil", phone: "9876543210", date: "2026-03-24", emoji: "🍅", badge: "produce", tags: ["organic", "fresh"] },
  { id: 2, title: "Premium Basmati Rice – 50 Bags Available", category: "produce", price: 4200, unit: "per quintal", location: "Amritsar, PB", seller: "Gurpreet Singh", phone: "9812345678", date: "2026-03-23", emoji: "🌾", badge: "produce", tags: ["rice", "basmati"] },
  { id: 3, title: "Yellow Onions – Bulk Sale", category: "produce", price: 900, unit: "per quintal", location: "Lasalgaon, MH", seller: "Vijay Shinde", phone: "9765432109", date: "2026-03-22", emoji: "🧅", badge: "produce", tags: ["onion", "bulk"] },
  { id: 4, title: "Fresh Green Chillies", category: "produce", price: 3500, unit: "per quintal", location: "Guntur, AP", seller: "Venkat Reddy", phone: "9823456789", date: "2026-03-21", emoji: "🌶️", badge: "produce", tags: ["chilli"] },
  { id: 5, title: "Alphonso Mangoes – Pre-booking Open", category: "produce", price: 12000, unit: "per quintal", location: "Ratnagiri, MH", seller: "Suresh Sawant", phone: "9811122334", date: "2026-03-20", emoji: "🥭", badge: "produce", tags: ["mango", "alphonso"] },
  { id: 6, title: "Organic Wheat – 100 Quintals Available", category: "produce", price: 2800, unit: "per quintal", location: "Indore, MP", seller: "Kamlesh Yadav", phone: "9933445566", date: "2026-03-22", emoji: "🌾", badge: "produce", tags: ["wheat", "organic"] },
  { id: 7, title: "Fresh Potatoes – Farm Direct", category: "produce", price: 1100, unit: "per quintal", location: "Agra, UP", seller: "Ram Kishore", phone: "9855667788", date: "2026-03-19", emoji: "🥔", badge: "produce", tags: ["potato"] },
  { id: 8, title: "Dragon Fruit – Exotic, Export Quality", category: "produce", price: 18000, unit: "per quintal", location: "Pune, MH", seller: "Nitin More", phone: "9900112233", date: "2026-03-18", emoji: "🫐", badge: "produce", tags: ["exotic", "dragon fruit"] },

  // -- LIVESTOCK --
  { id: 9, title: "HF Dairy Cow – 18 Litres/Day", category: "livestock", price: 55000, unit: "fixed price", location: "Anand, GJ", seller: "Ashok Patel", phone: "9898989898", date: "2026-03-24", emoji: "🐄", badge: "livestock", tags: ["cow", "dairy", "HF"] },
  { id: 10, title: "Murrah Buffalo – High Milk Yield", category: "livestock", price: 80000, unit: "fixed price", location: "Rohtak, HR", seller: "Manoj Kumar", phone: "9876512345", date: "2026-03-23", emoji: "🐃", badge: "livestock", tags: ["buffalo", "murrah", "dairy"] },
  { id: 11, title: "Sahiwal Cows (2 Available)", category: "livestock", price: 45000, unit: "per cow", location: "Ludhiana, PB", seller: "Paramjit Singh", phone: "9988776655", date: "2026-03-20", emoji: "🐄", badge: "livestock", tags: ["cow", "sahiwal"] },
  { id: 12, title: "Young Goats – Sirohi Breed", category: "livestock", price: 8500, unit: "per piece", location: "Ajmer, RJ", seller: "Salim Khan", phone: "9977665544", date: "2026-03-22", emoji: "🐐", badge: "livestock", tags: ["goat", "sirohi"] },
  { id: 13, title: "Kadaknath Chicks – 200 Available", category: "livestock", price: 150, unit: "per piece", location: "Jhabua, MP", seller: "Devilal Bhuria", phone: "9944332211", date: "2026-03-21", emoji: "🐓", badge: "livestock", tags: ["poultry", "kadaknath", "chick"] },

  // -- FERTILIZER --
  { id: 14, title: "Organic Cow Dung – Composted, Aged", category: "fertilizer", price: 800, unit: "per tonne", location: "Varanasi, UP", seller: "Brijesh Mishra", phone: "9832109876", date: "2026-03-24", emoji: "🌱", badge: "fertilizer", tags: ["cow dung", "compost", "organic"] },
  { id: 15, title: "Vermicompost – 10 Tonne Available", category: "fertilizer", price: 6500, unit: "per tonne", location: "Coimbatore, TN", seller: "Murugan Raja", phone: "9943218765", date: "2026-03-23", emoji: "🪱", badge: "fertilizer", tags: ["vermicompost", "organic"] },
  { id: 16, title: "Fresh Cow Dung Cake (Dried)", category: "fertilizer", price: 500, unit: "per 100 pieces", location: "Mathura, UP", seller: "Gopal Das", phone: "9966778899", date: "2026-03-22", emoji: "💩", badge: "fertilizer", tags: ["cow dung", "cake", "fuel"] },
  { id: 17, title: "Neem Khali Organic Fertilizer", category: "fertilizer", price: 2200, unit: "per quintal", location: "Rajkot, GJ", seller: "Haresh Makwana", phone: "9911223344", date: "2026-03-20", emoji: "🌿", badge: "fertilizer", tags: ["neem", "organic"] },
  { id: 18, title: "Gobar Gas Plant Slurry", category: "fertilizer", price: 400, unit: "per tonne", location: "Jaipur, RJ", seller: "Mohan Sharma", phone: "9955443322", date: "2026-03-19", emoji: "♻️", badge: "fertilizer", tags: ["gobar gas", "slurry"] },

  // -- EQUIPMENT --
  { id: 19, title: "Mahindra 575 Tractor for Rent", category: "equipment", price: 1200, unit: "per day", location: "Solapur, MH", seller: "Dilip Deshmukh", phone: "9871234567", date: "2026-03-24", emoji: "🚜", badge: "equipment", tags: ["tractor", "mahindra", "rent"], isRent: true },
  { id: 20, title: "Mini Tiller / Power Weeder for Rent", category: "equipment", price: 400, unit: "per day", location: "Salem, TN", seller: "Anbu Kumar", phone: "9962345678", date: "2026-03-23", emoji: "⚙️", badge: "equipment", tags: ["tiller", "weeder", "rent"], isRent: true },
  { id: 21, title: "Combine Harvester for Rent – Wheat Season", category: "equipment", price: 2500, unit: "per acre", location: "Moga, PB", seller: "Balbir Singh", phone: "9815678901", date: "2026-03-22", emoji: "🌾", badge: "equipment", tags: ["harvester", "wheat", "rent"], isRent: true },
  { id: 22, title: "Rotavator – Sonalika Compatible", category: "equipment", price: 28000, unit: "fixed price", location: "Hissar, HR", seller: "Rajinder Pal", phone: "9896543210", date: "2026-03-21", emoji: "🔧", badge: "equipment", tags: ["rotavator", "attachement"] },
  { id: 23, title: "Drip Irrigation Kit – 1 Acre", category: "equipment", price: 12000, unit: "fixed price", location: "Sangli, MH", seller: "Anil Patil", phone: "9823456780", date: "2026-03-20", emoji: "💧", badge: "equipment", tags: ["drip", "irrigation"] },
  { id: 24, title: "Hand Operated Sprayer – New", category: "equipment", price: 2200, unit: "fixed price", location: "Belgaum, KA", seller: "Krishna Gowda", phone: "9844556677", date: "2026-03-19", emoji: "🧴", badge: "equipment", tags: ["sprayer"] },
  { id: 25, title: "Walk-behind Rice Transplanter for Rent", category: "equipment", price: 600, unit: "per day", location: "Thanjavur, TN", seller: "Ravi Chandran", phone: "9955123456", date: "2026-03-18", emoji: "🌱", badge: "equipment", tags: ["transplanter", "rice", "rent"], isRent: true },
  { id: 26, title: "Solar Water Pump – 2HP", category: "equipment", price: 35000, unit: "fixed price", location: "Nanded, MH", seller: "Sachin Kale", phone: "9822334455", date: "2026-03-17", emoji: "☀️", badge: "equipment", tags: ["solar", "pump", "irrigation"] },
];

// ===== STATE =====
let activeCategory = "all";
let searchQuery = "";

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderListings(listings);
  setupNavbar();
  setupButtonListeners();
  setupSearch();
});

// ===== NAVBAR SCROLL =====
function setupNavbar() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });
  const hamburger = document.getElementById("hamburger");
  hamburger.addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
    document.getElementById("navLinks").style.display = "";
    const nav = document.getElementById("navLinks");
    const actions = document.querySelector(".nav-actions");
    nav.classList.toggle("open");
    actions.classList.toggle("open");
  });
}

// ===== BUTTON LISTENERS =====
function setupButtonListeners() {
  document.getElementById("postListingBtn").addEventListener("click", () => openModal("postModal"));
  document.getElementById("ctaPostBtn").addEventListener("click", () => openModal("postModal"));
  document.getElementById("loginBtn").addEventListener("click", () => openModal("loginModal"));

  // Close modals on overlay click
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("open");
      }
    });
  });

  // ESC key to close modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach(m => m.classList.remove("open"));
    }
  });
}

// ===== SEARCH =====
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const categorySelect = document.getElementById("categorySelect");

  function doSearch() {
    searchQuery = searchInput.value.toLowerCase();
    const cat = categorySelect.value || "all";
    activeCategory = cat;
    applyFilters();
    // Scroll to listings
    document.getElementById("listings").scrollIntoView({ behavior: "smooth" });
  }

  searchBtn.addEventListener("click", doSearch);
  searchInput.addEventListener("keydown", (e) => { if (e.key === "Enter") doSearch(); });
}

// ===== RENDER LISTINGS =====
function renderListings(data) {
  const grid = document.getElementById("listingsGrid");
  document.getElementById("listingCount").textContent = data.length;

  if (data.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted);">
      <div style="font-size:3rem;margin-bottom:12px">🔍</div>
      <p style="font-size:1.1rem">No listings found. Try a different search.</p>
    </div>`;
    return;
  }

  grid.innerHTML = data.map((item, i) => `
    <div class="listing-card" style="animation-delay:${i * 0.04}s" onclick="openContactModal(${item.id})">
      <div class="card-img-wrap">
        <div class="card-emoji">${item.emoji}</div>
        <div class="card-badge badge-${item.badge}">${getCategoryLabel(item.category)}</div>
        ${item.isRent ? '<div class="card-badge badge-rent" style="left:auto;right:12px;">FOR RENT</div>' : ''}
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <div class="card-meta">
          <span>📍 ${item.location}</span>
          <span>•</span>
          <span>👨‍🌾 ${item.seller}</span>
        </div>
        <div class="card-footer">
          <div class="card-price">
            ₹${item.price.toLocaleString('en-IN')}
            <small>${item.unit}</small>
          </div>
          <button class="card-contact-btn" onclick="event.stopPropagation();openContactModal(${item.id})">📞 Contact</button>
        </div>
      </div>
    </div>
  `).join("");
}

function getCategoryLabel(cat) {
  const labels = { produce: "🥬 PRODUCE", livestock: "🐄 LIVESTOCK", fertilizer: "♻️ FERTILIZER", equipment: "🚜 EQUIPMENT" };
  return labels[cat] || cat.toUpperCase();
}

// ===== FILTER =====
function filterListings(cat, el) {
  activeCategory = cat;
  searchQuery = "";
  document.getElementById("searchInput").value = "";

  // Update active tab
  document.querySelectorAll(".cat-card").forEach(c => c.classList.remove("active-cat"));
  el.classList.add("active-cat");

  applyFilters();

  // scroll to listings
  setTimeout(() => document.getElementById("listings").scrollIntoView({ behavior: "smooth" }), 100);
}

function applyFilters() {
  let filtered = listings;

  if (activeCategory !== "all") {
    filtered = filtered.filter(l => l.category === activeCategory);
  }

  if (searchQuery) {
    filtered = filtered.filter(l =>
      l.title.toLowerCase().includes(searchQuery) ||
      l.location.toLowerCase().includes(searchQuery) ||
      l.seller.toLowerCase().includes(searchQuery) ||
      (l.tags || []).some(t => t.toLowerCase().includes(searchQuery))
    );
  }

  // Update category tab counts
  document.querySelectorAll(".cat-card").forEach(card => {
    const cat = card.dataset.cat;
    const count = cat === "all"
      ? listings.length
      : listings.filter(l => l.category === cat).length;
    card.querySelector(".cat-count").textContent = count + " items";
  });

  renderListings(filtered);
}

// ===== SORT =====
function sortListings(value) {
  let data = [...listings];
  if (activeCategory !== "all") data = data.filter(l => l.category === activeCategory);

  if (value === "price-asc") data.sort((a, b) => a.price - b.price);
  else if (value === "price-desc") data.sort((a, b) => b.price - a.price);
  else data.sort((a, b) => new Date(b.date) - new Date(a.date));

  renderListings(data);
}

// ===== MODALS =====
function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}

function openContactModal(id) {
  const item = listings.find(l => l.id === id);
  if (!item) return;

  document.getElementById("contactModalTitle").textContent = item.title;
  document.getElementById("contactModalSeller").textContent = `Listed by ${item.seller}`;
  document.getElementById("contactPhone").textContent = `+91 ${item.phone.replace(/(\d{5})(\d{5})/, '$1 $2')}`;
  document.getElementById("contactLocation").textContent = item.location;
  document.getElementById("whatsappBtn").href = `https://wa.me/91${item.phone}?text=Hi%20${encodeURIComponent(item.seller)}%2C%20I%20saw%20your%20listing%20on%20KisanBazaar%20for%20%22${encodeURIComponent(item.title)}%22.%20Is%20it%20still%20available%3F`;
  document.getElementById("callBtn").href = `tel:+91${item.phone}`;

  openModal("contactModal");
}

function submitListing(e) {
  e.preventDefault();
  closeModal("postModal");
  // Show success toast
  showToast("🌾 Your listing has been posted successfully! Buyers will contact you soon.");
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = msg;
  toast.style.cssText = `
    position:fixed;bottom:30px;left:50%;transform:translateX(-50%);
    background:linear-gradient(135deg,#2E7D32,#4CAF50);
    color:#fff;padding:14px 28px;border-radius:50px;
    font-weight:600;font-size:0.92rem;z-index:9999;
    box-shadow:0 8px 32px rgba(0,0,0,0.4);
    animation:toastIn 0.4s ease;
  `;
  document.body.appendChild(toast);

  const style = document.createElement("style");
  style.textContent = `@keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(20px);}to{opacity:1;transform:translateX(-50%) translateY(0);}}`;
  document.head.appendChild(style);

  setTimeout(() => toast.remove(), 4000);
}
