function calcularTotal (itens){
    let total = 0

    for (let i = 0; 1 < itens.length; i++){
        total += itens[i].preco
    }
        
    // aplica desconto de fidelidade
    // antes de retornar o valor final

    return total    
}