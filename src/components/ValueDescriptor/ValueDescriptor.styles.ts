import styled from "styled-components";

const COLORS = {
    primary: {
        color: '#0099FF'
    },
    default: {
        color: '#274060'
    }
}

export const Wrapper = styled.div<{
    variant: 'primary' | 'default'
}>`
    display: flex;
    flex-direction: column;
    gap: 1px;
    
    span.Description {
        font-size: 12px;
        font-weight: normal;
        color: ${COLORS.default.color};
    }

    span.Value {
        font-size: 18px;
        font-weight: bold;
    }

    div.Content {
        color: ${p => COLORS[p.variant].color};
    }
`