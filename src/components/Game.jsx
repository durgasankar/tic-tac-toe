import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './Utils';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(false);

    const winner = calculateWinner(board);

    const handleClick = (e) => {
        console.log("Square clicked:", e.target);
    };

    const jumpTo = () => {

    }
    const renderMoves = () => {

    }

    return (
        <Board
            squares={board}
            onClick={handleClick}
        />
    )
}

export default Game