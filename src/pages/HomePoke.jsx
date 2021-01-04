import React from 'react'
import styled from 'styled-components';
import List from '../components/list';
import News from '../components/list/news';
import Searchs from '../components/list/searchs';

const HomeContainer = styled.div`
  background: #f5f5f5;
  height: 100vh;
`

const HomePoke = () => {
    return (
        <HomeContainer>
          <Searchs />
          <List />
          <News />
        </HomeContainer>
    );
}
 
export default HomePoke;