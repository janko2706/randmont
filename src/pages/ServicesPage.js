import React from 'react';
import styled from 'styled-components';

function ServicesPage() {

    return (
        <ServicesPageStyled>
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin  uk-grid">
                <div className="uk-card-media-left uk-cover-container">
                    <img src="https://getuikit.com/docs/images/light.jpg" alt="" className='uk-cover'/>
                </div>
                <div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">Media Left</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </div>

            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin  uk-grid">
                <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                    <img src="https://getuikit.com/docs/images/light.jpg" alt="" className="uk-cover"/>
                </div>
                <div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">Media Right</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </div>
        </ServicesPageStyled>
    )
}

const ServicesPageStyled = styled.div`

`

export default ServicesPage