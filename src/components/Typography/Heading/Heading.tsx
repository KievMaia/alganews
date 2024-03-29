import * as H from './Heading.styles'
import {ReactNode} from "react";

export interface HeadingProps {
    level: 1 | 2 | 3
    children: ReactNode
}

function Heading({level, children}: HeadingProps) {
    return (
        <H.Wrapper level={level}>
            {children}
        </H.Wrapper>
    );
}

export default Heading;