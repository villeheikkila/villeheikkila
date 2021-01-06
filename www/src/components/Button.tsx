import styled from 'styled-components';

const Button = styled.button`
    height: 42px;
    width: 100px;
    border-radius: 8px;
    border-style: solid;
    font-size: 18px;
    font-family: ${(props) => props.theme.typography.body.fontFamily};

    &:hover {
        background: ${(props) => props.theme.colors.midnightBlue};
        color: white;
    }
`;

export default Button;
