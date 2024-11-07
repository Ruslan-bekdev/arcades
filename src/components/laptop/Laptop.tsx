import React, {FC} from 'react';
import styled from "@emotion/styled";
import LaptopTop from "./LaptopTop";
import LaptopBottom from "./LaptopBottom";

const LaptopStyled = styled.div`
    position: relative;
    top: -300px;
`;

const Laptop:FC = () =>
    <LaptopStyled>
        <LaptopTop/>
        <LaptopBottom/>
    </LaptopStyled>

export default Laptop;