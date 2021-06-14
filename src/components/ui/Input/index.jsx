import PropTypes from 'prop-types';

const Input = (props) => {
    const { type = 'text', ...rest } = props;
    return (
        <div
            className={`border transition duration-150 ease-in-out focus-within:border-primary border-gray-300 rounded-md`}
        >
            <input
                type={type}
                className={`w-full px-6 pb-1.5 text-primary outline-none text-base font-light rounded-md h-8`}
                {...rest}
            />
        </div>
    );
};

export default Input;

Input.propTypes = {
    type: PropTypes.string.isRequired,
};
