// React core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Game subcomponents
import { GameInfo, GameMat } from 'components';
// Services and redux action
import { UserAction } from 'actions';

class Game extends Component {

  constructor(props) {
    // Inherit constructor
    super(props);
    // State for showing/hiding components when the API (blockchain) request is loading
    this.state = {
      loading: true,
    };

  }


  render() {
    // Extract data from state and user data of `UserReducer` from redux
    return (
      <section className="Game">
        {
          <div className="container">
            {/* <GameMat
              deckCardCount={2}
              aiLife={1}
              aiHandCards={2}
              aiName="TAM"
              playerLife={1}
              playerHandCards={2}
              playerName={"QUOC"}
              onPlayCard={1}
            /> */}

            {/* <GameInfo /> */}
            hoashflhaslfh klashfklah 
           </div>           
        }

      </section>
    )
  }

}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
  setUser: UserAction.setUser,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(Game);
