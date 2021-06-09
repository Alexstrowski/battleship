import PropTypes from 'prop-types';

const Input = (props) => {
    const { type = 'text', ...rest } = props;
    return (
        <div className={`border transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4`}>
            <input
                type={type}
                className={`w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md`}
                {...rest}
            />
        </div>
    );
};

export default Input;

Input.propTypes = {
    type: PropTypes.string.isRequired,
};
