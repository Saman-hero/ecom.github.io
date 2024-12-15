let currentProductCount = 4;

const products = [
    { name: "Raspberry Pi 4", price: 1190, category: "Raspberry Pi", img: "https://placehold.co/200x300" },
    { name: "Arduino Uno", price: 200, category: "Arduino", img: "https://placehold.co/200x300" },
    { name: "Câble USB", price: 50, category: "cables", img: "https://placehold.co/200x300" },
    { name: "Moteur DC", price: 300, category: "moteurs", img: "https://placehold.co/200x300" },
    { name: "Résistances", price: 20, category: "composant electronique", img: "https://placehold.co/200x300" },
    { name: "Fer à souder", price: 500, category: "matériel de travail", img: "https://placehold.co/200x300" },
    { name: "Raspberry Pi Zero", price: 800, category: "Raspberry Pi", img: "https://placehold.co/200x300" },
    { name: "Capteur de température", price: 150, category: "Arduino", img: "https://placehold.co/200x300" }
];

function toggleCategoryMenu() {
    document.getElementById('categoryMenu').classList.toggle('show');
}

function filterProducts(query) {
    const filter = query.toLowerCase();
    const productElements = document.querySelectorAll('.product');
    let hasResults = false;

    productElements.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(filter)) {
            product.style.display = '';
            hasResults = true;
        } else {
            product.style.display = 'none';
        }
    });

    if (!hasResults) {
        document.getElementById('productGrid').innerHTML = '<p class="text-center text-gray-500">Aucun produit trouvé.</p>';
    }
}

function filterProductsByCategory(category) {
    const productGrid = document.getElementById('productGrid');
    const filteredProducts = products.filter(p => p.category === category);
    displayProducts(filteredProducts);
}

function loadMoreProducts() {
    const productGrid = document.getElementById('productGrid');
    const nextProducts = products.slice(currentProductCount, currentProductCount + 4);
    displayProducts(nextProducts);
    currentProductCount += 4;
}

function displayProducts(productsToShow) {
    const productGrid = document.getElementById('productGrid');
    productsToShow.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product', 'bg-white', 'rounded-lg', 'p-4', 'shadow-lg');
        productDiv.setAttribute('data-name', product.name);

        const productHTML = `
            <img src="${product.img}" alt="${product.name}" class="w-full h-48 object-cover mb-4 rounded-t-lg">
            <h2 class="text-xl font-bold mb-2">${product.name}</h2>
            <p class="text-lg text-yellow-500">${product.price} DH</p>
            <button class="bg-yellow-500 text-white py-2 px-4 mt-4">Ajouter au panier</button>
        `;
        productDiv.innerHTML = productHTML;
        productGrid.appendChild(productDiv);
    });
}

displayProducts(products.slice(0, 4));

