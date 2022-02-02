import { Container } from '../../components/Container'
import { Text } from "../../components/Text";
import { useEffect, useState } from 'react';
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { Header } from '../../components/Header';

export const Dashboard = () => {
  const [pokemon, setPokemon] = useState([])
  const [offset, setOffset] = useState(0)

  function page () {
    setOffset(offset+20)
  }

  useEffect(()=>{
    async function getItems() {
      const {data} = await api.get(`/pokemon/?offset=${offset}&limit=20`)

      const res = await Promise.all(data.results.map((item )=> 
        api.get(item.url)
      ))

      const format = res.map((req) => req.data)

      setPokemon(format)
    }


    getItems()
  },[offset])
  
  return (
    <>
      <Header>
          <Text as="h1">Pokédex</Text>
          <Text>Search for Pokémon by name or using the National Pokédex number</Text>
      </Header>
      
      <Container>
        {
          pokemon?.map((item) => (
            <Card key={item.id}>
              <Text>{item.name}</Text>
              <img src={item.sprites.front_default} alt={item.name} />
            </Card>
          ))
        }
      </Container>   

      <button onClick={page}>clique aqui</button>    
    </>
  )
}