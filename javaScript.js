function Remover() {
  let quantidadeProduto = document.querySelector('.produto_quantidade').value;
  let subtração = quantidadeProduto - 1
  
}
var carrinho = []
function Adicionar(id){
let produto = document.getElementById('produto-' + id)
alert(produto.textContent)
let quantidade = document.getElementById('quantidade-produto-' + id).value
alert(quantidade)
let preco = documet.getElementById('preco')
}
  
function diminuirQuantidade(produtoId) {
  // Obter o elemento de quantidade específico para o produto
  let quantidadeInput = document.getElementById('quantidade-' + produtoId);
  // Obter o valor atual da quantidade
  let quantidade = parseInt(quantidadeInput.value);
  // Diminuir a quantidade em 1, garantindo que não seja menor que 1
  quantidade = Math.max(quantidade - 1, 0);
  // Atualizar o valor do campo de quantidade
  quantidadeInput.value = quantidade;
}
  function aumentarQuantidade(produtoId) {
      // Obter o elemento de quantidade específico para o produto
      let quantidadeInput = document.getElementById('quantidade-' + produtoId);
      // Obter o valor atual da quantidade
      let quantidade = parseInt(quantidadeInput.value);
      // Aumentar a quantidade em 1
      quantidade++;
      // Atualizar o valor do campo de quantidade
      quantidadeInput.value = quantidade;
  }


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
                  document.getElementById('produtos_padaria').style.display = 'none';
                  } else {
              // Se o clique for dentro do elemento de busca, exibe a lista
                  document.getElementById('produtos_padaria').style.display = 'block';
                  }
                  }
                 )
