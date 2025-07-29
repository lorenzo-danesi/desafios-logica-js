
> **Explorando Lógica de Programação com JS** <br>
> 2 / 2 - Gerenciamento de Equipes de Heróis e Vilões

## Descrição

O reino de Eldoria está recrutando heróis e vilões para missões épicas. Seu objetivo é criar um programa que gerencie um cadastro de personagens e os organize em duas listas separadas: uma para **heróis** e outra para **vilões**.

O programa receberá **vários cadastros de personagens** e, ao final, deverá exibir **quantos heróis e quantos vilões foram cadastrados**, além dos nomes de cada grupo.

## Entrada

O programa receberá múltiplas entradas, onde cada personagem será cadastrado com **nome** e **tipo**.

- O **tipo** deve ser `"Heroi"` ou `"Vilao"`. Caso seja inválido, exibir `"Tipo invalido"` e não adicionar à lista.
- O cadastro deve continuar até que o usuário digite `"FIM"` como nome do personagem.

## Saída

Após o cadastro, exibir:

1. **Quantidade de heróis e seus nomes**
2. **Quantidade de vilões e seus nomes**

Se nenhum personagem foi cadastrado, exibir `"Nenhum personagem registrado"`.

## Exemplos

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

| **Entrada**                                                                 | **Saída**                                          |
|-------------------------------------------------------------------------|------------------------------------------------|
| Merlin<br>Heroi<br>Lorde Sombrio<br>Vilao<br>Atena<br>Heroi<br>FIM     | Herois: 2 - Merlin, Atena<br>Viloes: 1 - Lorde Sombrio |
| Batman<br>Heroi<br>Coringa<br>Vilao<br>Thanos<br>Vilao<br>Superman<br>Heroi<br>FIM | Herois: 2 - Batman, Superman<br>Viloes: 2 - Coringa, Thanos |
| Zelda<br>Guerreiro<br>Ganondorf<br>Vilao<br>FIM                        | Tipo invalido<br>Herois: 0 -<br>Viloes: 1 - Ganondorf |

> **Atenção:** É extremamente importante que as entradas e saídas sejam exatamente iguais às descritas na descrição do desafio de código.