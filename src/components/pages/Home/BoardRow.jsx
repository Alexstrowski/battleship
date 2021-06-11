import BoardCell from './BoardCell';
import PropTypes from 'prop-types';

const BoardRow = ({ row, ships, isGameStarted, setTurnCounter, setBoardHistory }) => {
    return (
        <div className="flex">
            {[...Array(10).keys()].map((column) => {
                const isShip = ships.some((shipPosition) => shipPosition.x === row && shipPosition.y === column);
                return (
                    <BoardCell
                        key={column}
                        row={row}
                        column={column}
                        isShip={isShip}
                        isGameStarted={isGameStarted}
                        setTurnCounter={setTurnCounter}
                        setBoardHistory={setBoardHistory}
                    />
                );
            })}
        </div>
    );
};

export default BoardRow;

BoardRow.propTypes = {
    row: PropTypes.number.isRequired,
    ships: PropTypes.any,
    isGameStarted: PropTypes.bool.isRequired,
    setTurnCounter: PropTypes.func.isRequired,
    setBoardHistory: PropTypes.func.isRequired,
};
