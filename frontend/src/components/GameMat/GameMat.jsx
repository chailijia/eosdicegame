import React, { Component } from 'react';
// Game subcomponents
import { PlayerInfo, HandCards } from '../';

class GameMat extends Component {
  render() {
    // Extract data and event functions from props
    const { className, deckCardCount,
            aiLife, aiHandCards, aiName,
            playerLife, playerHandCards, playerName,
            onPlayCard } = this.props;

    // Display the GameMat as a table with 2 rows
    // The 1st row is AI (`PlayerInfo`, Deck card, `HandCards`)
    // The 2nd row is Player (`PlayerInfo`, Deck card, `HandCards`)
    return (
      <table className={`GameMat`}>
        <tbody>

          <tr>
            <td className="mat mat-player">

              <PlayerInfo
                className="mat mat-ai"
                name={ aiName }
                life={ aiLife }
              />

              <div className={`deck ai remain${2}`}>
              </div>

              <HandCards
                className="ai"
              />

            </td>
          </tr>


          <tr>
            <td className="mat mat-player">
              <PlayerInfo
                className="player"
                name={ playerName }
                life={ playerLife }
              />
              <div className={`deck player remain${2}`}>
              </div>
              <HandCards
                className="player"
                cards={ playerHandCards }
                // onPlayCard={ onPlayCard }
              />
            </td>
          </tr>



        </tbody>
      </table>
    )
  }
}

export default GameMat;
