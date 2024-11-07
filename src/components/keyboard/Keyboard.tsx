import React, {FC, useEffect, useState} from 'react';
import Key from './Key';
import styled from '@emotion/styled';
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {
    keyMap,
    keyboardLayout,
    KeyData
} from "../../config/keyboard";

interface KeyboardProps {
    rgbEffect: boolean
}
interface HalfSizeKeysProps {
    row: KeyData[];
    activeKeys: boolean[];
    clickableKeysState: boolean[];
    isCapsLockOn: boolean;
}
interface KeyboardRowProps extends HalfSizeKeysProps{
    i: number,
    hasArrowsRendered: boolean,
}

const KeyboardStyled = styled.div<KeyboardProps>`
    width: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 1s ease-in-out;
    margin: 0 auto;
    
    ${({rgbEffect}) =>
            rgbEffect
                ? `
                    background: linear-gradient(45deg, #ff004d, #7d00ff, #00bfff, #00ff91, #ff004d);
                    background-size: 400% 400%;
                    animation: gradient 20s ease infinite;
                `
                : ''
    };
    
    @keyframes gradient {
        0% { background-position: 0 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0 50%; }
    };
`;
const KeyboardRowStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5px 0;
`;
const ArrowKeysStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const HalfSizeKeys:FC<HalfSizeKeysProps> = ({row, activeKeys, clickableKeysState, isCapsLockOn}) =>
    <ArrowKeysStyled>{
        row.map(({label, index, size, position}, i) => {
            return size === 'half'
                ?<Key
                    key={`${index}-${label}-${i}`}
                    label={label}
                    size={size}
                    position={position}
                    isActive={activeKeys[index]}
                    isClickable={clickableKeysState[index]}
                    isCapsLockOn={isCapsLockOn}
                />:''
        })}
    </ArrowKeysStyled>
const KeyboardRow:FC<KeyboardRowProps> = ({i, row, hasArrowsRendered, activeKeys, clickableKeysState, isCapsLockOn}) =>
    <KeyboardRowStyled key={`row-${i}`}>{
        row.map(({label, index, size, position}, i) => {
            if (size === 'half') {
                if (hasArrowsRendered) return;
                hasArrowsRendered = true;
                return <HalfSizeKeys
                    key={`half-${index}-${i}`}
                    row={row}
                    activeKeys={activeKeys}
                    clickableKeysState={clickableKeysState}
                    isCapsLockOn={isCapsLockOn}
                />
            }
            return <Key
                key={`${index}-${label}-${i}`}
                label={label}
                size={size}
                position={position}
                isActive={activeKeys[index]}
                isClickable={clickableKeysState[index]}
                isCapsLockOn={isCapsLockOn}
            />;
        })}
    </KeyboardRowStyled>


const Keyboard: FC = () => {
    const {clickableKeys, rgbEffect} = useSelector((state: RootState) => state.keyboardReducer);
    const ToUpperCasedKeyboardLayout = keyboardLayout.map(row =>
        row.map(item => ({
            ...item,
            label: /^[a-z]$/.test(item.label) ? item.label.toUpperCase() : item.label
        }))
    );

    const [activeKeys, setActiveKeys] = useState<boolean[]>(Array(keyMap.length).fill(false));
    const [clickableKeysState, setClickableKeysState] = useState<boolean[]>(Array(keyMap.length).fill(false));
    const [isCapsLockOn, setIsCapsLockOn] = useState<boolean>(false);
    const [isShiftOn, setIsShiftOn] = useState(false);
    const [currentKeyMap, setCurrentKeyMap] = useState<KeyData[][]>(keyboardLayout);

    useEffect(() => {
        const handleKeyClick = (event: KeyboardEvent) => {
            const keyIndex = keyMap[event.key] && keyMap[event.key] || keyMap[event.key.toLowerCase()];
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
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const capsLockStatus = event.getModifierState("CapsLock");
            setIsCapsLockOn(capsLockStatus);

            if (event.key === "Shift") {
                setIsShiftOn(true);
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            const capsLockStatus = event.getModifierState("CapsLock");
            setIsCapsLockOn(capsLockStatus);

            if (event.key === "Shift") {
                setIsShiftOn(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);
    useEffect(() => {
        isCapsLockOn === isShiftOn
            ?setCurrentKeyMap(keyboardLayout)
            :setCurrentKeyMap(ToUpperCasedKeyboardLayout)

    }, [isCapsLockOn, isShiftOn]);
    useEffect(() => {
        const clickableKeysStates = Array(keyMap.length).fill(false);
        clickableKeys.forEach(index => {
            clickableKeysStates[index] = true;
        });
        setClickableKeysState(clickableKeysStates);
    }, [clickableKeys]);

    return <KeyboardStyled rgbEffect={rgbEffect}>{
        currentKeyMap.map((row, i) => {
            let hasArrowsRendered: boolean = false;
            return <KeyboardRow
                i={i}
                row={row}
                hasArrowsRendered={hasArrowsRendered}
                activeKeys={activeKeys}
                clickableKeysState={clickableKeysState}
                isCapsLockOn={isCapsLockOn}
            />
        })}
    </KeyboardStyled>
};

export default Keyboard;