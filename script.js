//criar variavel objeto

let pessoa = {
    nome: 'Maria',
    sobrenome: 'Lauxen',
    idade: 17,
    altura: 1.65,
    cargo: 'estudante'
};


//consumindo o objt todo
console.log(pessoa);

//consumindo uma das caracteristicas do objeto
console.log(pessoa.nome);
console.log(pessoa.altura);

let carro = {
    nome: 'Brasília',
    cor: 'amarela',
    potencia:'80cv'
}

//acessar 2 propriedades ao mesmo tempo 
console.log(carro.nome+""+carro.cor);

let usuarios = [
    {nome: 'Albertina', cargo:'Programador', status:'ativo'},
    {nome: 'Bilbonei', cargo:'Engenheiro de software', status:'ativo'},
    {nome: 'Conegundes', cargo:'Estágiario', status:'inativo'},
]

//consumindo o array

console.log(usuarios);

//acessando um obj específico 
console.log(usuarios[2]);

//acessando uma característica expecífica dentro do objeto
console.log(usuarios[2].nome);
