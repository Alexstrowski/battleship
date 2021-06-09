import PropTypes from 'prop-types';

const BoardCell = ({ row, column, cell }) => {
    const onClick = () => {
        console.log(row, column);
    };

    return (
        <div className="box-content h-8 w-8 p-4 bg-white border-2 mr-1 mb-1 rounded-md" onClick={onClick}>
            {cell}
        </div>
    );
};

export default BoardCell;

BoardCell.propTypes = {
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    cell: PropTypes.any,
};
