import React from 'react';
import styled from 'styled-components';
import GlassCard from '../components/GlassCard';
import { motion, useTransform, useScroll } from 'framer-motion';
import headerImageDesktop from '../images/homePageCoverWindow.jpeg';
import headerImageMobile from '../images/homePageCoverMobile.jpeg';
import aboutUsImage from '../images/RandMontCrew.jpg';
import { NavLink } from 'react-router-dom';
import Impressions from '../components/Impressions';

function HomePage() {

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 100]);


    return (
        <motion.div
            // initial={{y: -200}}
            // animate={{x: 0}}
            //exit={{y: -200}}
            // transition={{ type: "spring", stiffness: 100 }}
            style={{display: 'grid', overflowX: 'hidden'}}
        >
            <HomePageStyled>
                <header className='headerCont'>
                    <img src={headerImageDesktop} alt='alternate header' className='headerImageDesktop'/>
                    <img src={headerImageMobile} alt='alternate header' className='headerImageMobile'/>
                    <motion.div className='headerTitleContMobile' style={{y: y1}}>
                        <h3 style={{color:'white'}}>More Brightness In <span style={{background: 'var(--light-blue-color)', color: 'black'}}>Your Home</span></h3>
                    </motion.div>
                    <motion.div className='headerTitleContDesktop' style={{y: y1}}>
                        <h1 className='headerH1'>
                            <span className='headerSpan'>More Brightness In</span>
                            <div className="message">
                                <div className="word1">Your Home</div>
                                <div className="word2">Your Life</div>
                                <div className="word3">Your Future</div>
                            </div>
                        </h1>
                    </motion.div>
                </header>
                <section
                    className={'aboutUsHomeSection'}
                >   
                    <div className="aboutUsHomeSectionTitleAndTextCont">
                        <motion.div 
                            className='aboutUsHomeSectionTitleCont'>
                            <h2>Who Are We?</h2>
                        </motion.div>
                        <motion.div
                            className='aboutUsHomeSectionTextCont'>
                            <span>Hello, <br/>
                            Welcome to Rand Mont, so glad you're here!<br/>
                            We are Dario and Roko, father-son duo from Crotia and founders of Rand Mont.<br/>
                            Our journey has begun 2 years ago with nothing but goodwill and big hearts. 
                            </span>
                        </motion.div>
                        <motion.div
                            className="buttonBox">
                        <NavLink className="btn btn-one" to='/about'>
                            <span>LEARN MORE</span>
                        </NavLink>
                        </motion.div>
                    </div>
                    <motion.img
                        className="aboutUsImage"
                        src={aboutUsImage}
                        alt="alternate about us "
                    />

                    
                </section>
                <section> 
                    <GlassCard/>
                </section>
                <section>
                    <Impressions/>
                </section>
                <section>
                    <h1 className='text-center workTogether'>Contact us today, and let's start working together!</h1>
                    <div className='buttonBox2'> 
                        <NavLink className="btn btn-one" to='/contact'>
                            <span>CONTACT US</span>
                        </NavLink>
                    </div>
                </section>
            </HomePageStyled>
        </motion.div>
    )
}

const HomePageStyled = styled.div`

    /* 
    ========================
        BUTTON LEARN MORE
    ========================
    */
    .buttonBox2{
        text-align:center ;
        margin: 10px;
    }
    .buttonBox{
        margin: auto;
    }
    .btn {
        overflow: hidden;
        line-height: 50px;
        text-align: center;
        text-decoration: none;
        font-size: 1.2rem;
        padding: 1em;
        cursor: pointer;
    }

    .btn-one {
        text-decoration: none;
        color: #FFF;
        transition: all 0.3s;
        position: relative;
    }
    .btn-one span {
    transition: all 0.3s;
    }
    .btn-one::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(255,255,255,0.5);
    border-bottom-color: rgba(255,255,255,0.5);
    transform: scale(0.1, 1);
    }
    .btn-one:hover span {
    letter-spacing: 2px;
    }
    .btn-one:hover::before {
    opacity: 1; 
    transform: scale(1, 1); 
    }
    .btn-one::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: var(--darker-blue-color);
    opacity: .3;
    }
    .btn-one:hover::after {
    opacity: 0; 
    transform: scale(0.1, 1);
    }
    //button END

    .aboutUsHomeSection{
        display: inline-flex; 
        margin: 2em 5em  5em 0;
    }

    .aboutUsHomeSectionTitleAndTextCont{
        display: inline-flex;
        flex-direction: column;
        align-items: center;
    }
    .aboutUsHomeSectionTextCont{
        margin: auto;
        padding-top: .6em; 
        text-align: center;
    }
    .aboutUsHomeSectionTextCont::first-line {
        font-size: 1.7em;
        background: var(--darker-blue-color);
        letter-spacing: 3px;
    }
    .aboutUsImage {
        width: 70%;
        aspect-ratio: 1330 / 635;
    }
    .aboutUsHomeSectionTitleCont{
        margin-bottom: .7em;
        margin-top: .7em;
        font-size: 1.3em;
    }
    .aboutUsHomeSectionTitleCont::after{
        content: '';
        position: absolute;
        z-index: 999;
        width: 100px;
        height: 100px;
    }
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
        padding: 5px;
        transform: translate(0, -50%);
        backdrop-filter: blur(10px);
        font-size: .7em  !important;
        line-height: 0px !important;
        max-width: 100vw;
        width: fit-content;
        text-align: center;
        word-break: break-word;
        margin-right: 1em;
        user-select: none;
        color: white;
    }

    .headerImageDesktop{
        max-width: 100%;
        height: auto;
        border-style: none;
        vertical-align: middle;
        width: 100%;
        height: 100vh;
        aspect-ratio: auto 1500/800;
    }
    .headerImageMobile{
        display: none;
        max-width: 100%;
        border-style: none;
        vertical-align: middle;
        width: 100%;
        height: 100vh;
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
        margin: 0px !important;
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
        background-color: var(--light-blue-color);
        overflow: hidden;
        color: #333;
        display: block;
        font-weight: 900;
        position: absolute;
        top: 0.2rem;
        left: 550px;
        animation: openclose 7s ease-in-out infinite;
    }
    @media (max-width: 949px){
        .headerTitleContMobile{
            display: flex;
        }
        .servicesHomeSection{
            flex-direction:column ;
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
        .aboutUsHomeSectionTextCont{
            font-size: .9em;
            margin: 1.5em;
        }
        .aboutUsHomeSection{
            flex-direction: column;
            width: 100vw;
        }
        .aboutUsImage{
            display: none;
        }
        .workTogether{
            text-align: left !important;
            margin-right: 40%;
        }
        .buttonBox2{
            text-align: left !important;
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