import * as I from './Input.styles'

import {InputHTMLAttributes} from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

function Input({label, ...props}: InputProps) {
    return (
        <I.Wrapper>
            {
                label &&
                <span className={"Label"}>
                    {label}:
                </span>
            }
            <input
                {...props}
                type={'text'}
            />
        </I.Wrapper>
    );
}

export default Input;