import React from 'react';
import styled from 'styled-components';
import usePokeState from '../../hooks/usePokeState';

const CardPokeContainer = styled.div`
    display: grid;
    grid-template-rows: .1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "type-poke-info order-poke-info"
        "img-poke-info img-poke-info";
    align-items: center;
    .type-poke-info{
        grid-area: type-poke-info;
        display: grid;
        margin: 0;
        grid-template-columns: 1fr 1fr;
        justify-self: center;
        gap:.5em 1em;
        justify-self: start;
        .name-poke-info{
            grid-column: span 2;
            color: #fff;
            font-size: 1.5em;
            text-transform: capitalize;
            font-weight: 600;
            justify-self: start;
            margin:0;
        }
        .type-poke-name{
            color: #fff;
            background: #8fe9d9;
            border-radius: 10px;
            padding: .2em .8em;
            font-size: 12px;
            margin:0;
            text-align: center;
        }
    }
    .img-poke-info{
        grid-area: img-poke-info;
        justify-self: center;
        height: auto;
        width: 50%;
        margin: 0;
        height: 110px;
        position: relative;
        display: flex;
        img{
            height: 180px;
            width: 100%;
            position: absolute;
            top: -20px;
        }
    }
    .order-poke-info{
        margin:0;
        justify-self: end;
    }
`;

const Card = () => {
    const {pokemon} = usePokeState()
    if (pokemon === undefined || Object.keys(pokemon).length === 0 ) return null
    return (
        <CardPokeContainer>
            <div className="type-poke-info"> 
                <p className="name-poke-info">{pokemon.name}</p>
                {pokemon.types.map(({type, slot}) =>(
                    <p key={slot} className="type-poke-name">{type.name}</p>
                ))}
            </div>
            <p className="order-poke-info">#001</p>
            <figure className="img-poke-info">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </figure> 
        </CardPokeContainer>
    );
}
 
export default Card;