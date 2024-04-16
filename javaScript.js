function Comprar(){
 var quantidade = "-"
 var quantidade = "+"
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