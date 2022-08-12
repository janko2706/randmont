import React from 'react'
import styled from 'styled-components'

function AboutUsPage() {
    return (
        <AboutUsPageStyled>
            <div className='aboutUsPageTitleCont'>
                <h1 className='aboutUsPageTitle'>RAND MONT</h1>
            </div>
            <div className='text-center text-bold'>
                <p className='m-0' style={{fontSize: '2rem', paddingTop: '1em'}}>Hello.</p>
                <p className='m-0'>Welcome to Rand Mont, so glad you're here!</p>
                <p className='m-0'>We are Dario and Roko, father-son duo from Crotia and founders of Rand Mont.</p>
                <p className='m-0'>Our journey has begun 2 years ago with nothing but goodwill and big hearts.</p>
                <p className='m-0'>Today, our company has 12 amazing people who put their heart and soul into every project we do.</p>
                <p className='m-0'>Separated into 3 teams, we have finished about 50 projects and continue to do more. Our mission is to create more beautiful and energy-conservative homes.</p>
            </div>
            <div className='m-3 text-center'><h1>Our Process</h1></div>
            <div className='ourProcessSection'>
                    <div className='consultationBlock'>
                        On-Site Consultations
                    </div >
                    <div className='emptyBlock1'></div>
                    <div className='installationBlock'>
                        Installation
                    </div>
                    <div className='emptyBlock2'></div>
                    <div className='emptyBlock3'></div >
                    <div className='preconstructionMesurmantsBlock'>
                        Preconstruction Mesurmants
                    </div>
                    <div className='emptyBlock4'></div>
                    <div className='theFinishingTouchesBlock'>
                        The Finishing Touches
                    </div>
            </div>
        </AboutUsPageStyled>
    )
}

const AboutUsPageStyled = styled.div`
    background: var(--light-color-blue);
    .ourProcessSection{
        margin-top: 10px;
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto;
        height: auto;
        width: 100%;
        background-attachment: fixed;
        background-image: url('https://img.freepik.com/free-photo/large-building-site_1127-3251.jpg?w=2000'); 
        align-items: center;
        text-align: center;
    }
    .ourProcessSection div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        height: 23vw;
        width: 24.5vw;
    }


    .consultationBlock, .installationBlock, .preconstructionMesurmantsBlock,.theFinishingTouchesBlock{
        background-color: var(--darker-blue-color);
    }



    .aboutUsPageTitleCont{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('https://img.freepik.com/free-photo/large-building-site_1127-3251.jpg?w=2000'); 
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        user-select:none ;
    }

    .aboutUsPageTitle {
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: center;
        text-align: center;
        width: fit-content;
        font-size: 8rem;
        font-weight: 600;
        color: var(--darker-blue-color);
        margin: 10px !important;
        padding: .1em;
        border-radius: 50px;
    }

    @media (max-width:485px){
        .aboutUsPageTitle{
            font-size: 4rem;
        }
        
    }
    @media (max-width:985px){
        .ourProcessSection div{
            font-size: .8rem;
            word-break: break-all;
        }
    }

`

export default AboutUsPage