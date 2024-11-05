import React, { FC } from 'react';
import styled from "@emotion/styled";

const LaptopTopWrapper = styled.div`
    width: 1122px;
    height: 600px;
    padding: 64px 36px 90px;
    box-sizing: border-box;
    border-radius: 16px;
    background-color: #000;
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;

    transform: perspective(1400px) rotateX(-18deg);
    transform-origin: center bottom;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    z-index: 1000;
`;

const Screen = styled.div<{isOpen: boolean}>`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    opacity: ${({isOpen}) => (isOpen ?1 :0)};
    transition: opacity .2s ease-in-out;
`;

const LaptopTop: FC<{isOpen: boolean}> = ({isOpen}) => (
    <LaptopTopWrapper>
        <Screen isOpen={isOpen} />
    </LaptopTopWrapper>
);

export default LaptopTop;
