function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const icon = document.getElementById('toggleIcon');
    icon.innerHTML = document.body.classList.contains('dark') ? '&#127774;' : '&#127771;';
}

const submitForm = document.querySelector('form')
submitForm.addEventListener('submit', () => (alert("El formulario fue enviado con exito!")))