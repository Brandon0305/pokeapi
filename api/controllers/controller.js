 export function saludar () {
    
   
   console.log("");
 }

  export async function buscarpokemon(){
  let data =  await fetch("https://pokeapi.co/api/v2/ability/")
  let dataparseada = await data.json ()
  console.log(dataparseada);

 }

 

