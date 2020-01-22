import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
    max-width: 960px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
`;

export const Pokedex = styled.div`
    background-color: #e71d24;
    padding: 30px;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    box-shadow: 0 0 15px rgba(0, 0, 0, .3);
    position: relative;
`;

export const PokedexScreen = styled.div`
    background-color: #222222;
    padding: 16px;
    height: calc(100vh - 64px);
    overflow-y: scroll;
`;

export const PokedexList = styled.ul`
    list-style: none;
    margin: 0;
`;

export const PokedexListItem = styled.li`
    text-transform: uppercase;
    margin-bottom: 16px;
    font-size: 18px;
`;

export const PokedexListLink = styled(Link)`
    color: #40f958;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const LoadMore = styled.button`
    text-transform: uppercase;
    font-style: italic;
    position: absolute;
    font-size: 20px;
    cursor: pointer;
    padding: 12px;
    color: white;
    bottom: 45px;
    right: 45px;
    appearance: none;
    background-color: blue;
`;