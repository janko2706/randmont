import React, { Component } from 'react';
import KolicinaProzora from './renovationFormSteps/KolicinaProzora';
import StaraStolarija from './renovationFormSteps/StaraStolatija';


export default class RenovationForm extends Component {
    state = {
        step: 1,
        staraStolarija: '',
        kolicinaProzora: '',
        velicinaProzora: '',
        novaStolatija: '',
        rolete: false,
        ulaznaVrata: false,
        vrstaPosjeda: '',
        tipUsluge: '',
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }
    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render(){
        const { step } = this.state;
        const { staraStolarija, kolicinaProzora, velicinaProzora, novaStolatija, rolete, ulaznaVrata, vrstaPosjeda,  tipUsluge} = this.state;
        const values = { staraStolarija, kolicinaProzora, velicinaProzora, novaStolatija, rolete, ulaznaVrata, vrstaPosjeda,  tipUsluge};
        switch(step){
            case 1:
                return(
                    <StaraStolarija
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={values}
                    />
                )
            case 2:
                return(
                    <KolicinaProzora
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        previousStep={this.prevStep}
                        values={values}
                    />
                )
            case 3:
                return(
                    <div>step 3</div>
                )    
            default:
                //do nothing 
    }
    }
}

