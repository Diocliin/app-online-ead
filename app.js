function calcularTotal (itens){
    let total = 0

    for (let i = 0; 1 < itens.length; i++){
        total += itens[i].preco
    }
        
    return total    
}