import React, {FC} from 'react';
import Keyboard from './components/laptop/Keyboard';
import styled from '@emotion/styled';

const AppWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
`;

const App: FC = () => {
    const exampleClickableKeys:number[] = [16,29,30,31,55,56,57,58]
    return (
        <AppWrapper>
            <Keyboard clickableKeys={exampleClickableKeys}/>
        </AppWrapper>
    );
};

export default App;
