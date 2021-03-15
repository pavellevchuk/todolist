import React from 'react'
import './index.scss'

export default function InputField({
    name,
    value,
    onChange,
    label
}) {
    const handleChange = (e) => {
        onChange(e.currentTarget.value);
    }

    return (
        <div className="input-field">
            <span className="input-field__label">{label}</span>
            <input type={name === 'password' ? 'password' : 'text'} name={name} value={value || ''} onChange={handleChange}/>
        </div>
    )
}
