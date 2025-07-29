//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


// Lê os valores de entrada e separa corretamente
let valores = gets().split(" ");  
let forca = parseInt(valores[0]); 
let inteligencia = parseInt(valores[1]); 

let classificacao = "";

// TODO: Crie condições if/else para validação da classificação do personagem:
if(forca < 20 && inteligencia < 15) {
  print("Aprendiz")
} else if(forca >= 20 && inteligencia < 15) {
  print("Guerreiro")
} else if(inteligencia >= 15 && forca < 20) {
  print("Mago")
} else if(inteligencia >= 15 && forca >= 20) {
  print("Arquimago")
}

// Exibe o resultado
print(classificacao.trim());