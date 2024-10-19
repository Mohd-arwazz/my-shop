// Fetching products from the FakeStoreAPI and displaying them dynamically
const productGrid = document.getElementById('product-grid');

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <p>${product.title}</p>
                <p class="price">$${product.price}</p>
            `;
            
            productGrid.appendChild(productItem);
        });
    })
    .catch(error => console.log('Error fetching products:', error));