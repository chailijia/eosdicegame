// React core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Header, BetTable, RollingDice } from 'components';
import DiceBoard from 'components/DiceBoard/DiceBoard.jsx';

class App extends Component {

  render() {
    const dice = {
      countDown: true,
      time2dice: 1,
      numberOfDices:3,

      dice1timer:"1s",
      dice1value: 1,

      dice2timer:"1s",
      dice2value: 3,

      dice3timer:"1s",
      dice3value: 4
    };

    return (
      <div className="App">
        <Header />
        <div className="dice_board">
        <div className="dice_board_center">
            <DiceBoard />
            </div>
            <RollingDice {...dice}/>
        </div>        
        <div className="dice_table">
          <BetTable />
        </div>
      </div>
    );
  }

}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Export a redux connected component
export default connect(mapStateToProps)(App);
