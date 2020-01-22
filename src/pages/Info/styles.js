import styled from 'styled-components';

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