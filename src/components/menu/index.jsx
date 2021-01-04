import React from 'react'
import styled from 'styled-components';
const NavMenuContainer = styled.div`
    display:flex;
    justify-content: space-between;
    span{
        font-size: 1.5em;
    }
`
const NavMenu = () => {
    return (
        <NavMenuContainer>
            <span role="img" aria-label="left">⬅️</span> 
            <span role="img" aria-label="list">🤍</span> 
        </NavMenuContainer>
    );
}
 
export default NavMenu;