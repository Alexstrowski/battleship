import BoardRow from './BoardRow';
import PropTypes from 'prop-types';
import { getAllShips } from 'utils/gameboard';

const ships = getAllShips();
console.log('ships', ships);
const Board = ({ isGameStarted, setTurnCounter, setBoardHistory }) => {
    return (
        <div className="p-5 bg-blue-400 w-max mt-10">
            {[...Array(10).keys()].map((row) => (
                <BoardRow
                    key={row}
                    row={row}
                    ships={ships}
                    isGameStarted={isGameStarted}
                    setTurnCounter={setTurnCounter}
                    setBoardHistory={setBoardHistory}
                />
            ))}
        </div>
    );
};

export default Board;

Board.propTypes = {
    isGameStarted: PropTypes.bool.isRequired,
    setTurnCounter: PropTypes.func.isRequired,
    setBoardHistory: PropTypes.func.isRequired,
};
