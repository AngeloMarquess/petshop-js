const nomePetshop = "*** PETSHOP REC ***";


// arrays são conjuntos de dados ordenardos por posição
// let arrays =['oi',5,true, petshop];
// ---------[-0---1---2---3---]
// console.log(array[0])

// declarar objeto com {}
//  Atributo: valor 

// let batman =
// {
    // nome: "Batman",
    // tipo: "cão",
    // raca: "labrador",
    // idade: 5,
    // genero: "M",
    // vacinado: false,
    // servicos: ["banho", "tosa"]
//   },

// 


let pets = [{
nome: 'Bob',
idade: 2,
raca: 'pug',
tipo: 'cachorro',
vacinado: true,
genero: 'M',
servicos:['banho','tosa']
},
{
    nome: 'kleyton',
    idade: 2,
    raca: 'Vira lata',
    tipo: 'cachorro',
    vacinado: true,
    genero: 'M',
    servicos:['banho','tosa']

},

{
    nome: 'Gildo',
    idade: 5,
    raca: 'Vira lata',
    tipo: 'cachorro',
    vacinado: true,
    genero: 'M',
    servicos:['banho','tosa']

},

{
    nome: "Batman",
    tipo: "cão",
    raca: "labrador",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Costelinha",
    tipo: "cão",
    raca: "vira-lata",
    idade: 10,
    genero: "M",
    vacinado: true,
    servicos: ["banho"]
  },
  {
    nome: "Scooby Doo",
    tipo: "cão",
    raca: "Dogue Alemão",
    idade: 51,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "poodle",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["corte de unha"]
  },
  {
    nome: "Ada",
    tipo: "iguana",
    raca: "albina",
    idade: 5,
    genero: "F",
    vacinado: true,
    servicos: ["banho"]
  }

];


// arrow function 

const adicionarPet = (infoPet)=> {
pets.push(infoPet);

}

adicionarPet({
    nome: 'Rex',
    idade: 4,
    raca: 'caramelo',
    tipo: 'cachorro',
    vacinado: false,
    genero: 'M',
    servicos: ['banho']

});

console.log(pets);


function listarPets(listaDePets) {
return listDePets[0].nome + ',' + listaDePets[0].idade + listaDepets[0].tipo

}

console.log(listarPets(pets))
 listarPets(pets)




