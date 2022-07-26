import React from 'react'
import styled from 'styled-components'

function GlassCard() {
    return (
        <GlassCardStyled>
            <div className='smallBody'>
                <div className='container'>
                    <div className="box">
                        <div className="content">
                            <h1>Rand Mont</h1>
                            <span class="profession">More Brightness In Your Home</span>
                        </div>
                    </div>
                </div>
            </div>
        </GlassCardStyled>
    )
    }

const GlassCardStyled = styled.div`
    .smallBody{
        height: 100vh;
        display:grid;
    }

    .box{
        position:relative;
        z-index:1;
        border-radius:6px;
        backdrop-filter:blur(20px);
        justify-content: center;
        display: block;
        text-align: center;
        padding: 20px;
        margin-left: 80px;
        margin: 30px;
    }
    .content{
        z-index:2;
        position:relative;
        display: block;
    }
    .container h1{
        position:relative;
        font-weight: bolder;
        font-size: 2em;
        color:var(--purple-color);
    }

    .profession{
        letter-spacing:1px;
        font-size:.6em;
        color:var(--darker-blue-color);
        z-index:30;
        position:relative;
        font-family: cursive;
    }
`;

export default GlassCard