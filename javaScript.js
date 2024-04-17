// Função para adicionar um produto ao carrinho de compras
function Adicionar(nome, preco){
  
  // Cria um novo elemento de item de carrinho
  var novoItem = document.createElement('div');
  novoItem.textContent = nome + ' - R$ ' + preco;
 
  // Adiciona o novo item ao carrinho
  document.getElementById('carrinho').appendChild(novoItem);
}
function Adicionar_ao_Carrinho(){

}
function pesquisar(){

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
                  document.querySelector('.produtos_padaria').style.display = 'none';
                  } else {
              // Se o clique for dentro do elemento de busca, exibe a lista
                  document.querySelector('.produtos_padaria').style.display = 'block';
                  }
                  }
                 )

  let adicionarAoCarrinho = document.getElementsByClassName("button_banana")
  for(var i= 0; adicionarAoCarrinho.length; i++) {
    adicionarAoCarrinho[i].addEventListener("click", adicionarAoCarrinho)
  }

  function adicionarAoCarrinho(event){
   let button = event.target
   console.log(button)
  }

  const removeProdutoButton = document.getElementsByClassName("produto-remove-button")
  for(var i = 0; i < removeProdutoButton.length; i++) {
    removeProdutoButton[i].addEventListener("click", function(event) {
        event.target.parentElement.parentElement.remove()
    })
  }               
  
  function addProdutosParaCarrinho(event) {
    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImage = productInfos.getElementsByClassName("product-image")
    const producttitulo = productInfos.getElementsByClassName("product-titulos")
    const productpreco = productInfos.getElementsByClassName("product-price")

  }
       