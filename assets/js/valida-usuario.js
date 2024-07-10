document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    let valid = true;

    // Limpa mensagens de erro anteriores
    document.getElementById('nomeError').textContent = '';
    document.getElementById('senhaError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('telefoneError').textContent = '';

    // Validação do campo Nome
    const nome = document.getElementById('nome');
    if (nome.value.trim() === '') {
        document.getElementById('nomeError').textContent = 'Por favor, preencha o campo Nome.';
        valid = false;
    }

    // Validação do campo Senha
    const senha = document.getElementById('senha');
    if (senha.value.length < 6) {
        document.getElementById('senhaError').textContent = 'A senha deve ter pelo menos 6 caracteres.';
        valid = false;
    }

    // Validação do campo Email
    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').textContent = 'Por favor, insira um endereço de email válido.';
        valid = false;
    }

    // Validação do campo Telefone
    const telefone = document.getElementById('telefone');
    const telefonePattern = /^\d{9,15}$/;
    if (!telefonePattern.test(telefone.value)) {
        document.getElementById('telefoneError').textContent = 'Por favor, insira um número de telefone válido.';
        valid = false;
    }

    if (valid) {
        $('#successModal').modal('show'); // Exibe o modal
    }
});

document.getElementById('modalOkButton').addEventListener('click', function () {
    $('#successModal').modal('hide'); // Oculta o modal
    document.getElementById('userForm').reset(); // Limpa os campos do formulário
    document.getElementById('nomeError').textContent = '';
    document.getElementById('senhaError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('telefoneError').textContent = '';
});

//Modal - button OK
document.getElementById('modalOkButton').addEventListener('click', function () {
    $('#successModal').modal('hide'); // Oculta o modal
    setTimeout(function () {
        window.location.href = 'index.html'; // Redireciona para index.html
    }, 500); // Espera 500ms antes de redirecionar
});