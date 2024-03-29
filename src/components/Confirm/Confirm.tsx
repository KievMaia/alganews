import React, {MouseEventHandler} from 'react';
import * as C from './Confirm.styles'
import Button from "../Button/Button";

export interface ConfirmProps {
    title: string
    onConfirm: () => MouseEventHandler<HTMLButtonElement>
    onCancel: () => MouseEventHandler<HTMLButtonElement>
}

function Confirm(props: ConfirmProps) {
    return (
        <C.Wrapper>
            <C.ConfirmTitle>
                <p>{props.title}</p>
            </C.ConfirmTitle>
            <C.ConfirmButtonDisplay>
                <Button variant={"danger"} label={'Não'} onClick={props.onConfirm}/>
                <Button variant={"primary"} label={'Sim'} onClick={props.onCancel}/>
            </C.ConfirmButtonDisplay>
        </C.Wrapper>
    );
}

export default Confirm;