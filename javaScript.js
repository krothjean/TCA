
    
function diminuirQuantidade(id) {
  let quantidadeInput = document.getElementById('quantidade-' + id);

  let quantidade = parseInt(quantidadeInput.value);

  quantidade = Math.max(quantidade - 1, 0);

  quantidadeInput.value = quantidade;
  
}
function aumentarQuantidade(produtoId) {
  let quantidadeDigitada = document.getElementById('quantidade-' + produtoId)
  let quantidade = parseInt(quantidadeDigitada.value)
  quantidade++
  quantidadeDigitada.value = quantidade
  
}

let totalGeral = 0;
  
function Adicionar(id){
 
  let produto = document.getElementById('produto-' + id).textContent
  
  let quantidade = parseInt(document.getElementById('quantidade-produto-' + id).value)
  
  let preco = parseFloat(document.getElementById('preco-produto-' + id).textContent.replace('R$ ', '').replace(',', '.'))
  
  precoTotal = quantidade * preco
 
  let carrinho = document.getElementById('lista-de-produtos')
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produto__produtos">
   <span class="texto">${quantidade}x </span> ${produto} <span class= R$ ${precoTotal}</span>
   </section>`
   quantidade = parseInt(document.getElementById('quantidade-produto-' + id).value = 0)
   totalGeral = totalGeral + precoTotal
   let totalCompra = document.getElementById('PrecoTotal')
   totalCompra.textContent = totalGeral.toFixed(2);
   
   totalGeral = totalGeral + preco
}
function Adicionar2(id){
  let produtoHortifruti = document.getElementById('produto-balanca-' + id).textContent;
  let quantidadeAdicionada = parseInt(document.getElementById('quantidade-produto-' + id).value);
  let peso = parseFloat(document.getElementById('peso-produto-' + id).textContent)
  peso = quantidadeAdicionada * peso
  let precoProduto = parseFloat(document.getElementById('preco-produto-balanca-' + id).textContent.replace('R$', ''));
  
  
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
   
 
let lista_produtos = document.getElementById('lista-de-produtos');
lista_produtos.innerHTML= "";

let totalCompra = document.getElementById('PrecoTotal');
totalCompra.innerHTML = "";

} 


function expandirCarrinho(){
 
 let menuLateral = document.getElementById('sideMenu')

 if(menuLateral === '350px') {
   menuLateral.style.width = '0'
 } else {
   menuLateral.style.width = '350px'
 }
  

     } 
                  
function fecharMenu(){
let menuLateral = document.getElementById('sideMenu')
menuLateral.style.width = '0'   
} let
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


  const barraDePesquisa = document.querySelector("#procura")
  const lista = document.querySelector("lista_produtos");
  const itens = document.querySelectorAll("item_lista");


function searchItems() {

let input = document.getElementById('procura');
let filter = input.value.toUpperCase();


let items = document.querySelectorAll('.item_lista');


items.forEach(function(item) {
    
    if (item.innerHTML.toUpperCase().indexOf(filter) > -1) {
        
        item.style.display = 'block';
        document.querySelector('ul').style.display = 'block'
       
 
    } else {
        
        item.style.display = 'none';
        
    }
  
});
}

document.addEventListener('click', function(event) {
 
     if (!event.target.closest('#procura')) {
 
     document.getElementById('lista_produtos').style.display = 'none';
     } else {

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