import React from 'react'
import styled from 'styled-components';

const NewItem = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    gap: 0 .5em;
    figure{
        margin: 0;
    }
    img{
        width: 100%;
    }
    h3{
        margin: 0.5em 0;
    }
    p{
        margin:0;
    }
`

const New = ({ title, date, image, author }) => {
    return (
        <NewItem>
            <div>
                <h3>{title}</h3>
                <p>{date}</p>
            </div>
            <figure>
                <img src={image} alt={author}/>
            </figure>
        </NewItem>
    );
}
 
export default New;