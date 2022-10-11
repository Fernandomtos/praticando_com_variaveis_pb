// Todos os exercícios estão comentados para que um algoritmo não atrapalhe o outro.

// Exercício 1

// let litroGasolina = 6.80; // R$ 6,80 o litro da gasolina;
// let entradaDinheiro = parseFloat(prompt("Quanto em dinheiro deseja abastecer?"));
// let valorCompra = parseFloat(entradaDinheiro / litroGasolina);

// alert(`O cliente abasteceu ${valorCompra}l.`);

// ####################################

// Exercício 2

// let temperaturaCelsius = parseInt(prompt("Qual a temperatura em graus Celsius para conversão?"));
// let temperaturaFahrenheit = ((9*temperaturaCelsius)+160)/5;

// alert(`O valor ${temperaturaCelsius}°c em Fahrenheit é ${temperaturaFahrenheit}`);

// ####################################

// Exercício 3

// let temperaturaFahrenheit = parseFloat(prompt("Qual a temperatura em graus Fahrenheit para conversão?"));
// let temperaturaCelsius = ((temperaturaFahrenheit-32)*5)/9;

// alert(`O valor ${temperaturaFahrenheit}°c em Fahrenheit é ${temperaturaCelsius.toFixed()}.`);

// ####################################

// Exercício 4

// let comprimentoCaixa = parseInt(prompt("Qual o comprimento da Caixa?"));
// let larguraCaixa = parseInt(prompt("Qual a largura da Caixa?"));
// let alturaCaixa = parseInt(prompt("Qual a altura da Caixa?"));

// let volumeCaixa = comprimentoCaixa*larguraCaixa*alturaCaixa;

// alert(`O volume da caixa é de: ${volumeCaixa}m³.`);

// ####################################

// Exercício 5

// let valorInteiro = parseInt(prompt("Digite o valor que deseja elevar ao quadrado?"));
// let valorElevado = valorInteiro ** 2;

// alert (`O valor ${valorInteiro} ao quadrado é ${valorElevado}.`)

// ####################################

// Exercício 6

// let nota1 = parseFloat(prompt("Digite a 1º Nota:"));
// let nota2 = parseFloat(prompt("Digite a 2º Nota:"));
// let nota3 = parseFloat(prompt("Digite a 3º Nota:"));
// let nota4 = parseFloat(prompt("Digite a 4º Nota:"));
// let nota5 = parseFloat(prompt("Digite a 5º Nota:"));

// let soma = (nota1+nota2+nota3+nota4+nota5);
// let media = (soma/5);

// alert(`A soma dos valores informados é: ${soma} e a média das notas é: ${media}`);

// ####################################

// Exercício 7

// let valor1 = parseInt(prompt("Digite o primeiro valor para dividirmos pelo segundo valor:"));
// let valor2 = parseInt(prompt("Digite o segundo valor para divisão:"));

// let divisao = valor1%valor2;

// alert(`O resto da divisão de ${valor1} por ${valor2} é: ${divisao}`);

// ####################################

// Exercício 8

// let texto = prompt("Digite uma palavra ou frase:");
// alert(`Este texto tem ${texto.length} caracteres.`);

// ####################################

// Exercício 9

// let textoEntrada = prompt("Digite uma palavra ou frase:");
// alert(`A primeira letra deste texto é ${textoEntrada[0].toUpperCase()} e a última é ${textoEntrada[textoEntrada.length-1].toLowerCase()}`);

// ####################################

// Exercício 10

// let nome = prompt("Digite seu nome:");
// let sobrenome = prompt("Digite seu sobrenome:");
// let idade = parseInt(prompt("Digite sua idade:"));
// let setor = prompt("Informe seu setor na empresa:");

// nome = nome.toLowerCase();                   // aqui eu estou forçando que qualquer entrada fique minúsculo.
// sobrenome = sobrenome.toLowerCase();
// setor = setor.toLowerCase();

// nome = nome.replace(nome[0], nome[0].toUpperCase());
// sobrenome = sobrenome.replace(sobrenome[0], sobrenome[0].toUpperCase());
// setor = setor.replace(setor[0], setor[0].toUpperCase());

// alert(`nome: ${nome} ${sobrenome} - idade: ${idade} - Setor: ${setor}`);



