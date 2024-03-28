import * as B from './Button.styles'
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: 'danger' | 'text' | 'primary'
    label: string,
    disable?: boolean
}

function Button({label, variant, ref, disable, ...props}: ButtonProps) {
    return (
        <B.Wrapper
            {...props}
            disabled={disable}
            variant={variant}
        >
            {label}
        </B.Wrapper>
    )
        ;
}

export default Button;