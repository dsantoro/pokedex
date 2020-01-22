import React from 'react';
import { useFetch } from '../../services/api';

import { Container } from './styles';

function Info({ match: { params: { name } }, history }) {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

    const fetchPokemon = useFetch(URL, {
        isLoading: true,
        data: null
    });

    if (fetchPokemon.error) {
        return 'Error...';
    }

    if (fetchPokemon.isLoading) {
        return 'Loading...';
    }

    if (!fetchPokemon) {
        return null;
    }

    const { name: pokemonName, sprites } = fetchPokemon.data

    return (
        <Container>
            <button onClick={() => history.goBack()}>Back</button>
            <hr />
            <h1>{pokemonName}</h1>
            <img src={sprites.front_default} alt={pokemonName} />
            <p>Work in progress!</p>
        </Container>
    )
}

export default Info;