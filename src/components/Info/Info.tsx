import React from 'react';
import * as I from './Info.styles'
import Paragraph from "../Typography/Paragraph/Paragraph";
import Icon from "@mdi/react";
import {mdiInformation} from '@mdi/js'

export interface InfoProps {
    title: string
    description: string
}

function Info(props: InfoProps) {
    return (
        <I.Wrapper>
            <I.InfoInnerContent>
                <I.InfoIcon className={'InfoIcon'}>
                    <Icon
                        color='#09f'
                        size='48px'
                        path={mdiInformation}
                    />
                </I.InfoIcon>
                <I.InfoMessages>
                    <I.InfoTitle>{props.title}</I.InfoTitle>
                    <p>{props.description}</p>
                </I.InfoMessages>
            </I.InfoInnerContent>
        </I.Wrapper>
    );
}

export default Info;