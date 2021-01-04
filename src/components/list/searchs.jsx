import React from 'react'
import styled from 'styled-components';
import Search from '../search';
import img from '../../images/fondo3.png'
const SearchContainer = styled.section`
  background-color: #fa6555;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr; 
  grid-template-columns: 10px 1fr 10px;
  grid-template-areas:
      " . . ."
      ". title-poke ."
      ". search-poke .";
  align-items: center;
  gap:.8em;
  border-radius: 0 0 30px 30px;
  overflow: hidden;
  position:relative;
  .title-poke{
    grid-area: title-poke;
    color:white;
    text-align: left;
    margin: 0;
  } 
  &:after {
    content: "";
    background-image: url(${img});
    width: 300px;
    height: 300px;
    position: absolute;
    right: -120px;
    background-position: center;
    top: -120px;
    opacity: .2;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Searchs = () => {
    return (
        <SearchContainer>
            <h2 className="title-poke">What Pokémon are you looking for?</h2>
            <Search />
        </SearchContainer>
    );
}
 
export default Searchs;