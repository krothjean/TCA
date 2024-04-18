// Função para adicionar um produto ao carrinho de compras

//function Adicionar(nome, preco){
function Adicionar(nome, preco, novoItem){

  
  // Cria um novo elemento de item de carrinho
  //var novoItem = document.createElement('div');
  //novoItem.textContent = nome + ' - R$ ' + preco;
 
  // Adiciona o novo item ao carrinho
  //document.getElementById('carrinho').appendChild(novoItem);
//}


  document.getElementById('carrinho_de_compras').appendChild(novoItem);
}
/*function Adicionar_ao_Carrinho(){

}*/
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
                                            
        

  /*let Adicionar = document.getElementsByClassName("button_banana")
  for(var i= 0; Adicionar.length; i++) {
    Adicionar[i].addEventListener("click", Adicionar)
  }

  function Adicionar(event){
   let button = event.target
   console.log(button)
  }*/
  document.addEventListener('DOMContentLoaded', function() {
    // Estrutura de dados para representar o carrinho
    let carrinho_de_compras = [];
 
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.procura_padaria')) {
            document.querySelector('.produtos_padaria').style.display = 'none';
        } else {
            document.querySelector('.produtos_padaria').style.display = 'block';
        }
      });
  
    let botoesAdicionar = document.querySelectorAll('.button_banana');
    botoesAdicionar.forEach(function(botao) {
        botao.addEventListener('click', function(event) {
            // Extrair informações do produto da div pai do botão clicado
            let caixaTexto = event.target.closest('.caixa_texto');
            let nomeProduto = caixaTexto.querySelector('p').textContent;
            let precoProduto = caixaTexto.querySelector('.preco').textContent;

            // Adicionar o item ao carrinho
            carrinho_de_compras.push({ nome: nomeProduto, preco: precoProduto });

            // Atualizar a interface do usuário para refletir as mudanças no carrinho
            atualizarcarrinho_de_compras();
        });
    });

     // Função para atualizar a interface do carrinho
     function atualizarcarrinho_de_compras() {
      // Limpar a seção do carrinho
      const carrinhoSection = document.querySelector('.container.normal-section');
      carrinhoSection.innerHTML = ''; // Limpar a seção do carrinho antes de atualizar
      carrinho_de_compras.forEach(function(item) {
        const carrinhoItemHTML = `
            <tr class="carrinho-produto">
                <td class="produto_indentificacao">
                    <img src="fotos/" alt="">
                    <strong class="titulo-carrinho">${item.nome}</strong>
                </td>   
                <td>
                    <span class="preco">${item.preco}</span>   
                </td> 
                <td>
                    <input class="produto-quantidade"type="numero" value="1" min="0">
                    <button class="produto-remove-button" type="button">Remover</button>
                </td>
            </tr>
        `;
        carrinhoSection.insertAdjacentHTML('beforeend', carrinhoItemHTML);
    });

     }
   // Função para adicionar ao carrinho
   function Adicionar() {
    // Aqui você pode adicionar lógica adicional, se necessário
    console.log("Botão Adicionar clicado.");

    // Atualizar a interface do usuário para refletir as mudanças no carrinho
    atualizarcarrinho_de_compras();
}
});
  const removeProdutoButton = document.getElementsByClassName("produto-remove-button")
  for(var i = 0; i < removeProdutoButton.length; i++) {
    removeProdutoButton[i].addEventListener("click", function(event) {
        event.target.parentElement.parentElement.remove()
    })
  }               

  /*const createCartItemElement = ({titulo, preco, Image}) => {
    const section = document.createElement(section);
    section.className = 'items';
    
    section.appendChild(creactCustomElement('span', 'items_sku', sku));
    section.appendChild(createProductImageElement(Image));
    section.appendChild(createCustonElement('span', 'items_titulo',nome));
    section.appendChild(createCustonElement('span', 'items_preco', preco));
     return section;
  }
  
  const Adicionar = () => {
    const sectionButton = document.querySelectorAll('.items__add');
    sectionButton.forEach((element) => {
      element.addEventListener('click', async (event) => {
        const span = getSkuFromProductItem(event.target.parentNode);
        const requisition = await fetchItem(span);
        const { title, price, thumbnail } = requisition;
        const li = createCartItemElement(titulo, preco);
        li.appendChild(createProductImageElement(thumbnail));
        addLi(li);
        saveCartItems(olElement.innerHTML);
        totalPriceToCart();
        quantityOfProductsInCart();
      });
    });
  };
  */     

