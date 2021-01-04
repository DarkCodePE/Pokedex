import React, { useEffect } from 'react'
import { GET_POKEMON } from '../types';
import getDataPoke from '../services/getDataPoke';
import styled from 'styled-components';
import {useLocation } from "react-router-dom";
import usePokeDispatch from '../hooks/usePokeDispatch';
import Card from '../components/card';
import NavMenu from '../components/menu';
import Tabs from '../components/menu/tabs';

/* import styled from 'styled-components'; */
const SummaryPokeContainer = styled.div`
    background-color: #4aceb1;
    height: 100vh;
`;

const SummaryPoke = () => {
    let {id} = useLocation()
    let dispatch = usePokeDispatch()
    useEffect(() => {
        getDataPoke({resource: 'pokemon', id: id}).then((data) => {
            dispatch({
                type: GET_POKEMON,
                payload: data
            })
        })
    }, [id, dispatch])

    return (
        <SummaryPokeContainer>
            <NavMenu />    
            <Card />
            <Tabs id = {id} />
        </SummaryPokeContainer>
    );
}
 
export default SummaryPoke;