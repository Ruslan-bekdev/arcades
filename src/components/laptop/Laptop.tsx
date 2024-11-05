import React, {FC} from 'react';
import styled from "@emotion/styled";
import LaptopTop from "./LaptopTop";
import LaptopBottom from "./LaptopBottom";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const LaptopWrapper = styled.div`
    position: relative;
    top: -300px;
`;

const Laptop:FC = () => {
    const {isOpen} = useSelector((state: RootState) => state.laptopReducer);

    return <LaptopWrapper>
        <LaptopTop isOpen={isOpen}/>
        <LaptopBottom isOpen={isOpen}/>
    </LaptopWrapper>
}
export default Laptop;