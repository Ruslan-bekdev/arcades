import React, {FC} from 'react';
import Keyboard from './components/laptop/Keyboard';
import styled from '@emotion/styled';
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "./store";
import {
    setClickableKeys
} from './store/arcadesSlice'

const AppWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
`;

const App: FC = () => {
    const dispatch = useDispatch();
    const exampleClickableKeys:number[] = [16,29,30,31,55,56,57,58]
    const setClickableKeysAction = () => {
        dispatch(setClickableKeys(exampleClickableKeys));
    }
    const resetClickableKeysAction = () => {
        dispatch(setClickableKeys([]));
    }

    return (
        <AppWrapper>
            <Keyboard/>
        </AppWrapper>
    );
};

export default App;
