// Função para carregar os personagens da API
async function loadCharacters() {
    try {
      // A URL da página 19 da API
      const url = 'https://rickandmortyapi.com/api/character?page=19';
      const response = await fetch(url);
      
      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error('Erro ao carregar os dados. Código de status: ' + response.status);
      }
  
      // Converte a resposta para JSON
      const data = await response.json();
  
      // Verifica se os dados da API foram recebidos
      console.log('Dados recebidos da API:', data);
  
      const container = document.getElementById('characters-container');
  
      // Verifica se a página contém personagens
      if (!data.results || data.results.length === 0) {
        container.innerHTML = '<p>Nenhum personagem encontrado.</p>';
        return;
      }
  
      // Para cada personagem, cria e exibe um cartão
      data.results.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');
  
        // Criando o conteúdo do cartão
        card.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <h3>${character.name}</h3>
          <p class="status-${getStatusClass(character.status)}">Status: ${character.status || 'Desconhecido'}</p>
          <p>Espécie: ${character.species || 'Não especificado'}</p>
          <p>Tipo: ${character.type || 'Não especificado'}</p>
          <p>Origem: ${character.origin?.name || 'Desconhecida'}</p>
          <p>Localização: ${character.location?.name || 'Desconhecida'}</p>
        `;
  
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Erro ao carregar personagens:', error);
      const container = document.getElementById('characters-container');
      container.innerHTML = '<p>Houve um erro ao carregar os personagens. Tente novamente mais tarde.</p>';
    }
  }
  
  // Função para retornar a classe de status (vivo, morto, desconhecido)
  function getStatusClass(status) {
    if (status === 'Alive') return 'alive';
    if (status === 'Dead') return 'dead';
    return 'unknown';
  }
  
  // Carregar os personagens ao iniciar a página
  loadCharacters();