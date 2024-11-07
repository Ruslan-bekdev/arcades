import React, {FC, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import LoadingScreen from "./LoadingScreen";
import Display from "./Display";
import {setLoadingStatus} from '../../store/LaptopSlice';
import {useDispatch} from "react-redux";

const LaptopTopWrapper = styled.div<{ rotation: string }>`
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
    transform-origin: center bottom;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    z-index: 1000;

    transform: perspective(1400px) rotateX(${({ rotation }) => rotation});
    transition: transform 2s ease-in-out;
`;

const LaptopTop: FC<{isOpen: boolean; isLoading: boolean}> = ({isOpen, isLoading}) => {
    const dispatch = useDispatch();
    const [rotation, setRotation] = useState('-150deg');
    const [animationFinished, setAnimationFinished] = useState(true);

    useEffect(() => {
        if (isOpen) {
            setRotation('-18deg');
            setAnimationFinished(false);
            return
        }
        setRotation('-150deg');
        setAnimationFinished(false);
    }, [isOpen]);

    useEffect(() => {
        if (animationFinished && isOpen) {
            dispatch(setLoadingStatus(true));
        }
    }, [animationFinished, isOpen]);

    const handleAnimationEnd = () => {
        setAnimationFinished(true);
    };

    return (
        <LaptopTopWrapper rotation={rotation} onTransitionEnd={handleAnimationEnd}>
            {isOpen && animationFinished ?(
                isLoading ?<LoadingScreen /> :<Display />
            ) :null}
        </LaptopTopWrapper>
    );
};

export default LaptopTop;
