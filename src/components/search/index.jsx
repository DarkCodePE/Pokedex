import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const SearchPokeContainer = styled.label`
    display:flex;
    background: white;
    align-items: center;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, .05);
    padding: 0 2rem;
    border-radius: 60px;
    grid-area: search-poke;
    margin: 0 0 1em 0;
    svg{
        margin-right: 1em;
        color: #454e56;
        height: 20px;
    }
    form{
        width: 100%;
    }
    input{
        flex: 1;
        border: none;
        height: 48px;
        font-size: .8em;
        outline: 0;
        width: 100%;
        &::-webkit-input-placeholder {
            color: #454e56
        }
    }
`;

const Search = () => {
    const history = useHistory();
    const [search, setSearch] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
        history.push({
            pathname: '/summary',
            id: search 
        });
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <SearchPokeContainer>
            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor"  className="search-icon" ><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <form
                onSubmit={handleOnSubmit}
            >
                <input 
                    type="text" 
                    placeholder="Search Pokemon, Move, Ability, etc"
                    onChange={handleChange} 
                />
            </form>
        </SearchPokeContainer>
    );
}
 
export default Search;