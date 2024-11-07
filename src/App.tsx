import './App.css';
import React, {FC} from 'react';
import Laptop from "./components/laptop/Laptop";
import styled from '@emotion/styled';
import {useDispatch} from "react-redux";
import {
    setClickableKeys,
    toggleRgbEffect,
} from './store/keyboardSlice';
import {
    openLaptop,
    closeLaptop,
} from './store/LaptopSlice';

const AppStyled = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
`;

const App: FC = () => {
    const dispatch = useDispatch();
    const exampleClickableKeys:number[] = [16,29,30,31,55,56,57,58];
    const actions = {
        setClickableKeys: () => dispatch(setClickableKeys(exampleClickableKeys)),
        resetClickableKeys: () => dispatch(setClickableKeys([])),
        toggleRgbEffect: () => dispatch(toggleRgbEffect()),
        openLaptop: () => dispatch(openLaptop()),
        closeLaptop: () => dispatch(closeLaptop()),
    }
    return (
        <AppStyled>
            <Laptop/>
            <div className="tests">
                <button onClick={actions.setClickableKeys}>ON</button>
                <button onClick={actions.resetClickableKeys}>OFF</button>
                <button onClick={actions.toggleRgbEffect}>RGB</button>
                <button onClick={actions.openLaptop}>OPEN</button>
                <button onClick={actions.closeLaptop}>CLOSE</button>
            </div>
        </AppStyled>
    );
};

export default App;
