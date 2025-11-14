const grid = document.getElementById('product-grid');

async function loadProducts() {
  try {
    const res = await fetch('https://YOUR_BACKEND_URL/products'); // Replace with your backend URL
    const products = await res.json();

    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <a href="${p.link}" class="btn" target="_blank">Buy Now</a>
      `;
      grid.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading products:', err);
    grid.innerHTML = '<p>Failed to load products. Please try again later.</p>';
  }
}

loadProducts();

// Newsletter form dummy
document.getElementById('newsletter-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for subscribing!');
});
