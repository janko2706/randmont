import React, { Component } from 'react';
import KolicinaProzora from './renovationFormSteps/KolicinaProzora';
import VelicinaProzora from './renovationFormSteps/VelicinaProzora';
import NovaStolarija from './renovationFormSteps/NovaStolarija'
import RoleteRenovation from './renovationFormSteps/RoleteRenovation';
import UlaznaVrata from './renovationFormSteps/UlaznaVrata';
import VrstaPosjeda from './renovationFormSteps/VrstaPosjeda';
import TipUsluge from './renovationFormSteps/TipUsluge';
import ConsfirmationAndSend from './renovationFormSteps/ConfirmationAndSend';


export default class NewConstructionForm extends Component {
    state = {
        step: 1,
        staraStolarija: '',
        kolicinaProzora: '',
        velicinaProzora: '',
        novaStolarija: '',
        rolete: '',
        ulaznaVrata: '',
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
    //TODO write a method to save multipple answers
    // handleCheckBoxChange = input => e => {
    //     if(e.target.checked){
    //         this.setState({ [input]: this.state.staraStolarija[0] = e.target.value});
    //     }else if(!e.target.checked){
    //         this.setState({ [input]: this.state.staraStolarija.cl});
    //     }
    // }

    render(){
        const { step } = this.state;
        const { staraStolarija, kolicinaProzora, velicinaProzora, novaStolarija, rolete, ulaznaVrata, vrstaPosjeda,  tipUsluge} = this.state;
        const values = { staraStolarija, kolicinaProzora, velicinaProzora, novaStolarija, rolete, ulaznaVrata, vrstaPosjeda,  tipUsluge};
        switch(step){
            case 1:
                return(
                    <NovaStolarija
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        previousStep={this.prevStep}
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
                    <VelicinaProzora
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        previousStep={this.prevStep}
                        values={values}
                    />
                )   
            case 4:
                return(
                    <RoleteRenovation
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        previousStep={this.prevStep}
                        values={values}                      
                    />
                ) 
                case 5:
                    return(
                        <UlaznaVrata
                            nextStep={ this.nextStep }
                            handleChange={ this.handleChange }
                            previousStep={this.prevStep}
                            values={values}                      
                        />
                    )
                case 6:
                    return(
                        <VrstaPosjeda
                            nextStep={ this.nextStep }
                            handleChange={ this.handleChange }
                            previousStep={this.prevStep}
                            values={values}                      
                        />
                    )
                case 7:
                    return(
                        <TipUsluge
                            nextStep={ this.nextStep }
                            handleChange={ this.handleChange }
                            previousStep={this.prevStep}
                            values={values}                      
                        />
                    )
                case 8:
                    return(
                        <ConsfirmationAndSend
                            previousStep={this.prevStep}
                            values={values}                      
                        />
                    )
            default:
                //do nothing 
    }
    }
}

