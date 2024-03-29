import React from 'react';
import * as P from './Paragraph.styles'

export interface ParagraphProps {
    size?: 'default' | 'small'
    children: React.ReactNode
}

function Paragraph({size, children}: ParagraphProps) {
    return (
        <P.Wrapper size={size || 'default'}>
            {children}
        </P.Wrapper>
    );
}

export default Paragraph;