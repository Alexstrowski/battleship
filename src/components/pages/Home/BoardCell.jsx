import PropTypes from 'prop-types';

const BoardCell = ({ row, column, ships, cell }) => {
    const onClick = () => {
        console.log(row, column);
    };

    return (
        <div className="box-content h-8 w-8 p-4 bg-indigo-100 border-indigo-500 border-2" onClick={onClick}>
            {/* {ships.fourCells.map((cell) => {
                if (cell.x === row && cell.y === column) {
                    return 'XX';
                } else {
                    return `${row},${column}`;
                }
            })}
            {ships.threeCells.map((cell) => {
                if (cell.x === row && cell.y === column) {
                    return 'YY';
                } else {
                    return `${row},${column}`;
                }
            })} */}
            {cell}
        </div>
    );
};

export default BoardCell;

BoardCell.propTypes = {
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    ships: PropTypes.any.isRequired,
    cell: PropTypes.any,
};
