import React, { useState } from "react";
import Board from './board';

// helper function (Given to us by the React tutorial, modified to handle typescript)
function calculateWinner(squares: Array<string | null>): string | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Game() {
    const [history, setHistory] = useState(
        [{ squares: Array(9).fill(null) }] as Array<{ squares: Array<string | null> }>
    )
    const [stepNumber, setStepNumber] = useState(0 as number);
    const [xIsNext, setXIsNext] = useState(true as boolean);

    function handleClick(i: number): void {
        const currHistory = history.slice(0, stepNumber + 1);
        const current = currHistory[currHistory.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(currHistory.concat([{
            squares: squares
        }]));
        setStepNumber(currHistory.length);
        setXIsNext(!xIsNext);
    }

    function jumpTo(step: number): void {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    const currHistory = history;
    const current = currHistory[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = currHistory.map((step, move) => {
        const description = move ? 'Go to move #' + move : 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    }
    else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game