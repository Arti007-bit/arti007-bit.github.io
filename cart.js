// 🛒 --- کد مدیریت سبد خرید --- 🛒

// گرفتن سبد خرید از localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// ذخیره سبد خرید در localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// افزودن محصول به سبد خرید
function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(p => p.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  alert(`✅ "${product.name}" به سبد خرید افزوده شد`);
}

// اجرا پس از لود شدن صفحه
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add-to-cart").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const productElement = btn.closest(".product");

      const product = {
        id: index + 1,
        name: productElement.querySelector("h3").innerText.trim(),
        price: parseInt(
          productElement.querySelector("p").innerText.replace(/\D/g, "")
        )
      };

      addToCart(product);
    });
  });
});
