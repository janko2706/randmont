import React from 'react';
import styled from 'styled-components';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';
import headerImageDesktop from '../images/homePageCoverWindow.jpeg';
import headerImageMobile from '../images/homePageCoverMobile.jpeg'

function HomePage() {
    return (
        <motion.div
            // initial={{y: -200}}
            animate={{x: 0}}
            //exit={{y: -200}}
            transition={{ type: "spring", stiffness: 100 }}
            style={{display: 'grid'}}
        >
            <HomePageStyled>
                <header className='headerCont'>
                    <img src={headerImageDesktop} alt='alternate header' className='headerImageDesktop'/>
                    <img src={headerImageMobile} alt='alternate header' className='headerImageMobile'/>
                    <div className='headerTitleContMobile'>
                        <h1>More Brightness In <span style={{background: 'yellow', color: 'black'}}>Your Home</span></h1>
                    </div>
                    <div className='headerTitleContDesktop'>
                        <h1 className='headerH1'>
                            <span className='headerSpan'>More Brightness In</span>
                            <div className="message">
                                <div className="word1">Your Home</div>
                                <div className="word2">Your Life</div>
                                <div className="word3">Your Future</div>
                            </div>
                        </h1>
                    </div>
                </header>
                

                
                <GlassCard/>
            </HomePageStyled>
        </motion.div>
    )
}

const HomePageStyled = styled.div`
    .headerCont{
        position: relative;
        display: block;
        letter-spacing: 4px;
        margin-left: auto;
        margin-right: auto;
    }

    .headerTitleContMobile{
        display: none;
        position: absolute;
        top: 60%;
        /* left: 50%; */
        transform: translate(0, -50%);
        backdrop-filter: blur(10px);
        font-size: .7em;
        text-align: center;
        width: 100%;
        justify-content: flex-end;
        user-select: none;
        color: white;
    }

    .headerImageDesktop{
        max-width: 100%;
        height: auto;
        border-style: none;
        vertical-align: middle;
        width: 100%;
        aspect-ratio: auto 1500/800;
    }
    .headerImageMobile{
        display: none;
        max-width: 100%;
        border-style: none;
        vertical-align: middle;
        width: 100%;
        height: 100%;
    }
    .headerTitleContDesktop{
        position: absolute;
        top: 50%;
        /* left: 50%; */
        transform: translate(0, -50%);
        display: block;
        backdrop-filter: blur(10px);
        width: 950px;
        user-select: none;
    }
    .headerH1{
        color: white;
        font-size: 3rem;
        font-weight: 100;
        line-height: 1.5;
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        width: auto;
    }
    .headerSpan{
        font-size: 40px;
        /* margin-left: 40px; */
    }
    .message{
        background-color: yellow;
        color: #333;
        display: block;
        font-weight: 900;
        overflow: hidden;
        position: absolute;
        top: 0.2rem;
        left: 550px;
        animation: openclose 7s ease-in-out infinite;
    }
    @media (max-width: 949px){
        .headerTitleContMobile{
            display: flex;
        }
        .headerTitleContDesktop{
            display: none;
        }
        .headerImageMobile{
            display: inherit;
        }
        .headerImageDesktop{
            display: none !important;
        }
    }

    .word1, .word2, .word3 {
        font-family: tahoma;
    }
    @keyframes openclose {
        0% {
            top: 0.2rem;
            width: 0;
        }
        5% {
            width: 0;
        }
        15% {
            width: 400px;
        }
        30% {
            top: 0.2rem;
            width: 400px;
        }
        33% {
            top: 0.2rem;
            width: 0;
        }
        35% {
            top: 0.2rem;
            width: 0;
        }
        38% {
            top: -4.5rem;
            
        }
        48% {
            top: -4.5rem;
            width: 400px;
        }
        62% {
            top: -4.5rem;
            width: 400px;
        }
        66% {
            top: -4.5rem;
            width: 0;
            text-indent: 0;
        }
        71% {
            top: -9rem;
            width: 0;
            text-indent: 5px;
        }
        86% {
            top: -9rem;
            width: 400px;
        }
        95% {
            top: -9rem;
            width: 400px;
        }
        98% {
            top: -9rem;
            width: 0;
            text-indent: 5px;
        }
        100% {
            top: 0;
            width: 0;
            text-indent: 0;
        }
    }

`

export default HomePage