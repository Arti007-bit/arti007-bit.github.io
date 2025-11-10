// افزودن محصول به سبد خرید
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const productElement = this.closest('.product');
    const name = productElement.querySelector('h3').textContent;
    const priceText = productElement.querySelector('.price').textContent;
    const price = parseInt(priceText.replace(/[^\d]/g, '')); // عدد خالص
    
    // دریافت سبد خرید از localStorage
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // بررسی وجود محصول
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    // ذخیره مجدد سبد خرید
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`✅ ${name} به سبد خرید اضافه شد!`);
  });
});
