import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HouseDoor, PeopleFill, PersonRolodex, EnvelopePlus } from 'react-bootstrap-icons';
import logoWithCircle from '../images/Rand_Mont_Logo_NO_NAME_CIRCLE.png';


function SidebarMenu() {

    function openMenu () {
        let navigation = document.querySelector('.navigation');
        var toggle = document.querySelector('.toggleNavigation');
        var toggleObj = document.querySelector('.toggleObj');
    if (toggle != null) {
            navigation.classList.toggle('active');
            toggleObj.classList.toggle('activeToggle')
    }
    }

    return (
    <SidebarMenuStyled>
        <div  className='toggleObj'>
            <div className='toggleNavigation' onClick={openMenu}></div>
        </div>
        <div className='navigation'>
            <ul>
                <li>
                    <NavLink to="/" className={'NavLink'}>
                        <span className='icon'><img src={logoWithCircle} alt='testing alternative' className={'logo-icon'}/></span>
                        <span className='title'>RAND MONT</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={'NavLink'}>
                        <span className='icon'><HouseDoor className={'b-icon'}/></span>
                        <span className='title'>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={'NavLink'}>
                        <span className='icon'><PeopleFill className={'b-icon'}/></span>
                        <span className='title'>About</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/services" className={'NavLink'}>
                        <span className='icon'><PersonRolodex className={'b-icon'}/></span>
                        <span className='title'>Services</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={'NavLink'}>
                        <span className='icon'><EnvelopePlus className={'b-icon'}/></span>
                        <span className='title'>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        
    </SidebarMenuStyled>
    )
}

const SidebarMenuStyled = styled.div`
    .navigation{
        z-index: 9;
        position: fixed;
        top: 20px;
        right: 20px;
        left: 60px;
        bottom: 20px;
        backdrop-filter: blur(10px);
        width: 80px;
        border-radius: 50px;
        overflow: hidden;
        box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.5);
        transition: 0.5s;
        opacity: 0;
    }
    .navigation.active{
        width: 300px;
        border-radius: 20px;
        opacity: 1;
    }

    @media (max-width: 450px){
        .navigation.active{
            width: 180px;
        }
        .activeToggle .toggleNavigation{
            transform: translateX(-20px) !important;
        }
        .toggleNavigation{
            left: 1.7em !important;
        }
        .navigation ul li:nth-child(1) {
            font-size: 1.3rem !important;
            color: black !important;
            transform: translateX(-50px);

        }
        .logo-icon{
            display: none;
        }
    }

    .activeToggle .toggleNavigation::before{
        transform: translate(0px) rotate(-405deg);
    }
    .activeToggle .toggleNavigation::after{
        transform: translate(0px) rotate(225deg);
    }

    .activeToggle .toggleNavigation{
        transform: translateX(-60px);
    }

    .navigation ul{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .navigation ul li {
        position: relative;
        list-style: none;
        width: 0%;
        border-radius: 30px;
        /* border-top-left-radius: 30px;
        border-bottom-left-radius: 30px; */
        background: none;
        opacity: 1;
        transition: .5s ease-in-out;
    }
    .navigation ul li:not(:first-child):hover {
            width: 80%;
            background: var(--light-blue-color);
            opacity: .7;
            
    }
    @media (max-width: 949px){
        .navigation ul li .NavLink{
            color: black !important;
        }
    }

    .navigation ul li:nth-child(1) {
        top: 20px;
        font-weight: bold;
        color: var(--darker-blue-color);
        font-size: 1.5em;
        margin-bottom: 40px;
        background: none;
        user-select: none;
    }
    .navigation ul li:hover:not(:first-child) .NavLink{
        color: var(--brown-color-dark);
    }

    .navigation ul li .NavLink {
        position: relative;
        display: block;
        width: 100%;
        display: flex;
        text-decoration: none;
        /* color: var(--light-blue-color); */
        color: white;

    }


    .navigation ul li .NavLink .icon {
        position: relative;
        display: block;
        min-width: 60px;
        height: 60px;
        line-height: 70px;
        text-align: center;
    }
    .navigation ul li .NavLink .icon .b-icon{
        font-size: 1.75em;
    }

    .navigation ul li .NavLink .icon .logo-icon{
        width: 70%;
        height: 70%;
    }
    .navigation ul li .NavLink .title{
        position: relative;
        display: block;
        padding: 0 10px;
        height: 60px;
        line-height: 60px;
        text-align: start;
        white-space: nowrap;
    }

    .toggleNavigation{
        z-index: 10;
        position: fixed;
        top: 2em;
        left: 4em;
        width: 50px;
        height: 50px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.15);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s ease-in-out;
    }
        .toggleNavigation::before{
            content: '';
            position: absolute;
            width: 26px;
            height: 3px;
            border-radius: 3px;
            background: #365fa1;
            transform: translateY(-5px);
            transition: 1s;
        }
        .toggleNavigation::after{
            content: '';
            position: absolute;
            width: 26px;
            height: 3px;
            border-radius: 3px;
            background: #365fa1;
            transform: translateY(5px);
            transition: 1s;
        }
        
`

export default SidebarMenu