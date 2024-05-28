
    function apagarProduto() {
      let barra = document.getElementById('procura');
      let itemDigitado = barra.value.trim().toLowerCase();
    
      if (itemDigitado === '') {
        alert('Por favor, digite o nome do produto.');
        return;
      }
    
      let listaProdutos = document.querySelectorAll('li .item_lista');
    
      listaProdutos.forEach((item) => {
        let nomeProduto = item.querySelector('li').textContent.trim().toLowerCase();
        if (nomeProduto === itemDigitado) {
          item.remove();
          itemEncontrado = true;
        }
      });
    
      barra.value = '';
    }
function diminuirQuantidade(ProdutoId) {
  // Obter o elemento de quantidade específico para o produto
  let quantidadeInput = document.getElementById('quantidade-' +ProdutoId);
  // Obter o valor atual da quantidade
  let quantidade = parseInt(quantidadeInput.value);
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

let totalGeral = 0;
  
function Adicionar(id){
  // Recuperando os valores dos elementos que eu quero que sejam adicionados no carrinho
  let produto = document.getElementById('produto-' + id).textContent
  
  let quantidade = parseInt(document.getElementById('quantidade-produto-' + id).value)
  
  let preco = parseFloat(document.getElementById('preco-produto-' + id).textContent.replace('R$ ', '').replace(',', '.'))
  
  precoTotal = quantidade * preco
 
  let carrinho = document.getElementById('lista-de-produtos')
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produto__produtos">
   <span class="texto">${quantidade}x </span> ${produto} <span class="texto"> R$ ${precoTotal}</span>
   </section>`
   quantidade = parseInt(document.getElementById('quantidade-produto-' + id).value = 0)
   totalGeral = totalGeral + precoTotal
   let totalCompra = document.getElementById('PrecoTotal')
   totalCompra.textContent = totalGeral.toFixed(2);
   
}
function Adicionar2(id){
  let produtoHortifruti = document.getElementById('produto-balanca-' + id).textContent;
  let quantidadeAdicionada = parseInt(document.getElementById('quantidade-produto-' + id).value);
  let peso = parseFloat(document.getElementById('peso-produto-' + id).textContent)
  peso = quantidadeAdicionada * peso
  let precoProduto = parseFloat(document.getElementById('preco-produto-balanca-' + id).textContent.replace('R$', ''));
  
  // Cálculo do peso total
  let total = (peso * precoProduto) / 1000;
  let carrinho = document.getElementById('lista-de-produtos')
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produto__produtos">
   <span class="texto">${quantidadeAdicionada}x </span> ${produtoHortifruti} <span class="texto">${total}</span>
   </section>`
   quantidadeAdicionada = parseInt(document.getElementById('quantidade-produto-' + id).value = 0)
   totalGeral = totalGeral + total
   let totalCompra = document.getElementById('PrecoTotal')
   totalCompra.textContent = totalGeral.toFixed(2);
  
}
function remover(){
   
  // Obtém o texto da lista de produtos
let lista_produtos = document.getElementById('lista-de-produtos');
lista_produtos.innerHTML= "";

let totalCompra = document.getElementById('PrecoTotal');
totalCompra.innerHTML = "";

} 


function expandirCarrinho(){
   document.getElementById('cartButton')

 let sideMenu = document.getElementById('sideMenu');
 if (sideMenu.style.width === '350px') {
     sideMenu.style.width = '0';
  } else {
     sideMenu.style.width = '350px';
 }      
     }
                  
function fecharMenu(){
let fecharMenu = document.getElementById('sideMenu')
fecharMenu.style.width = '0'   
}   
function finalizarCompra(){
  window.location = 'nota_fiscal.html'
  let quantidade = document.getElementById('lista-de-produtos')
  quantidade.innerHTML = 
  console.log(quantidade)
  
}   
function Search(){
  let input = document.getElementById('procura').value
  input = input.toLowerCase()
  let x = document.getElementsByClassName('item_lista')
  
  for(i = 0; i < x.length; i++){
      if(!x[i].innerHTML.toLowerCase().includes(input)){
          x[i].style.display  = "none"
      }else{
          x[i].style.display = "block"
      }
  }

}


  const barraDePesquisa = document.querySelector("#procura")//<input/>
  const lista = document.querySelector("lista_produtos");//<ul></ul>
  const itens = document.querySelectorAll("item_lista");//<li><li/>


function searchItems() {
// Obtém o valor digitado na barra de pesquisa
var input = document.getElementById('procura');
var filter = input.value.toUpperCase();

// Obtém a lista de itens
var items = document.querySelectorAll('.item_lista');

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

document.addEventListener('click', function(event) {
 // Verifica se o elemento clicado não é o elemento de busca (#procura_padaria) nem um de seus descendentes
     if (!event.target.closest('#procura')) {
 // Se o clique não for dentro do elemento de busca, oculta a lista
     document.getElementById('lista_produtos').style.display = 'none';
     } else {
 // Se o clique for dentro do elemento de busca, exibe a lista
     document.getElementById('lista_produtos').style.display = 'block';
     }
     }
    )
  
  function apagarProduto() {
    let barra = document.getElementById('procura');
    let itemDigitado = barra.value.trim().toLowerCase();
  
    if (itemDigitado === '') {
      alert('Por favor, digite o nome do produto.');
      return;
    }
  
    let listaProdutos = document.querySelectorAll('li .item_lista');
  
    listaProdutos.forEach((item) => {
      let nomeProduto = item.querySelector('li').textContent.trim().toLowerCase();
      if (nomeProduto === itemDigitado) {
        item.remove();
        itemEncontrado = true;
      }
    });
  
    barra.value = '';
  }           