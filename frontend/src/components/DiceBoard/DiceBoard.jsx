
import React from 'react';

import Dice from 'components/Dice/Dice.jsx'
import './DiceBoard.css';

class DiceBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(30).fill(null),
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({ squares: squares });
    }

    renderSquare(i, type, value, rate) {
        return (
            <Dice
                type={type}
                value={value}
                rate={rate}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {

        return (
            <div className="DiceBoard">
                <div className="DiceBoardRow1">
                    <div className="board-row">
                        <div className="group1">
                            {this.renderSquare(0, 3, 1, 150)}
                        </div>
                        <div className="group1">
                            {this.renderSquare(1, 3, 2, 150)}
                        </div>
                        <div className="group1">
                            {this.renderSquare(2, 3, 3, 150)}
                        </div>
                        <div className="ThreeDice">
                        </div>
                        <div className="group1">
                            {this.renderSquare(3, 3, 4, 150)}
                        </div>
                        <div className="group1">
                            {this.renderSquare(4, 3, 5, 150)}
                        </div>
                        <div className="group1">
                            {this.renderSquare(5, 3, 6, 150)}
                        </div>
                    </div>
                </div>
                <div className="DiceBoardRow2">
                        <div className="DiceBoardRow2Col">
                            {this.renderSquare(26, 4, 0, 1)}
                        </div>
                        <div className="DiceBoardRow2ColMid">
                            <div className="board-row2">
                                <div className="group2">
                                    {this.renderSquare(6, 2, 4, 6)}
                                </div>
                                <div className="group2">
                                    {this.renderSquare(7, 2, 5, 6)}
                                </div>
                                <div className="group2">
                                    {this.renderSquare(8, 2, 6, 6)}
                                </div>
                                <div className="group2">
                                    {this.renderSquare(9, 2, 7, 6)}
                                </div>
                                <div className="group2">
                                    {this.renderSquare(10, 2, 8, 6)}
                                </div>
                                <div className="group2">
                                    {this.renderSquare(11, 2, 9, 6)}
                                </div>
                                <div className="group2">
                                    {this.renderSquare(12, 2, 10, 6)}
                                </div>
                            </div>
                            <div className="board-row3">
                                <div className="group2">
                                    {this.renderSquare(13, 2, 11, 6)}
                                </div>
                                <div className="group2">
                                    {this.renderSquare(14, 2, 12, 6)}
                                </div>
                                <div className="group2">
                                    {this.renderSquare(15, 2, 13, 6)}
                                </div>
                                <div className="group2">
                                    {this.renderSquare(16, 2, 14, 6)}
                                </div>
                                <div className="group2">
                                    {this.renderSquare(17, 2, 15, 6)}
                                </div>
                                <div className="group2">
                                    {this.renderSquare(18, 2, 16, 6)}
                                </div>
                                <div className="group2">
                                    {this.renderSquare(19, 2, 17, 6)}
                                </div>
                            </div>
                        </div>
                        <div className="DiceBoardRow2Col">
                            {this.renderSquare(27, 4, 1, 1)}
                        </div>
                </div>
                <div className="DiceBoardRow3">
                        <div className="group4">
                            {this.renderSquare(20, 1, 1, 6)}
                        </div>
                        <div className="group4">
                            {this.renderSquare(21, 1, 2, 6)}
                        </div>
                        <div className="group4">
                            {this.renderSquare(22, 1, 3, 6)}
                        </div>
                        <div className="group4">
                            {this.renderSquare(23, 1, 4, 6)}
                        </div>
                        <div className="group4">
                            {this.renderSquare(24, 1, 5, 6)}
                        </div>
                        <div className="group4">
                            {this.renderSquare(25, 1, 6, 6)}
                        </div>
                </div>
            </div>
        );
    }
}

export default DiceBoard;
