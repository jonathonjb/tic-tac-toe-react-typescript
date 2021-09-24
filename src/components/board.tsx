import React from 'react';
import Square from './square';

type BoardProps = {
    squares: Array<string | null>,
    onClick: (i: number) => void
}

function Board(props: BoardProps) {
    function renderSquare(i: number): React.ReactNode {
        return <Square
            value={props.squares[i]}
            onClick={() => props.onClick(i)}
        />;
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board