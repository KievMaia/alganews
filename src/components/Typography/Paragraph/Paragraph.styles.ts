import styled from "styled-components";

export const Wrapper = styled.p<{size: 'default' | 'small'}>`
    font-size: ${p => p.size === 'default' ? 14 : 12}px;
    line-height: ${p => p.size === 'default' ? 25 : 20}px;
    color: #274060;
`