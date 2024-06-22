const table = document.getElementById('sales-table');
const template = document.getElementById('sales');

function formatDate(iso) {
    if (iso == null) return 'N/A'
    return new Date(iso).toLocaleString('sr-RS')
}

function fetchProducts(url = '') {
    fetch(`http://localhost:8080/api/sale${url}`)
        .then(rsp => rsp.json())
        .then(data => {
            if (data.length === 0) {
                alert('Sales not found');
                fetchProducts();
                return;
            }
            data.forEach(sale => {
                const copy = template.content.cloneNode(true);
                copy.querySelector('.id').innerText = sale.id;
                copy.querySelector('.customer-name').innerText = sale.customer.name;
                copy.querySelector('.product-name').innerText = sale.product.description;
                copy.querySelector('.product-price').innerText = `${sale.product.price} $`;
                copy.querySelector('.quantity').innerText = sale.quantity;
                const total = sale.quantity * sale.product.price;
                copy.querySelector('.total-price').innerText = `${total} $`;

                table.appendChild(copy);
            });
        });
}

fetchProducts();
