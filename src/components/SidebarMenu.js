import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Apple } from 'react-bootstrap-icons';

function SidebarMenu() {
    return (
    <SidebarMenuStyled>
        <div className='navigation'>
            <ul>
                <li>
                    <NavLink to="/">
                        <span><Apple/></span>
                        <span className='title'>Rand Mont</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <span className='icon'></span>
                        <span className='title'>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        <span className='icon'></span>
                        <span className='title'>About</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/services">
                        <span className='icon'></span>
                        <span className='title'>Services</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        <span className='icon'></span>
                        <span className='title'>Contact</span>
                    </NavLink>
                </li>
            </ul>
            <div className='toggle'></div>
        </div>
    </SidebarMenuStyled>
    )
}

const SidebarMenuStyled = styled.div`
    .navigation{
        position: fixed;
        inset: 20px;
        background: #287bff;
        width: 80px;
        width: 300px;
        border-left: 10px solid #287bff;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.5);
    }

`

export default SidebarMenu