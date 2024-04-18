// Função para adicionar um produto ao carrinho de compras
//function Adicionar(nome, preco){
  
  // Cria um novo elemento de item de carrinho
  //var novoItem = document.createElement('div');
  //novoItem.textContent = nome + ' - R$ ' + preco;
 
  // Adiciona o novo item ao carrinho
  //document.getElementById('carrinho').appendChild(novoItem);
//}

function Search(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('alimentos')
    
    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display  = "none"
        }else{
            x[i].style.display = "list-item"
        }
    }
  }
  const barraDePesquisa = document.querySelector("#pesquisa")//<input/>
const lista = document.querySelector("#lista");//<ul></ul>
const itens = document.querySelectorAll("#lista__item");//<li><li/>


function searchItems() {
  // Obtém o valor digitado na barra de pesquisa
  var input = document.querySelector('.procura_padaria');
  var filter = input.value.toUpperCase();

  // Obtém a lista de itens
  var items = document.querySelectorAll('.item');
  // Itera sobre os itens e os mostra ou oculta conforme corresponda à pesquisa
  items.forEach(function(item) {
      // Verifica se o texto do item corresponde à pesquisa
      if (item.innerHTML.toUpperCase().indexOf(filter) > -1) {
          // Exibe o item se corresponder à pesquisa
          item.style.display = 'block';
          document.querySelector('ul').style.display = 'block'
   
      } else {
          // Oculta o item se não corresponder à pesquisa
          item.style.display = 'none';
     
      }
  });
}

// Ele roda o tempo inteiro

  document.addEventListener('click', function(event) {
              // Verifica se o elemento clicado não é o elemento de busca (.procura_padaria) nem um de seus descendentes
                  if (!event.target.closest('.procura_padaria')) {
              // Se o clique não for dentro do elemento de busca, oculta a lista
                  document.getElementById('#produtos_padaria').style.display = 'none';
                  } else {
              // Se o clique for dentro do elemento de busca, exibe a lista
                  document.getElementById('#produtos_padaria').style.display = 'block';
                  }
                  }
                 )
// Variável para armazenar os itens do carrinho
  let carrinho = []
// Função para adicionar um produto ao carrinho
function Adicionar(nome, preco) {
    // Adiciona o produto ao carrinho como um objeto com propriedades de nome e preço
    carrinho.push({ nome: nome, preco: preco });
    // Chama a função para atualizar o resumo do carrinho na página
    atualizarCarrinho();
}

// Função para atualizar o resumo do carrinho na página
function atualizarCarrinho() {
    // Obtém o elemento que contém a lista de itens do carrinho
    let carrinho = document.getElementById('carrinho');
    // Obtém a lista de itens do carrinho na página
    let listaCarrinho = document.getElementById('produtos_padaria');
    console.log(listaCarrinho)
    // Variável para armazenar o total do carrinho
    let totalCarrinho = 0;
    // Limpa a lista de itens do carrinho antes de atualizar
    listaCarrinho.innerHTML = '';

    // Itera sobre cada item no carrinho
    carrinho.forEach(item => {
        // Cria um novo elemento de lista para cada item no carrinho
        let listItem = document.createElement('li');
        // Define o texto do item da lista com o nome e o preço do produto
        listItem.textContent = item.nome + ' - R$' + item.preco.toFixed(2);
        // Adiciona uma classe ao elemento de lista
        listItem.classList.add('cart-item'); // Adiciona a classe 'cart-item'
        // Adiciona o item da lista à lista de carrinho na página
        listaCarrinho.appendChild(listItem);
        // Adiciona o preço do item ao total do carrinho
        totalCarrinho += item.preco;
    });

    // Atualiza o texto que exibe o total do carrinho na página
    let totalCarrinhoElement = document.getElementById('total-carrinho');
    if (totalCarrinhoElement) {
        totalCarrinhoElement.textContent = 'Total do Carrinho: R$' + totalCarrinho.toFixed(2);
    }

    
     
    
  }
                                            
        