import React from 'react'
import styled from 'styled-components';

const TabContainer = styled.button`
    font-size: .8em;
    cursor: pointer;
    border: 0;
    outline: 0;
    background-color: #fff;
    color: #cdcfd1;
    font-weight: 600;
    padding: 0;
    text-align: start;
    p{
        margin-top: 1em !important;
        border-bottom: 3px solid #e3dfe1;
    }
`

const Tab = ({data}) => {
    /* console.log(data) */
    return (
        <TabContainer>
            
        </TabContainer>
    );
}
 
export default Tab;