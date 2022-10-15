import React from 'react'
import styled from 'styled-components';
import slikaGradilista from '../images/gradilisteRandMont.jpg';
import slikaRenovacije from '../images/renovacijaRandMont.jpg';
import slikaVelikeZgrade from '../images/bussinesBuildingRandMont.jpg';
import { NavLink } from 'react-router-dom';

function GlassCard() {
    return (
        <GlassCardStyled>
            <div className='servicesTitle'>
                <h1>Our Services Include</h1>
            </div>
            <div className="glassCardContainer">
                <div className="box">
                    <span></span>
                    <div className="content">
                    <h2>Renovation</h2>
                    <p>Let's Give Your Home A Fresh Look.</p>
                    <NavLink to="/services">Get a free estimate</NavLink>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                    <h2>New Construction</h2>
                    <p>Let's Make Your Dream Home A Reality.</p>
                    <NavLink to="/services">Get a free estimate</NavLink>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                    <h2>Big Projects</h2>
                    <p>Even When It Comes To Big Projects,</p>
                    <p>We Put Our Heart And Soul In Every Scheme.</p>
                    <NavLink to="/contact">Give us a call</NavLink>
                    </div>
                </div>
            </div>
        
        </GlassCardStyled>
    )
    }

const GlassCardStyled = styled.div`
    .servicesTitle{
        width: 100vw;
        text-align: center;
        align-items: center;
        font-size: 100%;
        position: relative;
    }
    .glassCardContainer
    {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        overflow: hidden;
        padding: 40px 0;
    }

    .glassCardContainer .box
    {
        position: relative;
        width: 320px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 30px;
        transition: 0.5s;
    }

    .glassCardContainer .box::before
    {
        content:' ';
        position: absolute;
        top: 0;
        left: 50px;
        width: 50%;
        height: 100%;
        text-decoration: none;
        background: #fff;
        border-radius: 8px;
        transform: skewX(15deg);
        transition: 0.5s;
    }

    .glassCardContainer .box::after
    {
        content:'';
        position: absolute;
        top: 0;
        left: 50;
        width: 50%;
        height: 100%;
        border-radius: 8px;
        transform: skewX(15deg);
        transition: 0.5s;
        /* filter: blur(50px); */
    }

    .glassCardContainer .box:hover:before,
    .glassCardContainer .box:hover:after
    {
        transform: skewX(0deg);
        left: 20px;
        width: calc(100% - 90px);
    
    }

    .glassCardContainer .box:nth-child(1):before,
    .glassCardContainer .box:nth-child(1):after
    {
        background-image: url(${slikaRenovacije});
        background-size: cover;
        /* background: var(--purple-color) */
    }

    .glassCardContainer .box:nth-child(2):before,
    .glassCardContainer .box:nth-child(2):after
    {
        background: url(${slikaGradilista});
        background-size: cover;
    /* background: var(--brown-color-dark) */
    }

    .glassCardContainer .box:nth-child(3):before,
    .glassCardContainer .box:nth-child(3):after
    {
        background-image: url(${slikaVelikeZgrade});
        background-size: cover;
    /* background: var(--brown-color-light) */
    }

    .glassCardContainer .box span
    {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
        pointer-events: none;
    }

    .glassCardContainer .box span::before
    {
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0);
        backdrop-filter: blur(4.2px);
        opacity: 0;
        transition: 0.1s;  
        animation: animate 2s ease-in-out infinite;
        box-shadow: 0 5px 15px rgba(0,0,0,0.08)
    }

    .glassCardContainer .box:hover span::before
    {
    top: -50px;
    left: 50px;
    width: 100px;
    height: 100px;
    opacity: 1;
    }

    .glassCardContainer .box span::after
    {
    content:'';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: 0.5s;
    animation: animate 2s ease-in-out infinite;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    animation-delay: -1s;
    }

    .glassCardContainer .box:hover span:after
    {
    bottom: -50px;
    right: 50px;
    width: 100px;
    height: 100px;
    opacity: 1;
    }

    @keyframes animate
    {
    0%, 100%
    {
        transform: translateY(10px);
    }
    
    50%
    {
        transform: translate(-10px);
    }
    }

    .glassCardContainer .box .content
    {
        position: relative;
        left: 0;
        padding: 20px 40px;
        background: rgba(76, 152, 231, 0.2);
        backdrop-filter: blur(3.8px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        user-select: none;
        z-index: 1;
        transform: 0.5s;
        color: #fff;
        transition: all 0.5s ease-in-out;
    }

    .glassCardContainer .box:hover .content
    {
    left: -25px;
    padding: 60px 40px;
    }

    .glassCardContainer .box .content h2
    {
    font-size: 2em;
    color: #fff;
    margin-bottom: 10px;
    }

    .glassCardContainer .box .content p
    {
    font-size: 1.1em;
    margin-bottom: 10px;
    line-height: 1.4em;
    }

    .glassCardContainer .box .content a
    {
        display: inline-block;
        font-size: 1.1em;
        color: #111;
        background: var(--light-blue-color);
        padding: 10px;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 700;
        margin-top: 5px;
        transition: all .5s ease-in-out;
    }

    .glassCardContainer .box .content a:hover
    {
        background: var(--purple-color);
        color: white;
        box-shadow: 0 1px 15px rgba(1, 1, 1, 0.2);
    }

`;

export default GlassCard