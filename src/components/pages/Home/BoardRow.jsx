import BoardCell from './BoardCell';
import PropTypes from 'prop-types';

const BoardRow = ({ i, ships }) => {
    const SIZE = 10;
    return (
        <div className="flex">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((j) => {
                const isShip = ships.some((shipPosition) => shipPosition.x === i && shipPosition.y === j);

                // if (isShip) {
                //     console.log('ahhh', isShip, i, j);
                // }

                return <BoardCell key={j} row={i} column={j} ships={isShip} cell={isShip ? 'XXX' : `.`} />;
            })}
        </div>
    );
};

export default BoardRow;

BoardRow.propTypes = {
    i: PropTypes.number.isRequired,
    ships: PropTypes.any,
    cell: PropTypes.any,
};
