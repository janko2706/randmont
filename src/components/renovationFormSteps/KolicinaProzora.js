import React from 'react';
import styled from 'styled-components';

const KolicinaProzora = ({ previousStep, nextStep, handleChange, values }) => {
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const Previous = e => {
        e.preventDefault();
        previousStep();
    }
    const submitThis = () => {
        console.log(values);
    }
    return (
        <KolicinaProzoraStyled>
            <h1 className='text-center' style={{backdropFilter: 'blur(10px)'}}>Help us give you a better estimate!</h1>
            <h3 className='optionsQuestion text-center'>How many windows should we expect?</h3>

            <form > 

                <div className='staraStolarijaOption'>
                    <input type='radio' value='0-10' id='0-10' name='staraStolarija' onChange={handleChange('kolicinaProzora')} defaultValue={values.staraStolarija}/>
                        <label htmlFor='0-10'>
                            <div style={{fontSize: '3rem'}}> 0-10</div>
                        </label>
                </div>
                <div className='staraStolarijaOption'>
                    <input type='radio' value='20-10' id='20-10' name='staraStolarija' onChange={handleChange('kolicinaProzora')} defaultValue={values.staraStolarija}/>
                        <label htmlFor='20-10'>
                            <div style={{fontSize: '3rem'}}> 20-10</div>
                        </label>
                </div>
                <div className='staraStolarijaOption'>
                    <input type='radio' value='20+' id='20+' name='staraStolarija' onChange={handleChange('kolicinaProzora')} defaultValue={values.staraStolarija}/>
                        <label htmlFor='20+'>
                            <div style={{fontSize: '3rem'}}> 20+</div>
                        </label>
                </div>
                <div className='stepsBtnCont'>
                    <input onClick={ Previous } className='btn-75' value='prev' type='button'/>
                    <input onClick={ Continue } className='btn-75' value='next' type='button'/>
                    <input onClick={submitThis} className='btn-75' value='submit' type='button'/>
                </div>
            </form>
        </KolicinaProzoraStyled>
    )
}
const KolicinaProzoraStyled = styled.div`
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
        padding: 1rem 2rem;
        position: relative;
        text-transform: uppercase;
    }
    .btn-75:active {
    transform: translateY(3px);
    }
`

export default KolicinaProzora

