
//let inputElement = document.querySelector(".procura_padaria")//input
//let listElement = document.querySelector(".produos+padaria")//ul)
//let itemElement = listElement.querySelectorAll("li")

//inputElement.addEventListener("input", (e) => {
  //let inputed = e.target.value.toLowerCase()
  //itemElement.forEach((li) => {
    //let text = li.textContent.toLowerCase()
    //if(text.includes(inputed)){
      //li.style.display = "block"
    //}else{
      //li.style.display = "none"
    //}
  //})
//})

  //function Adicionar(){
    
  //}
  //function CarrinhoCompras(){
    
  //}
  const barraDePesquisa = document.querySelector("#pesquisa")//<input/>
const lista = document.querySelector("#lista");//<ul></ul>
const itens = document.querySelectorAll("#lista__item");//<li><li/>

barraDePesquisa.addEventListener("input", ()=>{
    let valorDigitado = barraDePesquisa.value.toLowerCase();
    itens.forEach((item)=>{
         if(item.textContent.toLowerCase().includes(valorDigitado)){
            item.style.display = "block"
         } else {
             item.style.display = "none"
        }

         if(valorDigitado == ""){
            item.style.display = "block"
         }
    })
})