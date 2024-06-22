// Define URLSearchParams object to retrieve the 'id' parameter from the URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id == null || id === '') {
    window.location.href = './customers.html';
}

const breadcrumb = document.getElementById('breadcrumb');
const cid = document.getElementById('id');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const updated = document.getElementById('updated');

function formatDate(iso) {
    if (iso == null) return 'N/A'
    return new Date(iso).toLocaleString('sr-RS')
}

fetch('http://localhost:8080/api/customer/' + id)
    .then(rsp => {
        if (rsp.status === 200)
            return rsp.json();

        alert('Customer not found');
        window.location.href = './customers.html';
    })
    .then(data => {
        breadcrumb.innerText = `${data.description}`;
        cid.value = data.id;
        name.value = data.name;
        email.value = data.email;
        phone.value = data.phone;
        address.value = data.address;

        updated.value = formatDate(data.updatedAt);

        document.getElementById('save').addEventListener('click', () => {
            fetch(`http://localhost:8080/api/customer/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    phone: phone.value,
                    address: address.value
                })
            })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './customers.html';
                        return;
                    }
                    alert(`Changing customer wasn't successful (HTTP ${rsp.status})`);
                });
        });
    });
