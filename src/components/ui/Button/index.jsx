import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => {
    return (
        <div>
            <button onClick={onClick} className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                {children}
            </button>
        </div>
    );
};

export default Button;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};
