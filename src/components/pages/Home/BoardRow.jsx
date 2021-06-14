import BoardCell from './BoardCell';
import PropTypes from 'prop-types';

const BoardRow = (props) => {
    const { row, ships } = props;
    return (
        <div className="flex">
            {[...Array(10).keys()].map((column) => {
                const isShip = ships.some((shipPosition) => shipPosition.x === row && shipPosition.y === column);
                const ship = ships.find((ship) => ship.x === row && ship.y === column);
                return <BoardCell key={column} isShip={isShip} column={column} ship={ship} {...props} />;
            })}
        </div>
    );
};

export default BoardRow;

BoardRow.propTypes = {
    row: PropTypes.number.isRequired,
    ships: PropTypes.array.isRequired,
};
