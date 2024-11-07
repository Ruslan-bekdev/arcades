import React, {FC} from 'react';
import styled from "@emotion/styled";
import Keyboard from "../keyboard/Keyboard";

const LaptopBottomStyled = styled.div`
    width: 1122px;
    height: 600px;
    padding: 64px 36px 48px;
    box-sizing: border-box;
    border-radius: 16px;
    background-color: #000;
    position: absolute;

    transform: perspective(1400px) rotateX(30deg);
    transform-origin: center top;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    z-index: 500;
`;

const LaptopBottom: FC = () =>
    <LaptopBottomStyled>
        <Keyboard/>
    </LaptopBottomStyled>

export default LaptopBottom;