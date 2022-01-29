import { Container } from '../../components/Container'
import { Text } from "../../components/Text";
import { useEffect, useState } from 'react';
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { Header } from '../../components/Header';
import { Pagination } from '@mui/material';

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
      <Header>
          <Text as="h1">Pokédex</Text>
          <Text>Search for Pokémon by name or using the National Pokédex number</Text>
      </Header>
      
      <Container>
        {
          pokemon.length > 0 && pokemon.map((item) => (
            <Card key={item.id}>
              <Text>{item.name}</Text>
              <img src={item.sprites.front_default} alt={item.name} />
            </Card>
          ))
        }
      </Container>

      <Pagination count={56} variant="outlined" color="primary" />   
    </>
  )
}