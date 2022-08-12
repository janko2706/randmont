import React, { useRef } from 'react'
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import RenovationForm from '../components/RenovationForm';

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m95ylw8', 'template_jbuvfx8', form.current, 'x_calcMnm30KLUlCI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <ContactPageStyled>
      {/* <RenovationForm/> */}
      <div className="container">
    <div className="wrapper">

      {/* <!-- COMPANY INFORMATION --> */}
      <div className="company-info">
        <h3>Rand Mont</h3>
        <ul>
          <li><i className="fa fa-flag"></i>  Munchen, Zagreb</li>
          <li><i className="fa fa-road"></i>  Perkovceva 62, Samobor 10430, Croatia</li>
          <li><i className="fa fa-phone"></i>  Croatian number: +385-99767-5454</li>
          <li><i className="fa fa-phone"></i>  German number: +49-17792-77896</li>
          <li><i className="fa fa-envelope"></i>  info@randmont.com</li>
        </ul>
      </div>
      {/* <!-- End .company-info --> */}

      {/* <!-- CONTACT FORM --> */}
      <div className="contact">
        <h3>E-mail Us</h3>

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

          <p className="full">
            <label>Message</label>
            <textarea name="message" rows="5" id="message" required></textarea>
          </p>

          <p className="full">
            <button type="submit">Submit</button>
          </p>

        </form>
        {/* <!-- End #contact-form --> */}
      </div>
      {/* <!-- End .contact --> */}

    </div>
    {/* <!-- End .wrapper --> */}
  </div>
  {/* <!-- End .container --> */}
        
    </ContactPageStyled>
  )
}

const ContactPageStyled = styled.div`
height: 100vh;
background-image: url('https://upload.wikimedia.org/wikipedia/commons/c/ca/Koebenhavn_Oerstedsparken_2009_ubt.JPG');
background-attachment: fixed;
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
`

export default ContactPage