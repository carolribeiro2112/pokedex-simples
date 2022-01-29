import { Text } from "../../components/Text";
import { useEffect, useState } from 'react';
import { api } from "../../services/api";

export const Dashboard = () => {
  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    async function getItems() {
      const {data} = await api.get('/pokemon')

      const res = await Promise.all(data.results.map((item )=> 
        api.get(item.url)
      ))

      const format = res.map((req) => req.data)

      setPokemon(format)
    }


    getItems()
  },[])
  
  return (
    <>
      <Text as="h1">Pokédex</Text>
      <Text>Search for Pokémon by name or using the National Pokédex number</Text>
      {
          pokemon.length > 0 && pokemon.map((item) => (
            <div key={item.id}>
              {item.name}

              <img src={item.sprites.front_default} alt={item.name} />
            </div>
          ))
      }
    </>
  )
}