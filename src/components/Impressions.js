import React from 'react'
import styled from 'styled-components';


function Impressions() {
    return (
        <ImpressionsStyled>
<div className="container">
    <h2 className='text-center md-4 impressionsTitle'>What do our customers say?</h2>
        <div className="row m-5">
            <div className="col-lg-4">
                <div className="card">
                    <div className="face front-face">
                        <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                            alt="" className="profile"/>
                        <div className="pt-3 text-uppercase name">
                            Robert Garral
                        </div>
                        <div className="designation">Home owner</div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                            Pleasant to work with, and get the job done. My recomendations!
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="face front-face">
                        <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            alt="" className="profile"/>
                        <div className="pt-3 text-uppercase name">
                            Jeffery Kennan
                        </div>
                        <div className="designation">Building manager</div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                        ...and for all the wonderful work you and your crew are doing. Good job!
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="face front-face">
                        <img src="https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt="" className="profile"/>
                        <div className="pt-3 text-uppercase name">
                            Issac Maxwell
                        </div>
                        <div className="designation">Finance Director</div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                        Thank you for guiding us through the construction process for accommodating our needs.
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
        </ImpressionsStyled>
    )
}
const ImpressionsStyled = styled.div`
    .container {
    margin-top: 80px;
    overflow: hidden;
}

.container .col-lg-4 {
    display: flex;
    justify-content: center;
}

.card {
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    perspective: 500px;
    border: none;
    background-color: inherit;
}

.card .face {
    position: absolute;
    color: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.06);
    transform-style: preserve-3d;
    transition: 0.5s;
    backface-visibility: hidden;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    /* border-right: 1px solid #999;
border-bottom: 1px solid #999; */
}

.card .face.front-face,
.card .face.back-face {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card .face.front-face .profile {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
}

.card .face.front-face .name {
    letter-spacing: 2px;
}

.card .face.front-face .designation {
    font-size: 0.8rem;
    color: var(--purple-color);
    letter-spacing: 0.8px;
}

.card:hover .face.front-face {
    transform: rotateY(180deg);
}

.card .face.back-face {
    position: absolute;
    background: rgba(255, 255, 255, 0.06);
    transform: rotateY(180deg);
    padding: 20px 30px;
    text-align: center;
    user-select: none;
}

.card .face.back-face .fa-quote-left {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 1.2rem;
}

.card .face.back-face .fa-quote-right {
    position: absolute;
    bottom: 35px;
    right: 25px;
    font-size: 1.2rem;
}

.card:hover .face.back-face {
    transform: rotateY(360deg);
}

@media(max-width: 991.5px) {
    .col-lg-4 {
        margin-bottom: 20px;
        justify-content: flex-start;
        margin-left: 0;
    }
    .card{
        height: 200px;
        width: 200px;
    }
    .impressionsTitle{
        font-size: 1.15rem;
        text-align: left !important;
        padding-left: 5px;
    }
}

`

export default Impressions