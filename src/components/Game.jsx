import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './Utils';

const DEFAULT_BOARD = Array(9).fill(null);

const Game = () => {

    const [board, setBoard] = useState(DEFAULT_BOARD);
    const [xIsNext, setXisNext] = useState(false);

    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) {
            return;
        }
        boardCopy[index] = xIsNext ? 'X' : '0';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    };

    const jumpTo = () => {

    }
    const renderMoves = () => (
        <button onClick={() => setBoard(DEFAULT_BOARD)}>
            Start Game
        </button>);

    return (
        <>
            <Board
                squares={board}
                onClick={handleClick}
            />
            <p>
                {
                    winner 
                        ? <span className='red-winner'>{'winner: ' + winner}</span>
                        : 'Next player: ' + (
                            xIsNext
                                ? 'X'
                                : '0'
                        )
                }
            </p>
            {renderMoves()}
        </>
    )
}

export default Game