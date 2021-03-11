import styled from 'styled-components';

export const Container = styled.ul`
    margin-top: 20px;

    h1 {
        font-size: 70px;
        color: #3a3a3a;
    }

    li {
        margin-top: 30px;
        font-size: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #444;

        & + li {
            margin-top: 15px;
        }
    }

    span {
        font-size: 24px;
        color: #3a3a3a;
    }
`;
