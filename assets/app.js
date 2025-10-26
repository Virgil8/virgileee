// MOBILE NAV
const burger = document.getElementById("burgerBtn");
const nav = document.getElementById("mainNav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Fermer le menu mobile quand on clique sur un lien
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

// CART COUNT SYNC (demo front only)
function setCartCount(val) {
  document.querySelectorAll("#cartCount, #cartCountProduct, #cartCountCart").forEach(el => {
    if (el) el.textContent = val;
  });
}

// ADD TO CART BUTTONS (démo)
document.querySelectorAll("[data-add-cart]").forEach(btn => {
  btn.addEventListener("click", () => {
    setCartCount(1);
    alert("LYNX//CORE ajouté au panier ✅");
  });
});