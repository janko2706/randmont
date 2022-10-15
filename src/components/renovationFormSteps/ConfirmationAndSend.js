import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
// import emailjs from '@emailjs/browser';

const ConsfirmationAndSend = ({ previousStep, values }) => {
    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out to us, we will get back to you as soon as possible.')
        //TODO make the form send the correct data
        // e.preventDefault();

        emailjs.sendForm('service_m95ylw8', 'template_jbuvfx8', form.current, 'x_calcMnm30KLUlCI')
            .then((result) => {
                console.log(result.text);
                navigate("/")
            }, (error) => {
                console.log(error.text);
            });
    };
    const Previous = e => {
        e.preventDefault();
        previousStep();
    }

    return ( 
        <ConsfirmationAndSendStyled>
            <h3 className='optionsQuestion text-center mt-3'>Thank you for your cooperation.</h3>
            <div className="container">
                <div className="wrapper">

                {/* <!-- COMPANY INFORMATION --> */}
                <div className="company-info">
                    <ul>
                    <li>Your choices will be forwarded in the email.</li>
                    </ul>
                </div>
                {/* <!-- End .company-info --> */}

                {/* <!-- CONTACT FORM --> */}
                <div className="contact">
                    <form ref={form} id="contact-form" onSubmit={sendEmail}>

                        <p>
                            <label>Name</label>
                            <input type="text" name="from_name" id="from_name" required/>
                        </p>

                        <p>
                            <label data-toggle="tooltip" data-placement="top" title="NOT REQUIRED">Company</label>
                            <input type="text" name="from_company" id="from_company" placeholder='Not Required'/>
                        </p>

                        <p>
                            <label>E-mail Address</label>
                            <input type="email" name="from_email" id="from_email" required/>
                        </p>

                        <p>
                            <label>Phone Number</label>
                            <input type="text" name="phone_number" id="phone_number"/>
                        </p>
                        <p className='d-none'>
                            <input type="text" name="kolicina_prozora" id="kolicina_prozora" defaultValue={values.kolicinaProzora}/>
                            <input type="text" name="nova_stolarija" id="nova_stolarija" defaultValue={values.novaStolarija}/>
                            <input type="text" name="rolete" id="rolete" defaultValue={values.rolete}/>
                            <input type="text" name="stara_stolarija" id="stara_stolarija" defaultValue={values.staraStolarija}/>
                            <input type="text" name="tip_usluge" id="tip_usluge" defaultValue={values.tipUsluge}/>
                            <input type="text" name="ulazna_vrata" id="ulazna_vrata" defaultValue={values.ulaznaVrata}/>
                            <input type="text" name="velicina_prozora" id="velicina_prozora" defaultValue={values.velicinaProzora}/>
                            <input type="text" name="vrsta_posjeda" id="vrsta_posjeda" defaultValue={values.vrstaPosjeda}/>
                        </p>

                        <p className="full">
                            <label>Message</label>
                            <textarea name="message" rows="5" id="message" required></textarea>
                        </p>
                        <div className='stepsBtnCont'>
                            <input className='btn-75' value='submit' type='submit'/>
                            <input onClick={ Previous } className='btn-75' value='prev' type='button'/>
                        </div>
                    </form>
                    {/* <!-- End #contact-form --> */}
                </div>
                {/* <!-- End .contact --> */}

                </div>
                {/* <!-- End .wrapper --> */}
            </div>

        </ConsfirmationAndSendStyled>
    )
}
const ConsfirmationAndSendStyled = styled.div`
    .container {
        max-width: 1170px;
        margin-left: auto;
        margin-right: auto;
        padding: 1em;
    }

    ul {
    list-style: none;
    padding: 0;
    }
    ul li {
    margin-top: 1em;
    }

    .wrapper > * {
    padding: 1em;
    }

    /* ------------------- */
    /* COMPANY INFORMATION */
    /* ------------------- */

    .company-info {
    background: var(--darker-blue-color);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    }

    .company-info h3,
    .company-info ul {
    text-align: center;
    margin: 0 0 1rem 0;
    }

    /* ------- */
    /* CONTACT */
    /* ------- */

    .contact {
    background: #dcdfea;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    }

    /* ---- */
    /* FORM */
    /* ---- */

    .contact form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    }

    .contact form label {
    display: block;
    }

    .contact form p {
    margin: 0;
    }

    .contact form .full {
    grid-column: 1 / 3;
    }

    .contact form button,
    .contact form input,
    .contact form textarea {
    width: 100%;
    padding: 1em;
    border: solid 1px #627EDC;
    border-radius: 4px;
    }

    .contact form textarea {
    resize: none;
    }

    .contact form button {
    background: #627EDC;
    border: 0;
    color: #e4e4e4;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    }

    .contact form button:hover,
    .contact form button:focus {
    background: #3952a3;
    color: #ffffff;
    outline: 0;
    transition: background-color 2s ease-out;
    }

    /* ------------- */
    /* MEDIA QUERIES */
    /* ------------- */

    @media only screen and (min-width: 700px) {
    .wrapper {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .wrapper > * {
        padding: 2em;
    }

    .company-info {
        border-radius: 4px 0 0 4px;
    }

    .contact {
        border-radius: 0 4px 4px 0;
    }

    .company-info h3,
    .company-info ul,
    .brand {
        text-align: left;
    }
    }
    margin-left: 20px;
    margin-right: 20px;
    .optionsQuestion{
        padding: 10px;
        font-weight: bold;
        background: var(--darker-blue-color);
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

export default ConsfirmationAndSend

