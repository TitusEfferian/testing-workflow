fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(x=>x.json())
.then(x=>{
  console.log(x)
})
