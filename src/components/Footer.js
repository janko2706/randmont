import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterStyled>
        <footer className='footerCont'>

        </footer>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
.footerCont{
    position: absolute;
    height: 250px;
    width: 100%;
    background-color: black;
}

`

export default Footer