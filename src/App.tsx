import React, {FC} from 'react';
import Laptop from "./components/laptop/Laptop";
import styled from '@emotion/styled';
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "./store";
import {
    setClickableKeys,
    toggleRgbEffect,
} from './store/keyboardSlice';
import {
    openLaptop,
    closeLaptop,
} from './store/LaptopSlice';

const AppWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
`;

const App: FC = () => {
    const dispatch = useDispatch();
    const exampleClickableKeys:number[] = [16,29,30,31,55,56,57,58];
    const setClickableKeysAction = () => {
        dispatch(setClickableKeys(exampleClickableKeys));
    }
    const resetClickableKeysAction = () => {
        dispatch(setClickableKeys([]));
    }
    const toggleRgbEffectAction = () => {
        dispatch(toggleRgbEffect());
    }
    const openLaptopAction = () => {
        dispatch(openLaptop());
    }
    const closeLaptopAction = () => {
        dispatch(closeLaptop());
    }
    return (
        <AppWrapper>
            <Laptop/>
            {/*<button onClick={setClickableKeysAction}>ON</button>*/}
            {/*<button onClick={resetClickableKeysAction}>OFF</button>*/}
            {/*<button onClick={toggleRgbEffectAction}>RGB</button>*/}
            <button onClick={openLaptopAction}>OPEN</button>
            <button onClick={closeLaptopAction}>CLOSE</button>
        </AppWrapper>
    );
};

export default App;
