import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const LoginInput = ({
                        name,
                        placeholder,
                        value,
                        error,
                        icon,
                        type,
                        onChange,
                        id
                    }) => {
    return (
        <div className="animate-label">
            <input
                className={classnames({
                    'is-invalid': error
                })}
                name={name}
                value={value}
                onChange={onChange}
                id={id}
                required
            />
            <label htmlFor={id}> {placeholder} </label>
            <i className={icon}/>
            <line/>
            <br/>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

LoginInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    id: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

LoginInput.defaultProps = {
    type: 'text'
};

export default LoginInput;