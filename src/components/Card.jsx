import React, { Component } from 'react'
import '../myStyles.css';
import Sim from "../sim.png";
import Visa from "../visa.png"
import Mastercard from "../mastercard.png"


export default class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            cardNumer:"****************",
            cardholder:"name",
            validThru:"**/**"
        }
    }
    handleNumberChange=(e)=>{
        let reg = RegExp('^[0-9]+$')
        if(!reg.test(e.target.value[e.target.value.length-1])&&e.target.value.length>0){
            alert("Only numbers are allowed !")
            e.target.value=e.target.value.slice(0,e.target.value.length-1)
            return false
        }
        if(e.target.value.length==0){
            this.setState({
                cardNumer:"****************"
            })
            return false
        }
        let str=e.target.value;
        if(e.target.value.length==4){
            e.target.value+=" "
        }
        if(e.target.value.length==9){
            e.target.value+=" "
        }
        if(e.target.value.length==14){
            e.target.value+=" "
        }
        console.log(str)
        this.setState({
            cardNumer: e.target.value
        })
    }
    handleValidationChange=(e)=>{
        let reg = RegExp('^[0-9]+$')
        if(!reg.test(e.target.value[e.target.value.length-1])){
            alert("Only numbers are allowed !")
            e.target.value=e.target.value.slice(0,e.target.value.length-1)
            return false
        }
        if(e.target.value.length===2){
            this.setState({
                validThru:this.state.validThru+"/"
            })
            e.target.value=e.target.value+"/"
        }
        if(e.target.value.length>2){
            this.setState({
                validThru:e.target.value
            })
        }
        if(e.target.value.length===5){
            let regf= RegExp('^(0?[1-9]|1[012])[\/\-](0?[1-9]\[0-9])$')
            if(!regf.test(e.target.value))
                {
                    alert("invalid date !")
                    e.target.value=""
                    this.setState({
                        validThru:"**/**"
                    })
                    return false
            }
        }
    }
    handleNameChange=(e)=>{
        let reg = RegExp('^[A-Za-z]+$')
        if(!reg.test(e.target.value)&&e.target.value.length>0){
            alert("Only letters are allowed !")
            e.target.value=e.target.value.slice(0,e.target.value.length-1)
            return false
        }
        if(e.target.value.length==0){
            this.setState({
                cardholder:"name"
            })
            return false
        }
        this.setState({
            cardholder: e.target.value
        })
    }
    render() {
        return (
            <div className="card-input">
                <div className="card-body">
                    <h1>Credit Card</h1>
                    <img className="sim" src={Sim} alt="sim"/>
                    <div className="details-logos">
                        <div className="details">
                            <p className="card-number">{this.state.cardNumer}</p>
                            <p className="expiration-date">month/year</p>
                            <div className="pin-validation">
                                <p className="pin">3579</p>
                                <p className="valid-thru">valid <br/>thru</p>
                                <p className="validation">{this.state.validThru}</p>
                            </div>
                            <p className="cardholder">{this.state.cardholder}</p>
                        </div>
                        <div className="logos">
                            <img className="master-img" src={Mastercard} alt="master"/>
                            <img className="visa-img" src={Visa} alt="visa"/>
                        </div>
                    </div>
                </div>
                <div className="input-boxes">
                    <input type="text" placeholder="enter the card number" maxLength='19' onChange={this.handleNumberChange}></input>
                    <input type="text" placeholder="enter the card validation" onChange={this.handleValidationChange} maxLength='5'></input>
                    <input type="text" placeholder="enter the card holder" onChange={this.handleNameChange} max-length='20'></input>
                </div>
            </div>
        )
    }
}