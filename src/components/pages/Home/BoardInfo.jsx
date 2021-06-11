import PropTypes from 'prop-types';

const BoardInfo = ({ level, turns }) => {
    return (
        <div>
            <div>Difficulty: {level.shortName}</div>
            <div>Turns: {turns}</div>
        </div>
    );
};

export default BoardInfo;

BoardInfo.propTypes = {
    level: PropTypes.any,
    turns: PropTypes.number.isRequired,
};
