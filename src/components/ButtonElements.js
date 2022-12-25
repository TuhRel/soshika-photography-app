import styled from "styled-components";
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 10px;
    background: ${({primary}) => (primary ? '#f9f9f9' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? "14px 48px" : "12px 30px")};
    color: ${({dark}) => (dark ? '#17141f' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1px solid #17141f;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#17141f20' : '#01BF71')};
    }
`