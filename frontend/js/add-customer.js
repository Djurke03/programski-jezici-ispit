const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');

document.getElementById('save').addEventListener('click', () => {
    if (name.value == null || name.value === '') {
        alert('The customer name cannot be empty.');
        return;
    }

    if (email.value === null || email.value === '') {
        alert('The customer email cannot be empty.');
        return;
    }

    if (phone.value === null || phone.value === '') {
        alert('The customer phone cannot be empty.');
        return;
    }

    if (address.value === null || address.value === '') {
        alert('The customer address cannot be empty.');
        return;
    }

    fetch('http://localhost:8080/api/customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            phone: phone.value,
            address: address.value
        })
    }).then(rsp => {
        if (rsp.ok) {
            window.location.href = './customers.html';
            return;
        }
        alert(`Failed to add customer. Please try again. (HTTP ${rsp.status})`);
    });
});
