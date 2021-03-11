import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 40px;
    max-width: 350px;

    display: grid;
    grid-template-columns: 1fr 1fr;

    p {
        width: fit-content;
    }

    button {
        width: 210px;
        height: 40px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;
