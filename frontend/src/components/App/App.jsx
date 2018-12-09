// React core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Login, Card, GameInfo, PlayerInfo, GameMat, Game, Header, BetTable } from 'components';
import DiceBoard from 'components/DiceBoard/DiceBoard.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
          <div className="dice_board">
            <DiceBoard />
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
