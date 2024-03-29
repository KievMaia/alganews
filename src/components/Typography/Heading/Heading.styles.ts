import styled from "styled-components";

const HEADING = {
    1: {
        fontSize: '36px',
    },
    2: {
        fontSize: '24px',
    },
    3: {
        fontSize: '18px',
    },
    fontWeight: 900,
    color: '#274060'
}

export const Wrapper = styled.h1<{ level: 1 | 2 | 3 }>`
    font-size: ${p => HEADING[p.level].fontSize};
    font-weight: ${HEADING.fontWeight};
    color: ${HEADING.color};
`
