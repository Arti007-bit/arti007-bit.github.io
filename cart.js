// افزودن محصول به سبد خرید
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const productElement = this.closest('.product');
    const name = productElement.querySelector('h3').textContent;
    const price = Number(this.dataset.price) || 0;

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.name === name);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`✅ ${name} به سبد خرید اضافه شد!`);
  });
});
