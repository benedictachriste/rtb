document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil nilai input
    var name = document.getElementById('name').value.trim();
    var number = parseInt(document.getElementById('number').value.trim(), 10);
    var date = new Date(document.getElementById('date').value);
    var purpose = document.querySelector('#form textarea').value.trim();

    // Validasi nama tidak boleh kosong
    if (name === '') {
        showError('Person Responsible field cannot be empty.');
        return;
    }

    // Validasi number of attendees >= 15
    if (number < 15 || isNaN(number)) {
        showError('Number of attendees must be at least 15.');
        return;
    }

    // Validasi tanggal maksimal 7 hari kedepan
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 7);
    if (date > maxDate) {
        showError('Date must be within the next 7 days.');
        return;
    }

    // Validasi purpose tidak boleh kosong
    if (purpose === '') {
        showError('Purpose field cannot be empty.');
        return;
    }

    // Submit form jika lolos validasi
    this.submit();
});

function showError(message) {
    var errorElement = document.getElementById('error');
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}