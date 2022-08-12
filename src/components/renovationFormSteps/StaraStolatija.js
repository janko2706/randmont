import React from 'react'
import styled from 'styled-components';
import woodIcon from '../../svgs/wood.png';
import aluminumIcon from '../../svgs/aluminiumPng.png';
import pvcIcon from '../../svgs/pvc.png'

const StaraStolarija = ({ nextStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }


    return (
        <StaraStolarijaStyled>
            <h1 className='text-center' style={{backdropFilter: 'blur(10px)'}}>Help us give you a better estimate!</h1>
            <h3 className='optionsQuestion text-center'>What are we replacing?</h3>

            <form> 

                <div className='staraStolarijaOption'>
                    <input type='checkbox' value='PVC' id='PVC' name='staraStolarija' onChange={handleChange('staraStolarija')} />
                        <label htmlFor='PVC'>
                            <div> PVC</div>
                            <img className='startaStolarijaImages' src={pvcIcon} alt='PVC'/>
                        </label>
                </div>
                <div className='staraStolarijaOption'>
                    <input type='checkbox' value='wood' id='wood' name='staraStolarija' onChange={handleChange('staraStolarija')} />
                        <label htmlFor='wood'>
                            <div> WOOD</div>
                            <img className='startaStolarijaImages' src={woodIcon} alt='wood'/>
                        </label>
                </div>
                <div className='staraStolarijaOption'>
                    <input type='checkbox' value='aluminium' id='aluminium' name='staraStolarija' onChange={handleChange('staraStolarija')} />
                        <label htmlFor='aluminium'>
                            <div> ALUMINIUM</div>
                            <img className='startaStolarijaImages' src={aluminumIcon} alt='aluminium'/>
                        </label>
                </div>
                <div className='stepsBtnCont'>
                    <input onClick={ Continue } className='btn-75' value='next' type='button'/>
                </div>
            </form>
        </StaraStolarijaStyled>
    )
}

const StaraStolarijaStyled = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    .optionsQuestion{
        padding: 10px;
        font-weight: bold;
        background: var(--darker-blue-color);
    }
    form{
        display: block;
        padding-top: 20px;
        text-align: center;
        background-color: var(--darker-blue-color);
    }
    form input {
        display: none;
    }
    form label::before {
        background-color: white;
        color: white;
        content: " ";
        display: block;
        border-radius: 50%;
        border: 1px solid grey;
        position: absolute;
        top: -5px;
        left: -5px;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 28px;
        transition-duration: 0.4s;
        transform: scale(0);
    }
    form label{
        border: 1px solid transparent;
        padding: 10px;
        display: block;
        position: relative;
        margin: 10px;
        cursor: pointer;
    }

    form label:hover{
        border-color: var(--purple-color);
    }

    form :checked + label {
        border: 2px solid var(--purple-color);
    }

    form :checked + label:before {
    content: "✓";
        background-color: var(--purple-color);
        transform: scale(1);
    }

    form :checked + label img {
        transform: scale(0.9);
        z-index: -1;
    }
    .staraStolarijaOption{
        display: inline-block;
        height: 287px;
        margin-bottom: 35px;
        max-width: 100%;
        padding: 0 15px;
        position: relative;
        vertical-align: middle;
        width: 208px;
    }
    .startaStolarijaImages{
        display: block;
        height: 190px;
        max-height: none;
        max-width: none;
        object-fit: contain;
        width: 150px;
    }
    .stepsBtnCont{
        padding: 15px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        text-align: center;
    }
    .btn-75 {
        -webkit-tap-highlight-color: transparent;
        -webkit-appearance: button;
        background-color: #000;
        background-image: none;
        color: #fff;
        cursor: pointer;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
            Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        font-size: 100%;
        line-height: 1.5;
        margin: 0;
        mask-image: -webkit-radial-gradient(#000, #fff);
        padding: 0;
    }
    .btn-75 {
        background: #e0e5ec;
        border-radius: 999px;
        box-shadow: inset 2px 2px 2px 0 hsla(0, 0%, 100%, 0.5),
            7px 7px 20px 0 rgba(0, 0, 0, 0.1), 4px 4px 5px 0 rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        color: #000;
        display: block;
        font-weight: 900;
        overflow: hidden;
        padding: 1.2rem 3rem;
        position: relative;
        text-transform: uppercase;
    }
    .btn-75:active {
    transform: translateY(3px);
    }
`



export default StaraStolarija