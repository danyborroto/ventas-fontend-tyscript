import React, { useState } from 'react';
import './textfield.style.css'

interface TextFieldProps {
    label: string;
    type: string;
    isRequire: boolean;
    isDisabled: boolean;
    id: string;
    onChange?: () => void;
    value?: string | number;
    options?: { [key: string]: string };
};

const TextField: React.FC<TextFieldProps> = ({ label, type, isRequire, isDisabled, id, onChange, value, options }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const inputElement = event.target;
        const inputLabel = document.getElementById(`label-${id}`) as HTMLLabelElement;

        inputElement.classList.add('input-focused');
        inputLabel.classList.add('label-focused');
        setIsFocused(true);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {

        const inputElement = event.target;
        const inputLabel = document.getElementById(`label-${id}`) as HTMLLabelElement;

        if (inputElement.value === '' && isRequire) {
            inputElement.classList.add('input-error');
            inputLabel.classList.add('label-error');
        } else {
            inputElement.classList.remove('input-error');
            inputLabel.classList.remove('label-error');
        }
        inputElement.classList.remove('input-focused');
        inputLabel.classList.remove('label-focused');
        setIsFocused(false);
    };
    return (
        <div className='form-field'>
            <label id={`label-${id}`} className={`input-label`} htmlFor={id}>{label}{isRequire ? (<span>*</span>) : null}</label>

            <div className='input-container'>
                {
                    type === 'select' ?
                        (
                            <>
                                <select
                                    className={'input-field select-field'}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    {...(onChange ? { onChange: onChange } : {})}
                                    //{...(value ? { value: value } : {})}
                                    value={value}
                                    {...(isRequire ? { required: true } : {})}
                                    {...(isDisabled ? { disabled: true } : { disabled: false })}
                                    {...(id ? { id: id } : {})}>
                                    {
                                        options ?
                                            Object.entries(options).map(([optionValue, optionLabel]) => {
                                                return (
                                                    <option key={optionValue} value={optionValue}>{optionLabel}</option>
                                                )
                                            }) : ''
                                    }
                                </select>
                            </>
                        )
                        :
                        (
                            <>
                                <input
                                    //className={`input-field ${isFocused ? 'input-focused' : ''}`}
                                    className={'input-field'}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    {...(onChange ? { onChange: onChange } : {})}
                                    //{...(value ? { value: value } : {})}
                                    value={value}
                                    type={type}
                                    {...(isRequire ? { required: true } : {})}
                                    {...(isDisabled ? { disabled: true } : { disabled: false })}
                                    {...(id ? { id: id } : {})} />
                                <span className='error-message'></span>
                            </>
                        )
                }
            </div>
        </div >
    )
};

export default TextField;