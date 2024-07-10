
/* VALIDAÇÃO DE DADOS */
/* document.getElementById('togglePassword').addEventListener('click', function (e) {
    const passwordInput = document.getElementById('psw-input');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
}); */
/* 
function validateForm() {
    const email = document.getElementById('email');
    const password = document.getElementById('psw-input');
    let isValid = true;

    if (!email.validity.valid) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (!password.validity.valid) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    return isValid;
} */

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('userLogin').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        // Obtém os valores dos campos de email e senha
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        // Verifica se o email e a senha são válidos
        if(email === 'eduardovianga@gmail.com' && password === '101010') {
            window.location.href = 'agent-dashboard.html';
           
        } else{
            alert('Email ou senha incorretos.'); // Mostra uma mensagem de erro
        }
    });
});

/* VIDEO YOUTUBE */

    // Inicializando o GLightbox quando o DOM estiver pronto
    document.addEventListener('DOMContentLoaded', function() {
        // Selecionando todos os elementos com a classe 'glightbox' e atribuindo-os ao lightbox
        const lightbox = GLightbox({
            selector: 'glightbox'
        });
    });

