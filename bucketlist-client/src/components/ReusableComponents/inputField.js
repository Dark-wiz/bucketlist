import React from 'react';

export const InputField = ({
    label,
    placeholder,
    required,
    type,
    disabled,
    name,
    min,
    value,
    onChange,
    length,
    hidden
}) => {
    return (
        <div className={length}>
            <div className="form-group">
                <label>{label}</label>
                <input type={type} className="form-control" name={name} min={min} required={required} onChange={onChange} placeholder={placeholder} value={value} disabled={disabled} hidden={hidden} />
            </div>
        </div>

    )
}


InputField.defaultProps = {
    type: "text",
    required: false,
    placeholder: "",
    length: "col-sm-6",
    disabled: false,
    min: 0
};