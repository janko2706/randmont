import React from 'react';
import styled from 'styled-components';
import { Facebook, Whatsapp, Instagram } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <FooterStyled>
        <footer>
        <div className="footer-content">
            <h3>Rand Mont</h3>
            <p>We are here to bring all the brightness you will ever need.</p>
            <ul className="socials">
                <li><a href="https://www.facebook.com/profile.php?id=100076529737042"><Facebook/></a></li>
                <li><NavLink to="/contact"><Whatsapp/></NavLink></li>
                <li><a href="https://www.instagram.com/rand_mont_official"><Instagram/></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy;2022 <a href="/">Rand Mont</a>  </p>
        </div>

    </footer>
    </FooterStyled>
    )
}

const FooterStyled = styled.div`
    footer{
    position: absolute;
    background: #111;
    height: auto;
    width: 100%;
    overflow: hidden;
    padding-top: 40px;
    color: #fff;
    }
    .footer-content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
    .footer-content h3{
        font-size: 2.1rem;
        font-weight: 500;
        text-transform: capitalize;
        line-height: 3rem;
    }
    .footer-content p{
        max-width: 500px;
        margin: 10px auto;
        line-height: 28px;
        font-size: 14px;
        color: #cacdd2;
    }
    .socials{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem 0 3rem 0;
    }
    .socials li{
        margin: 0 10px;
    }
    .socials a{
        text-decoration: none;
        color: #fff;
        padding: 5px;
        transition: all .5s ease-in-out;
        opacity: .2;
        font-size: 1.8rem;
    }
    .socials a:hover{
        color: var(--purple-color);
        opacity: 1;
    }


    .footer-bottom{
        background: #000;
        width: 100vw;
        padding: 20px;
    padding-bottom: 40px;
        text-align: center;
    }
    .footer-bottom p{
    float: left;
        font-size: 14px;
        word-spacing: 2px;
        text-transform: capitalize;
    }
    .footer-bottom p a{
    color:#44bae8;
    font-size: 16px;
    text-decoration: none;
    }
    .footer-bottom span{
        text-transform: uppercase;
        opacity: .4;
        font-weight: 200;
    }
    .footer-menu{
    float: right;

    }
    .footer-menu ul{
    display: flex;
    }
    .footer-menu ul li{
    padding-right: 10px;
    display: block;
    }
    .footer-menu ul li a{
    color: #cfd2d6;
    text-decoration: none;
    }
    .footer-menu ul li a:hover{
    color: var(--purple-color);
    }
        
    @media (max-width:500px) {
    .footer-menu ul{
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
    }
    }
`

export default Footer