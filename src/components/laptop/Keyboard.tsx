import React, {FC, useEffect, useState} from 'react';
import Key from './Key';
import styled from '@emotion/styled';

const KeyboardWrapper = styled.div`
    background-color: black;
    width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    padding: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    
    //потом добавлю переключатель для управление rgb режимом
    
    &:hover{
        background: linear-gradient(45deg, #ff004d, #7d00ff, #00bfff, #00ff91, #ff004d);
        background-size: 400% 400%;
        animation: gradient 20s ease infinite;
    
        @keyframes gradient {
            0% { background-position: 0 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0 50%; }
        }
    }
`;
const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5px 0;
`;

interface ActiveKeysProps {
    activeKeys: any;
    clickableKeysState: any;
}

const Arrows: FC<ActiveKeysProps> = ({activeKeys, clickableKeysState}) => {
    return (
        <>
            <Key label="◄" isClickable={clickableKeysState[55]} isActive={activeKeys[55]}/>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <Key label="▲" isClickable={clickableKeysState[56]} isActive={activeKeys[56]}/>
                <Key label="▼" isClickable={clickableKeysState[57]} isActive={activeKeys[57]}/>
            </div>
            <Key label="►" isClickable={clickableKeysState[58]} isActive={activeKeys[58]}/>
        </>
    );
}

interface KeyboardProps {
    clickableKeys: number[];
}

const Keyboard: FC<KeyboardProps> = ({ clickableKeys }) => {
    const keyMap: {[key: string]: number} = {
        'ё': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '0': 10,
        '-': 11,
        '=': 12,
        'Backspace': 13,
        'Tab': 14,
        'q': 15,
        'w': 16,
        'e': 17,
        'r': 18,
        't': 19,
        'y': 20,
        'u': 21,
        'i': 22,
        'o': 23,
        'p': 24,
        '[': 25,
        ']': 26,
        '\\': 27,
        'CapsLock': 28,
        'a': 29,
        's': 30,
        'd': 31,
        'f': 32,
        'g': 33,
        'h': 34,
        'j': 35,
        'k': 36,
        'l': 37,
        ';': 38,
        '\'': 39,
        'Enter': 40,
        'Shift': 41,
        'z': 42,
        'x': 43,
        'c': 44,
        'v': 45,
        'b': 46,
        'n': 47,
        'm': 48,
        ',': 49,
        '.': 50,
        '/': 51,
        'Control': 52,
        'Alt': 53,
        ' ': 54,
        'ArrowLeft': 55,
        'ArrowUp': 56,
        'ArrowDown': 57,
        'ArrowRight': 58,
    };
    const [activeKeys, setActiveKeys] = useState<boolean[]>(Array(keyMap.lenght).fill(false));
    const [clickableKeysState, setClickableKeysState] = useState<boolean[]>(Array(keyMap.lenght).fill(false));

    useEffect(() => {
        const newClickableKeys = Array(keyMap.lenght).fill(false);
        clickableKeys.forEach(index => {
            newClickableKeys[index] = true;
        });
        setClickableKeysState(newClickableKeys);
    }, [clickableKeys]);
    useEffect(() => {
        const handleKeyClick = (event: KeyboardEvent) => {
            const keyIndex = keyMap[event.key];
            if (keyIndex !== undefined) {
                setActiveKeys((prev) => {
                    const newActiveKeys = [...prev];
                    newActiveKeys[keyIndex] = event.type === 'keydown';
                    return newActiveKeys;
                });
            }
        };

        window.addEventListener('keydown', handleKeyClick);
        window.addEventListener('keyup', handleKeyClick);

        return () => {
            window.removeEventListener('keydown', handleKeyClick);
            window.removeEventListener('keyup', handleKeyClick);
        };
    }, []);

    //временно написал грязный код. Заменю на цикл в следующем комите

    return (
        <KeyboardWrapper>
            <Row>
                <Key label="ё" isClickable={clickableKeysState[0]} isActive={activeKeys[0]} />
                <Key label="1" isClickable={clickableKeysState[1]} isActive={activeKeys[1]} />
                <Key label="2" isClickable={clickableKeysState[2]} isActive={activeKeys[2]} />
                <Key label="3" isClickable={clickableKeysState[3]} isActive={activeKeys[3]} />
                <Key label="4" isClickable={clickableKeysState[4]} isActive={activeKeys[4]} />
                <Key label="5" isClickable={clickableKeysState[5]} isActive={activeKeys[5]} />
                <Key label="6" isClickable={clickableKeysState[6]} isActive={activeKeys[6]} />
                <Key label="7" isClickable={clickableKeysState[7]} isActive={activeKeys[7]} />
                <Key label="8" isClickable={clickableKeysState[8]} isActive={activeKeys[8]} />
                <Key label="9" isClickable={clickableKeysState[9]} isActive={activeKeys[9]} />
                <Key label="0" isClickable={clickableKeysState[10]} isActive={activeKeys[10]} />
                <Key label="-" isClickable={clickableKeysState[11]} isActive={activeKeys[11]} />
                <Key label="=" isClickable={clickableKeysState[12]} isActive={activeKeys[12]} />
                <Key label="Backspace" isWide isClickable={clickableKeysState[13]} isActive={activeKeys[13]} />
            </Row>

            <Row>
                <Key label="Tab" isWide isClickable={clickableKeysState[14]} isActive={activeKeys[14]} />
                <Key label="Q" isClickable={clickableKeysState[15]} isActive={activeKeys[15]} />
                <Key label="W" isClickable={clickableKeysState[16]} isActive={activeKeys[16]} />
                <Key label="E" isClickable={clickableKeysState[17]} isActive={activeKeys[17]} />
                <Key label="R" isClickable={clickableKeysState[18]} isActive={activeKeys[18]} />
                <Key label="T" isClickable={clickableKeysState[19]} isActive={activeKeys[19]} />
                <Key label="Y" isClickable={clickableKeysState[20]} isActive={activeKeys[20]} />
                <Key label="U" isClickable={clickableKeysState[21]} isActive={activeKeys[21]} />
                <Key label="I" isClickable={clickableKeysState[22]} isActive={activeKeys[22]} />
                <Key label="O" isClickable={clickableKeysState[23]} isActive={activeKeys[23]} />
                <Key label="P" isClickable={clickableKeysState[24]} isActive={activeKeys[24]} />
                <Key label="[" isClickable={clickableKeysState[25]} isActive={activeKeys[25]} />
                <Key label="]" isClickable={clickableKeysState[26]} isActive={activeKeys[26]} />
                <Key label="\\" isWide isClickable={clickableKeysState[27]} isActive={activeKeys[27]} />
            </Row>

            <Row>
                <Key label="Caps Lock" isWide isClickable={clickableKeysState[28]} isActive={activeKeys[28]} />
                <Key label="A" isClickable={clickableKeysState[29]} isActive={activeKeys[29]} />
                <Key label="S" isClickable={clickableKeysState[30]} isActive={activeKeys[30]} />
                <Key label="D" isClickable={clickableKeysState[31]} isActive={activeKeys[31]} />
                <Key label="F" isClickable={clickableKeysState[32]} isActive={activeKeys[32]} />
                <Key label="G" isClickable={clickableKeysState[33]} isActive={activeKeys[33]} />
                <Key label="H" isClickable={clickableKeysState[34]} isActive={activeKeys[34]} />
                <Key label="J" isClickable={clickableKeysState[35]} isActive={activeKeys[35]} />
                <Key label="K" isClickable={clickableKeysState[36]} isActive={activeKeys[36]} />
                <Key label="L" isClickable={clickableKeysState[37]} isActive={activeKeys[37]} />
                <Key label=";" isClickable={clickableKeysState[38]} isActive={activeKeys[38]} />
                <Key label="'" isClickable={clickableKeysState[39]} isActive={activeKeys[39]} />
                <Key label="Enter" isWide isClickable={clickableKeysState[40]} isActive={activeKeys[40]} />
            </Row>

            <Row>
                <Key label="Shift" isWide isClickable={clickableKeysState[41]} isActive={activeKeys[41]} />
                <Key label="Z" isClickable={clickableKeysState[42]} isActive={activeKeys[42]} />
                <Key label="X" isClickable={clickableKeysState[43]} isActive={activeKeys[43]} />
                <Key label="C" isClickable={clickableKeysState[44]} isActive={activeKeys[44]} />
                <Key label="V" isClickable={clickableKeysState[45]} isActive={activeKeys[45]} />
                <Key label="B" isClickable={clickableKeysState[46]} isActive={activeKeys[46]} />
                <Key label="N" isClickable={clickableKeysState[47]} isActive={activeKeys[47]} />
                <Key label="M" isClickable={clickableKeysState[48]} isActive={activeKeys[48]} />
                <Key label="," isClickable={clickableKeysState[49]} isActive={activeKeys[49]} />
                <Key label="." isClickable={clickableKeysState[50]} isActive={activeKeys[50]} />
                <Key label="/" isClickable={clickableKeysState[51]} isActive={activeKeys[51]} />
                <Key label="Shift" isWide isClickable={clickableKeysState[41]} isActive={activeKeys[41]} />
            </Row>

            <Row>
                <Key label="Ctrl" isClickable={clickableKeysState[52]} isActive={activeKeys[52]} />
                <Key label="Alt" isClickable={clickableKeysState[53]} isActive={activeKeys[53]} />
                <Key label="" isWide isClickable={clickableKeysState[54]} isActive={activeKeys[54]} />
                <Key label="Alt" isClickable={clickableKeysState[53]} isActive={activeKeys[53]} />
                <Key label="Ctrl" isClickable={clickableKeysState[52]} isActive={activeKeys[52]} />
                <Arrows activeKeys={activeKeys} clickableKeysState={clickableKeysState}/>
            </Row>
        </KeyboardWrapper>
    );
};

export default Keyboard;
