import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HouseDoor, PeopleFill, PersonRolodex, EnvelopePlus } from 'react-bootstrap-icons';
import logoWithCircle from '../images/Rand_Mont_Logo_NO_NAME_CIRCLE.png'

function SidebarMenu() {
    
    

    function openMenu () {
        let navigation = document.querySelector('.navigation');
    var toggle = document.querySelector('.toggle');
    if (toggle != null) {
            navigation.classList.toggle('active');
    }
    }




    return (
    <SidebarMenuStyled>
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
            <div className='toggle' onClick={openMenu}></div>
        </div>
    </SidebarMenuStyled>
    )
}

const SidebarMenuStyled = styled.div`
    .navigation{
        z-index: 999;
        position: fixed;
        inset: 20px;
        background: var(--darker-blue-color);
        width: 80px;
        border-left: 10px solid var(--darker-blue-color);
        border-radius: 50px;
        overflow: hidden;
        box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.5);
        transition: 0.5s;
    }
    .navigation.active{
        width: 300px;
        border-radius: 20px;
    }

    .navigation.active .toggle::before{
        transform: translate(0px) rotate(-405deg);
    }
    .navigation.active .toggle::after{
        transform: translate(0px) rotate(225deg);
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
        width: 100%;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }
    .navigation ul li:hover {
        background: white;
    }

    .navigation ul li:nth-child(1) {
        top: 20px;
        margin-bottom: 40px;
        background: none;
    }

    .navigation ul li:not(:first-child):hover::before{
        content: '';
        position: absolute;
        top: -20px;
        right: 0;
        width: 20px;
        height: 20px;
        background: transparent;
        border-bottom-right-radius: 20px;
        box-shadow: 7.5px 7.5px 0 7.5px white;
    }
    .navigation ul li:not(:first-child):hover::after{
        content: '';
        position: absolute;
        bottom: -20px;
        right: 0;
        width: 20px;
        height: 20px;
        background: transparent;
        border-top-right-radius: 20px;
        box-shadow: 7.5px -7.5px 0 7.5px white;
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
        color: var(--light-blue-color);

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

    .toggle{
        position: absolute;
        bottom: 15px;
        right: 15px;
        width: 50px;
        height: 50px;
        background:#fff;
        border-radius: 50%;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.15);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
        .toggle::before{
            content: '';
            position: absolute;
            width: 26px;
            height: 3px;
            border-radius: 3px;
            background: #365fa1;
            transform: translateY(-5px);
            transition: 1s;
        }
        .toggle::after{
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