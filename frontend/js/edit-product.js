// Define URLSearchParams object to retrieve the 'id' parameter from the URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id == null || id === '') {
    window.location.href = './index.html';
}

const breadcrumb = document.getElementById('breadcrumb');
const pid = document.getElementById('id');
const name = document.getElementById('name');
const description = document.getElementById('description');
const price = document.getElementById('price');
const updated = document.getElementById('updated');

function formatDate(iso) {
    if (iso == null) return 'N/A'
    return new Date(iso).toLocaleString('sr-RS')
}

fetch('http://localhost:8080/api/product/' + id)
    .then(rsp => {
        if (rsp.status === 200)
            return rsp.json();

        alert('Product not found');
        window.location.href = './index.html';
    })
    .then(data => {
        breadcrumb.innerText = `${data.description}`;
        pid.value = data.id;
        name.value = data.name;
        description.value = data.description;
        price.value = data.price;

        updated.value = formatDate(data.updatedAt);

        document.getElementById('save').addEventListener('click', () => {
            fetch(`http://localhost:8080/api/product/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    description: description.value,
                    price: price.value
                })
            })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './index.html';
                        return;
                    }
                    alert(`Changing product wasn't successful (HTTP ${rsp.status})`);
                });
        });
    });
