import PropTypes from 'prop-types';

const Card = ({ children }) => {
    return (
        <div className="rounded shadow-lg w-full mb-10 my-10">
            <div className="px-6 py-4">
                <div className="text-gray-700 text-base">{children}</div>
            </div>
        </div>
    );
};

export default Card;

Card.propTypes = {
    children: PropTypes.node.isRequired,
};
