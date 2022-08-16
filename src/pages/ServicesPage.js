import React from 'react';
import styled from 'styled-components';
import newConstructionImage from '../svgs/newConstructionImae.png';
import renovationImage from '../svgs/renovationImage.png';
import bigProjectsImage from '../svgs/bigProjectsImage.png';
import servicesBg from '../images/slider-services-background.jpg'

function ServicesPage() {

    return (
        <ServicesPageStyled>
            <div className='container-fluid mx-auto mt-5 mb-5 col-12 text-center'>
                <div className="hd">Our services</div>
                <p><small className="text-muted">Create Your Dream Home. Tell Us About Your Project Today.</small></p>
                <div className="row" style={{justifyContent: 'center'}}>
                    <div className="card col-md-3 col-12 m-2 servicesBG">
                        <div className="card-content servicesBGBlur">
                            <div className="card-body"> <img className="img" src={newConstructionImage} alt='New Construction'/>
                                <div className="shadow"></div>
                                <div className="card-title"> New Construction </div>
                                <div className="card-subtitle">
                                    <p> 
                                        <small className="text-white pb-5">Let's Make Your Dream Home A Reality.</small> 
                                        <ul>
                                            <li> On-Site Consultations</li>
                                            <li> Preconstruction Mesurmants</li>
                                            <li> Installation</li>
                                        </ul>
                                    </p>
                                </div>
                                <a href='/newConstructionForm' className="btn btn-primary">Free estimate</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3 col-12 ml-2 m-2 servicesBG">
                        <div className="card-content servicesBGBlur">
                            <div className="card-body"> <img className="img" src={renovationImage} alt='renovation'/>
                                <div className="card-title"> Renovation </div>
                                <div className="card-subtitle">
                                    <p> 
                                        <small className="text-white pb-5"> Let's Give Your Home A Fresh Look. </small>  
                                        <ul>
                                            <li> On-Site Consultations</li>
                                            <li> Preconstruction Mesurmants</li>
                                            <li> Restauiration</li>
                                        </ul>
                                    </p>
                                </div>
                                <a href='/renovationForm' className="btn btn-primary">Free estimate</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3 col-12 ml-2 m-2 servicesBG">
                        <div className="card-content servicesBGBlur">
                            <div className="card-body"> <img className="img rck" src={bigProjectsImage} alt='Big Projects' />
                                <div className="card-title"> Big Projects </div>
                                <div className="card-subtitle">
                                    <p> 
                                        <small className="pb-5 text-white">Even When It Comes To Big Projects, We Put Our Heart And Soul In Every Scheme.</small> 
                                        <ul>
                                            <li> Meeting</li>
                                            <li> Project planning</li>
                                            <li> Assembling</li>
                                        </ul>
                                    </p>
                                </div>
                                <a href='/contact' className="btn btn-primary">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft">
                    <p className="chk"><small className="text-muted">Still not sure?</small></p>
                    <a href='/contact' className="btn btn-primary">Contact us with any questions.</a>
                </div>
            </div>
        </ServicesPageStyled>
    )
}

const ServicesPageStyled = styled.div`
    .servicesBGBlur{
        background: rgba(179, 207, 242, .9);
        border-radius: 20px;
        transition: all .3s ease-in-out;
    }
    .servicesBGBlur:hover{
        transform: scale(1.05);
    }
    .servicesBG{
        background-image: url('${servicesBg}');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
    .card{
        cursor: pointer
    }
    .hd{
        font-size: 25px;
        font-weight: 550
    }
    .card.hover, .card:hover{
        box-shadow: 0 20px 40px rgba(0, 0, 0, .2)
    }
    .img{
        margin-bottom: 35px;
    }
    .card-title{
        font-weight: bold;
        margin-bottom: 20px;
    }
    button.focus, button:focus{
        outline: 0;
        box-shadow: none !important
    }
    .ft{
        margin-top: 25px
    }
    .chk{
        margin-bottom: 5px
    }
    .rck{
        margin-top: 20px;
        padding-bottom: 15px
    }
`

export default ServicesPage