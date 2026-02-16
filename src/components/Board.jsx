import React, { useId } from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
    const { id } = useId();
    return (
        <div className="board">
            {
                squares.map(square => {
                    return (
                        <Square
                            key={id}
                            value={square}
                            onClick={() => onClick(square)}
                        />
                    )
                })
            }
        </div>
    );
};

export default Board;
