document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
   
    const data = {
    nome_usuario: formData.get('nome'),
    senha_usuario: formData.get('senha'),
    email_usuario: formData.get('email'),
    telefone: Number(formData.get('telefone')),
    nacionalidade: formData.get('nacionalidade'),
    tipo_usuarios: formData.get('tipo_usuario'),      
}


console.log(data)

    fetch('http://localhost:8081/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      /* alert('Usuário cadastrado com sucesso:', data); */
      console.log('Successo:', data);

    })
    .catch((error) => {
      console.error('Error:', error);
    });

  });

/* Acomodação */
