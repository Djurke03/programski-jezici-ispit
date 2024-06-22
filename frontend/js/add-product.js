const name = document.getElementById('name');
const description = document.getElementById('description');
const price = document.getElementById('price');

document.getElementById('save').addEventListener('click', () => {
    if (name.value == null || name.value === '') {
        alert('The product name cannot be empty.');
        return;
    }

    if (description.value === null || description.value === '') {
        alert('The product description cannot be empty.');
        return;
    }

    if (price.value === null || price.value === '') {
        alert('The product price cannot be empty.');
        return;
    }

    fetch('http://localhost:8080/api/product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            description: description.value,
            price: price.value
        })
    }).then(rsp => {
        if (rsp.ok) {
            window.location.href = './index.html';
            return;
        }
        alert(`Failed to add product. Please try again. (HTTP ${rsp.status})`);
    });
});
