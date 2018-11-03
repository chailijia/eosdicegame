// React core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Login, Card, GameInfo, PlayerInfo, GameMat } from 'components';



class App extends Component {

  render() {
    return (
      <div className="App">


        <GameMat
          deckCardCount={2}
          aiLife={1}
          aiHandCards={2}
          aiName="TAM"
          playerLife={1}
          playerHandCards={2}
          playerName={"QUOC"}
          onPlayCard={1}
        />

        <GameInfo />




























      </div>
    );
  }

}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Export a redux connected component
export default connect(mapStateToProps)(App);
