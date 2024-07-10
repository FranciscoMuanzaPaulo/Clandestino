document.getElementById('acomodacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(this);
   
    const data = {
        nome_acomodacao: formData.get('nome'),
        latitude: formData.get('latitude'),
        longitude: formData.get('longitude'),
        tipo_acomodacao: formData.get('tipo_acomodacao'),
        email: formData.get('email'),
        descricao: formData.get('descricao'),
        municipio: formData.get('municipio'),
        foto: formData.get('foto') // Para enviar a foto como URL, precisará de um serviço para armazenar a imagem e obter a URL.
    }
  
    fetch('http://localhost:8081/acomodacao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      alert('Sucesso', data);
      console.log('Sucesso:', data);
      // Mostre uma mensagem de sucesso ao usuário ou redirecione para outra página
    })
    .catch((error) => {
      alert('erro', data);
      console.error('Erro:', error);
    });
  });
   
  document.getElementById('acomodacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(this);
  
    fetch('http://localhost:8081/acomodacao', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
  });
   
/* LISTAGEM DE DADOS */

document.addEventListener('DOMContentLoaded', async () => {
    const acomodacoes = await fetchAcomodacoes();
    const tableBody = document.getElementById('tableBody');
    const totalAcomodacoes = acomodacoes.length;
    
    // Atualizar a contagem de acomodações
    document.getElementById('totalAcomodacoes').textContent = totalAcomodacoes;

    acomodacoes.forEach(acomodacao => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${acomodacao.nome_acomodacao}</td>
            <td>${acomodacao.latitude}</td>
            <td>${acomodacao.longitude}</td>
            <td>${acomodacao.tipo_acomodacao}</td>
            <td>${acomodacao.email}</td>
            <td>${acomodacao.descricao}</td>
            <td>${acomodacao.municipio}</td>
            <td><img src="${acomodacao.foto}" alt="Foto da Acomodação" style="width: 100px;"></td>
            <td>
                <a href="#" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></a>
                <a href="#" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></a>
            </td>
        `;

        tableBody.appendChild(row);
    });
});

async function fetchAcomodacoes() {
    const response = await fetch('http://localhost:8081/acomodacao');
    const acomodacoes = await response.json();
    return acomodacoes;
}