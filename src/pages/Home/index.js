import React, { useState, useEffect } from 'react';
import { useFetch } from '../../services/api';
import { Container, Pokedex, PokedexScreen, PokedexList, PokedexListItem, PokedexListLink, LoadMore } from './styles';

import ErrorBoundary from '../../components/ErrorBoundary';

function Home() {
    const [options, setOptions] = useState(null);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [pokemonsList, setPokemonsList] = useState([]);

    const fetchPokemons = useFetch(url, {
        isLoading: true,
        data: null
    });

    useEffect(() => {
        if (fetchPokemons.data !== null) {
            setOptions(fetchPokemons.data);
            setPokemonsList(pokemons => [...pokemons, ...fetchPokemons.data.results]);
        }
    }, [fetchPokemons]);

    const loadMore = async url => {
        setUrl(url);
    };

    if (!pokemonsList || pokemonsList.length === 0) {
        return false;
    }

    const { next } = options;

    return (
        <ErrorBoundary>
            <Container>
                <Pokedex>
                    <PokedexScreen>
                        <PokedexList>
                            {pokemonsList.map((item, i) => (
                                <PokedexListItem key={item.name}>
                                    <PokedexListLink to={`info/${item.name}`}>
                                        {item.name}
                                    </PokedexListLink>
                                </PokedexListItem>
                            ))}
                            <LoadMore onClick={() => loadMore(next)}>Load more</LoadMore>
                        </PokedexList>
                    </PokedexScreen>
                </Pokedex>
            </Container>
        </ErrorBoundary>
    );
}

export default Home;