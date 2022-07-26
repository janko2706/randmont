import React from 'react';
import styled from 'styled-components';
import GlassCard from '../components/GlassCard';

function HomePage() {
    return (
        <HomePageStyled>
            <GlassCard/>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.div`
    .homePageCont{
        background-image: url('https://m.media-amazon.com/images/I/71BqjyHXmvL._AC_SX466_.jpg');
    }
`

export default HomePage