import React from 'react'
import styled from 'styled-components';
import getMultipleServicesData from '../../helpers/GetMultipleServicesData';
import usePokeState from '../../hooks/usePokeState';

const TabsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 1.5em 0;
    padding: 0;
    z-index:10000;
`
const categories = [
    { tab :'ABOUT', cat:['pokemon','pokemon-species'], type: 'GET_ABOUT'}, 
    { tab :'STATS', cat:''},
    { tab :'EVOLUTION', cat:''},
    { tab :'MOVES', cat:['move']}
];

const Tabs = ({id}) => {
    /* const about = usePokeState() */
  /*   if (about === undefined || Object.keys(about).length === 0 ) return null */
   /*  console.log(about) */
    return (
        <TabsContainer>
            <ul>
                {categories.map(category => (
                    <li 
                        key={category.tab}
                       /*  onClick={() => getMultipleServicesData(id, category.cat)} */
                    >{category.tab}</li>
                ))}
            </ul>
        </TabsContainer>
    );
}
 
export default Tabs;