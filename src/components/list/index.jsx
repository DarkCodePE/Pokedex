import React from 'react'
import styled from 'styled-components';
import img from '../../images/fondo4.png'

const ListContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap:1em;
    padding: 1em;
    background: #fff;
    border-radius: 0 0 30px 30px;
`;

const ListItem = styled.div`
    background: ${props => props.color };
    position: relative;
    color: white;
    font-weight: 600;
    font-size: 1.2em;
    padding: 0 1em;
    border-radius: 16px;
    overflow: hidden;
    &:after {
        content: "";
        background-image: url(${img});
        width: 70px;
        height: 70px;
        position: absolute;
        background-position: center;
        opacity: .2;
        background-repeat: no-repeat;
        background-size: cover;
        /* border: 3px solid red; */
        top: 5px;
        right: -10px;
    }
`

const List = () => {
    return (
        <ListContainer>
            <ListItem color="#2cdab1">
                <p>Pokedex</p>
            </ListItem>
            <ListItem color="#f7786b">
                <p>Moves</p>
            </ListItem>
            <ListItem color="#58abf6">
                <p>Abilties</p>
            </ListItem>
            <ListItem color="#ffce4b">
                <p>Items</p>
            </ListItem>
            <ListItem color="#9f5bba">
                <p>Locations</p>
            </ListItem>
            <ListItem color="#ca8179">
                <p>Type Charts</p>
            </ListItem>
        </ListContainer>
    );
}
 
export default List;