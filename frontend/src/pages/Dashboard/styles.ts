import styled from 'styled-components';
import { shade } from 'polished';

// export const Title = styled.h1`
//     font-size: 70px;
//     color: #3a3a3a;
// `;

export const Header = styled.header`
    a {
        background: #04d361;
        color: #3a3a3a;
        border-radius: 5px;
        width: 300px;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
    h1 {
        font-size: 70px;
        color: #3a3a3a;
    }
`;

export const TableContainer = styled.section`
    margin-top: 64px;

    h1 {
        font-size: 70px;
        color: #3a3a3a;
    }

    table {
        width: 100%;
        border-spacing: 0 8px;

        th {
            color: #969cb3;
            font-weight: normal;
            padding: 20px 32px;
            text-align: left;
            font-size: 16px;
            line-height: 24px;
        }

        td {
            padding: 20px 32px;
            border: 0;
            background: #fff;
            font-size: 16px;
            font-weight: normal;
            color: #3a3a3a;

            &.title {
                color: #363f5f;
            }

            &.income {
                color: #12a454;
            }

            &.outcome {
                color: #e83f5b;
            }
            a {
                color: #3a3a3a;
                /* text-decoration: none; */
            }
        }

        td:first-child {
            border-radius: 8px 0 0 8px;
        }

        td:last-child {
            border-radius: 0 8px 8px 0;
        }
    }

    svg {
        margin-left: auto;
        color: #e83f5b;
    }
`;
