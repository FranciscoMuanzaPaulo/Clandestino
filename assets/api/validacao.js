
    function validarFormulario() {
      let formValido = true;

      // Validação do nome
      const nome = document.getElementById('nome');
      if (!nome.value.trim()) {
        nome.classList.add('is-invalid');
        formValido = false;
      } else {
        nome.classList.remove('is-invalid');
      }

      // Validação da latitude
      const latitude = document.getElementById('latitude');
      if (!validarLatitude(latitude.value)) {
        latitude.classList.add('is-invalid');
        formValido = false;
      } else {
        latitude.classList.remove('is-invalid');
      }

      // Validação da longitude
      const longitude = document.getElementById('longitude');
      if (!validarLongitude(longitude.value)) {
        longitude.classList.add('is-invalid');
        formValido = false;
      } else {
        longitude.classList.remove('is-invalid');
      }

      // Validação do email
      const email = document.getElementById('email');
      if (!validarEmail(email.value)) {
        email.classList.add('is-invalid');
        formValido = false;
      } else {
        email.classList.remove('is-invalid');
      }

      // Validação do tipo de acomodação
      const tipoAcomodacao = document.getElementById('tipoAcomodacao');
      if (!tipoAcomodacao.value) {
        tipoAcomodacao.classList.add('is-invalid');
        formValido = false;
      } else {
        tipoAcomodacao.classList.remove('is-invalid');
      }

      // Validação da descrição
      const descricao = document.getElementById('descricao');
      if (!descricao.value.trim()) {
        descricao.classList.add('is-invalid');
        formValido = false;
      } else {
        descricao.classList.remove('is-invalid');
      }

      // Validação do município
      const municipio = document.getElementById('municipio');
      if (!municipio.value.trim()) {
        municipio.classList.add('is-invalid');
        formValido = false;
      } else {
        municipio.classList.remove('is-invalid');
      }

      // Validação da foto
      const foto = document.getElementById('foto');
      if (!foto.value) {
        foto.classList.add('is-invalid');
        formValido = false;
      } else {
        foto.classList.remove('is-invalid');
      }

      return formValido;
    }

    function validarLatitude(latitude) {
      const regex = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/;
      return regex.test(latitude);
    }

    function validarLongitude(longitude) {
      const regex = /^-?([1-9]?[1-9]|[1-9]0)\.{1}\d{1,6}$/;
      return regex.test(longitude);
    }

    function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    function mostrarModal(event) {
      event.preventDefault();
      if (validarFormulario()) {
        $('#successModal').modal('show');
      }
    }

    document.getElementById('redirectButton').addEventListener('click', function() {
      $('#successModal').modal('hide');
      setTimeout(function() {
        window.location.href = 'admin-dashboard.html';
      }, 300);
    });

    function validarFormulario() {
      let formValido = true;

      // Validação do nome
      const nome = document.getElementById('nome');
      if (!nome.value.trim()) {
        nome.classList.add('is-invalid');
        formValido = false;
      } else {
        nome.classList.remove('is-invalid');
      }

      // Validação da latitude
      const latitude = document.getElementById('latitude');
      if (!validarLatitude(latitude.value)) {
        latitude.classList.add('is-invalid');
        formValido = false;
      } else {
        latitude.classList.remove('is-invalid');
      }

      // Validação da longitude
      const longitude = document.getElementById('longitude');
      if (!validarLongitude(longitude.value)) {
        longitude.classList.add('is-invalid');
        formValido = false;
      } else {
        longitude.classList.remove('is-invalid');
      }

      // Validação do email
      const email = document.getElementById('email');
      if (!validarEmail(email.value)) {
        email.classList.add('is-invalid');
        formValido = false;
      } else {
        email.classList.remove('is-invalid');
      }

      // Validação do tipo de acomodação
      const tipoAcomodacao = document.getElementById('tipoAcomodacao');
      if (!tipoAcomodacao.value) {
        tipoAcomodacao.classList.add('is-invalid');
        formValido = false;
      } else {
        tipoAcomodacao.classList.remove('is-invalid');
      }

      // Validação da descrição
      const descricao = document.getElementById('descricao');
      if (!descricao.value.trim()) {
        descricao.classList.add('is-invalid');
        formValido = false;
      } else {
        descricao.classList.remove('is-invalid');
      }

      // Validação do município
      const municipio = document.getElementById('municipio');
      if (!municipio.value.trim()) {
        municipio.classList.add('is-invalid');
        formValido = false;
      } else {
        municipio.classList.remove('is-invalid');
      }

      // Validação da foto
      const foto = document.getElementById('foto');
      if (!foto.value) {
        foto.classList.add('is-invalid');
        formValido = false;
      } else {
        foto.classList.remove('is-invalid');
      }

      return formValido;
    }

    function validarLatitude(latitude) {
      const regex = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/;
      return regex.test(latitude);
    }

    function validarLongitude(longitude) {
      const regex = /^-?([1-9]?[1-9]|[1-9]0)\.{1}\d{1,6}$/;
      return regex.test(longitude);
    }

    function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    function validarFormulario() {
          var formulario = document.getElementById('acomodacaoForm');
          if (formulario.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            formulario.classList.add('was-validated');
            return false;
          }
          return true;
        }

        document.getElementById('acomodacaoForm').addEventListener('submit', async function(event) {
      event.preventDefault();

      const nome = document.getElementById('nome').value;
      const latitude = document.getElementById('latitude').value;
      const longitude = document.getElementById('longitude').value;
      const tipoAcomodacao = document.getElementById('tipoAcomodacao').value;
      const email = document.getElementById('email').value;
      const descricao = document.getElementById('descricao').value;
      const municipio = document.getElementById('municipio').value;
      /* const foto = document.getElementById('foto').files[0]; */

      // Aqui você pode enviar os dados para o backend usando fetch ou outra técnica
      // Exemplo de como enviar dados usando fetch:
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
      formData.append('tipoAcomodacao', tipoAcomodacao);
      formData.append('email', email);
      formData.append('descricao', descricao);
      formData.append('municipio', municipio);
      /* formData.append('foto', foto); */

      // Substitua 'http://localhost:8081/cadastrar' com a URL do seu backend
      const response = await fetch('http://localhost:8081/hoteis', {
        method: 'POST',
        body: formData
      });

      // Aqui você pode lidar com a resposta do servidor, por exemplo, exibir uma mensagem de sucesso ou erro
      if (response.ok) {
        alert('Acomodação cadastrada com sucesso!');
        document.getElementById('acomodacaoForm').reset();
      } else {
        alert('Ocorreu um erro ao cadastrar acomodação.');
      }
    });
