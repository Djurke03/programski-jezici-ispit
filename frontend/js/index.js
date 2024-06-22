const table = document.getElementById('table');
const template = document.getElementById('products');

function formatDate(iso) {
    if (iso == null) return 'N/A'
    return new Date(iso).toLocaleString('sr-RS')
}

function fetchProducts(url = '') {
    fetch(`http://localhost:8080/api/product${url}`)
        .then(rsp => rsp.json())
        .then(data => {
            if (data.length === 0) {
                alert('Product not found');
                fetchProducts();
                return;
            }
            data.forEach(product => {
                const copy = template.content.cloneNode(true);
                copy.querySelector('.id').innerText = product.id;
                copy.querySelector('.name').innerText = product.name;
                copy.querySelector('.description').innerText = product.description;
                copy.querySelector('.price').innerText = `${product.price} $`;
                copy.querySelector('.updated').innerText = formatDate(product.updatedAt);
                copy.querySelector('.edit').href = `./edit-product.html?id=${product.id}`;
                copy.querySelector('.remove').addEventListener('click', () => {
                    if (confirm(`Do you want to delete product ${product.description} `)) {
                        fetch(`http://localhost:8080/api/product/${product.id}`, {
                            method: 'DELETE',
                        })
                            .then(rsp => {
                                if (rsp.status === 204) {
                                    window.location.href = './index.html';
                                    return;
                                }
                                alert(`Deleting product wasn't successful (HTTP ${rsp.status})`);
                            });
                    }
                });
                copy.querySelector('.buy').addEventListener('click', () => {
                    const quantity = 1; // Hardcoded quantity
                    const customerID = 1; // Hardcoded customer ID

                    const purchaseData = {
                        product: { id: product.id },
                        customer: { id: customerID },
                        quantity: quantity
                    };

                    fetch('http://localhost:8080/api/sale', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(purchaseData)
                    })
                        .then(rsp => {
                            if (rsp.ok) {
                                alert(`Product ${product.name} purchased successfully!`);
                                window.location.href = './sales.html';
                                return;
                            }
                            alert(`Purchasing product wasn't successful (HTTP ${rsp.status})`);
                        });
                });

                table.appendChild(copy);
            });
        });
}

fetchProducts();
