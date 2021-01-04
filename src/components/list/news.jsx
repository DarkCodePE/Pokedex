import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import New from '../card/new.jsx';
import getDataNews from '../../services/getDataNews.jsx';
import dateFormat from '../../utilities/dateFormat.jsx';
const NewContainer = styled.section`
    padding: 0 1em;
    h2{
        margin: .5em 0;
    }
`
const News = () => {
    const [news, setNews] = useState({})

    useEffect(() => {
        getDataNews().then((data) => {
            setNews(data.articles)
        })
    }, [])
    console.log(news)
    if (news === undefined || Object.keys(news).length === 0 ) return null
    return (
        <NewContainer>
             <h2>Pokémon News</h2>   
             { news.slice(0, 2).map(({title, publishedAt, urlToImage, author}, index) => (
                <New 
                    key={index}
                    title={title}
                    date={dateFormat({fecha:publishedAt})}
                    image={urlToImage}
                    author={author}
                />
            )) }
        </NewContainer>
    );
}
 
export default News;