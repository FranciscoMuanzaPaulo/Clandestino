
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('userLogin').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        // Obtém os valores dos campos de email e senha
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        // Verifica se o email e a senha são válidos
        if (email === 'eduardopaxe@gmail.com' && password === '000000') {
            window.location.href = 'admin-dashboard.html'; // Redireciona para a página agent-dashboard.html
        } else if (email === 'mateus@gmail.com' && password === '111111'){
            window.location.href = 'agent-dashboard.html'; // Mostra uma mensagem de erro
        } 
        else if  (email === 'franciscomuanza2@gmail.com' && password === '222222') {
            window.location.href = 'account-profile.html'; // Redireciona para a página agent-dashboard.html
        } else{
            alert('Email ou senha incorretos. '); // Mostra uma mensagem de erro
        } 
    });
});