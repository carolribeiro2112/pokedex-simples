import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { ButtonsContainer } from "./styles";
import { PokeId } from "../../components/PokeId";
import { Flag } from "../../components/Flag";
import { PokemonType } from "../../components/PokeTypes";
import AppPagination from "../../components/AppPagination";
import { PokeModal } from "../../components/PokeModal";
import { getItems } from "../../services/getAllPokemons";
import { api } from "../../services/api";
import debounce from "lodash/debounce";
import toast, {Toaster} from 'react-hot-toast'

const LIMIT = 20;

export const Dashboard = () => {
  const [pokemons, setPokemons] = useState([]);
  const [totalPoke, setTotalPoke] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isPokeModalOpen, setIsPokeModalOpen] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState({});

  function handleClear() {
    getAllPokemons();
  }

  async function getAllPokemons() {
    const { count, format } = await getItems(offset);
    setPokemons(format);
    setTotalPoke(count);
  }

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  function handleOnClick(pokemon) {
    setIsPokeModalOpen(pokemon.id);
    setPokemonDetails(pokemon);
  }

  async function search(text = "") {
    try {
      const { data } = await api.get(`/pokemon/${text.trim()}/`);

      return [data];
    } catch (err) {
      if (err.response.status === 404) {
        setTimeout(() => {
          toast.error("pokemon not found");
        }, 1000);

        return pokemons
      }
    }
  }

  const debouncedSearch = debounce(async (text = "") => {
    setPokemons(await search(text));
  }, 300);

  const handleOnChange = (text) => {
    debouncedSearch(text);
  };

  return (
    <>
      <Header>
        <div className="text">
          <Text as="h1">Pok??dex</Text>
          <Text>
            Search for Pok??mon by name or using the National Pok??dex number
          </Text>
        </div>
        <div className="input">
          <Input value={""} onChange={handleOnChange} onClear={handleClear} />
        </div>
      </Header>

      <Container>
        {pokemons?.map((pokemon) => (
          <Card
            id="#card"
            key={pokemon.id}
            props={pokemon.types[0].type.name}
            onClickModal={() => handleOnClick(pokemon)}
          >
            <div>
              <PokeId># {pokemon.id}</PokeId>
              <Text>{pokemon.name}</Text>
              <div className="flag-container">
                {pokemon.types?.map((item) => (
                  <Flag props={item.type.name} key={item.type.name}>
                    <PokemonType type={item.type.name} />
                    {item.type.name}
                  </Flag>
                ))}
              </div>
            </div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </Card>
        ))}
      </Container>
      
      <Toaster/>
      <PokeModal
        isOpen={Boolean(isPokeModalOpen)}
        onCloseModal={() => setIsPokeModalOpen(null)}
        pokemonDetails={pokemonDetails}
      />

      <ButtonsContainer>
        <AppPagination
          limit={LIMIT}
          offset={offset}
          setOffset={setOffset}
          total={totalPoke}
        />
      </ButtonsContainer>
    </>
  );
};
