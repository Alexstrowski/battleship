import { useState } from 'react';
import PropTypes from 'prop-types';
import { SVG } from 'assets/svg';

const BoardCell = ({ row, column, isShip, isGameStarted, setTurnCounter, setBoardHistory }) => {
    const [selected, isSelected] = useState(false);

    const onClick = () => {
        console.log(row, column);
        if (isGameStarted) {
            isSelected(true);
            if (!selected) {
                setTurnCounter((prevTurn) => prevTurn - 1);
                setBoardHistory((prevBoardHistory) => [...prevBoardHistory, { x: row, y: column, isShip }]);
            }
        }
    };

    return (
        <div
            className="md:h-20 md:w-20 h-10 w-10 md:p-4 bg-white border-white border-2 mr-1 mb-1 rounded-md cursor-pointer"
            onClick={onClick}
        >
            {!selected ? (
                ''
            ) : selected && isShip ? (
                <div className="w-full h-full">
                    {' '}
                    <img src={SVG.explosion}></img>
                </div>
            ) : (
                <div className="bg-gray-300 w-full h-full"></div>
            )}
        </div>
    );
};

export default BoardCell;

BoardCell.propTypes = {
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    isShip: PropTypes.bool.isRequired,
    isGameStarted: PropTypes.bool.isRequired,
    setTurnCounter: PropTypes.func.isRequired,
    setBoardHistory: PropTypes.func.isRequired,
};
