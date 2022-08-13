import React from 'react';
import styled from 'styled-components';

const RoleteRenovation = ({ previousStep, nextStep, handleChange, values }) => {
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const Previous = e => {
        e.preventDefault();
        previousStep();
    }

    return ( 
        <RoleteRenovationStyled>
            <h1 className='text-center' style={{backdropFilter: 'blur(10px)'}}>Help us give you a better estimate!</h1>
            <h3 className='optionsQuestion text-center'>Will you need blinds?</h3>

            <form > 

                <div className='staraStolarijaOption'>
                    <input type='radio' value='No' id='No' name='rolete' onChange={handleChange('rolete')} />
                        <label htmlFor='No'>
                            <div style={{fontSize: '3rem'}}> No</div>
                        </label>
                </div>
                <div className='staraStolarijaOption'>
                    <input type='radio' value='Yes' id='Yes' name='rolete' onChange={handleChange('rolete')} />
                        <label htmlFor='Yes'>
                            <div style={{fontSize: '3rem'}}> Yes</div>
                        </label>
                </div>
                <div className='stepsBtnCont'>
                    <input onClick={ Previous } className='btn-75' value='prev' type='button'/>
                    <input onClick={ Continue } className='btn-75' value='next' type='button'/>
                </div>
            </form>
        </RoleteRenovationStyled>
    )
}
const RoleteRenovationStyled = styled.div`
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
        justify-content: space-around;
        box-sizing: border-box;
        text-align: center;
    }
    .btn-75 {
        -webkit-tap-highlight-color: transparent;
        -webkit-appearance: button;
        cursor: pointer;
        font-family: ui-sans-serif;
        font-size: 100%;
        line-height: 1.5;
        margin: 0;
    }
    .btn-75 {
        background: var(--light-blue-color);
        border-radius: 999px;
        box-sizing: border-box;
        color: #000;
        display: block;
        font-weight: 900;
        overflow: hidden;
        padding: 1rem 2rem;
        position: relative;
        text-transform: uppercase;
    }
    .btn-75:active {
    transform: translateY(3px);
    }
`

export default RoleteRenovation

