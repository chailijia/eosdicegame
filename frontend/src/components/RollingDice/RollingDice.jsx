import React, { Component } from 'react';
import './RollingDice.css';

class DiceRoller extends React.Component{
    constructor(props)
    {
        super(props);
        
        this.state = {
            numberOfDices: (props.numberOfDices? props.numberOfDices:1),
            time2dice: (props.time2dice? props.time2dice:"5s"), // time to start dicing-5s

            dice1value: (props.dice1value? this.diceValueMapping(props.dice1value):"-45px -45px"),
            dice2value:(props.dice2value? this.diceValueMapping(props.dice2value):"-45px -45px"),
            dice3value:(props.dice3value? this.diceValueMapping(props.dice3value):"-45px -45px"), 

            dice1timer: (props.dice1timer? props.dice1timer:"1s"),  // stop dicing after 1s
            dice2timer: (props.dice2timer? props.dice2timer:"1s"),  
            dice3timer: (props.dice3timer? props.dice3timer:"1s"), 

            countDown: (props.countDown? props.countDown:false)  // stop counting by default in ms, for enable/disable the counting
        };

        this.timer = 0; // to contain the value return from setInterval function
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);

    }
    componentDidMount() {
        this.startTimer();
      }

    startTimer() {
        if (this.timer == 0 && this.state.time2dice > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.time2dice - 1;
        this.setState({
          time2dice: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
          clearInterval(this.timer);
        }
      }
      
    diceValueMapping(props){
          switch (props)
          {
            case 1: 
            return "-145px -264px";
            break;

            case 2: 
            return "-432px -264px";
            break;

            case 3: 
            return "-711px -268px";
            break;

            case 4: 
            return "-994px -270px";
            break;

            case 5: 
            return "-1289px -268px";
            break;

            case 6: 
            return "-1571px -268px";
            break;

            default:
            return "-145px -264px";
        }

      }


    render(){
       
        return (
            <div>

                {(this.state.countDown & (!this.state.time2dice) )? 
                    <Start2Dice 
                                time2dice ={this.state.time2dice} 
                                numberOfDices = {this.state.numberOfDices}

                                dice1timer = {this.state.dice1timer} 
                                dice1value ={this.state.dice1value} 
                                
                                dice2timer = {this.state.dice2timer} 
                                dice2value ={this.state.dice2value} 

                                dice3timer = {this.state.dice3timer} 
                                dice3value ={this.state.dice3value} 

                    />
                    :null
                }
            </div>
        );
    }
}

const Start2Dice = (props) => {
    if(props.numberOfDices == 1)
    {
        return (
            <div>
                <div class="goto_dice1" 
                style={{animationDuration: props.time2dice, 
                webkitAnimationDuration: props.dice1timer, 
                backgroundPosition: props.dice1value}}  >
                </div> 
            </div>);
    }
    else if (props.numberOfDices ==2)
    {
        return (
            <div>
                <div class="goto_dice1" 
                style={{animationDuration: props.time2dice, 
                webkitAnimationDuration: props.dice1timer, 
                backgroundPosition: props.dice1value}}  >
                </div> 
                <div class="goto_dice2"
                                style={{animationDuration: props.time2dice, 
                                    webkitAnimationDuration: props.dice2timer, 
                                    backgroundPosition: props.dice2value}}  
                >
                </div>
            </div>);
    }
    else if (props.numberOfDices == 3)
    {
        return (
            <div>
                <div class="goto_dice1" 
                style={{animationDuration: props.time2dice, 
                        webkitAnimationDuration: props.dice1timer, 
                        backgroundPosition: props.dice1value}}  >
                </div> 
                <div class="goto_dice2"
                                                style={{animationDuration: props.time2dice, 
                                                    webkitAnimationDuration: props.dice2timer, 
                                                    backgroundPosition: props.dice2value}}  
                >
                </div>
                <div class="goto_dice3"
                                                style={{animationDuration: props.time2dice, 
                                                    webkitAnimationDuration: props.dice3timer, 
                                                    backgroundPosition: props.dice3value}}  
                >
                </div> 
            </div>);
    }
    else
    {
        return (
            <div>
                <div class="goto_dice1" style={{animationDuration: props.time2dice, webkitAnimationDuration: props.dice1timer, backgroundPosition: props.dice1value}}  >
                </div> 
            </div>);
    }


    
}

export default DiceRoller;