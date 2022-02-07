import { Container } from '../../components/Container'
import { Text } from "../../components/Text";
import { useEffect, useState } from 'react';
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { Header } from '../../components/Header';
import { ButtonsContainer } from './styles';
import { PokeId } from '../../components/PokeId';
import { Flag } from '../../components/Flag';
import { PokemonType } from '../../components/PokeTypes';
import AppPagination from '../../components/AppPagination';

const LIMIT = 20;

export const Dashboard = () => {
  const [pokemon, setPokemon] = useState([])
  const [totalPoke, setTotalPoke] = useState(0)
  const [offset, setOffset] = useState(0)

  useEffect(()=>{
    async function getItems() {
      const {data} = await api.get(`/pokemon/?offset=${offset}&${LIMIT}`)

      const res = await Promise.all(data.results.map((item )=> 
        api.get(item.url)
      ))

      setTotalPoke(data.count)

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
            <Card key={item.id} props={item.types[0].type.name}>
              <div>
                <PokeId># {item.id}</PokeId>
                <Text>{item.name}</Text>
                <div className='flag-container'>
                  <Flag props={item.types[0].type.name}>
                    <PokemonType type={item.types[0].type.name}/>
                    {item.types[0].type.name}
                  </Flag>
                  {
                    item.types[1]?.type && 
                      <Flag props={item.types[1].type.name}>
                        <PokemonType type={item.types[1].type.name}/>
                        {item.types[1].type.name}
                      </Flag>
                  }
                </div>
              </div>
              <img src={item.sprites.front_default} alt={item.name} />
            </Card>
          ))
        }
      </Container>   

      <ButtonsContainer>
        <AppPagination limit={LIMIT} offset={offset} setOffset={setOffset} total={totalPoke}/> 
      </ButtonsContainer>
    </>
  )
}