const usuários = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];

function filtrarUsuarios(users){
    const maiores = users.filter(i => i.idade > 17);
    maiores.every(i => i.habilitado) ? console.log(`todos passaram no teste`) : console.log(`todos precisam estar habilitados`);
}
filtrarUsuarios(usuários);