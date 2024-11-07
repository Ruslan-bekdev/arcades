import React, {FC} from "react";
import styled from "@emotion/styled";
import {useDispatch} from "react-redux";
import {setLoadingStatus} from '../../store/LaptopSlice';

const LoadingScreenStyled = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    &>p {
        font-size: 64px;
        opacity: 0;
        animation: fadeIn 0.7s ease-in-out forwards 1s, rotate 5s linear 4s forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const LoadingScreen: FC = () => {
    const dispatch = useDispatch();

    const handleAnimationEnd = (event: React.AnimationEvent<HTMLParagraphElement>) => {
        if (event.animationName === "rotate") {
            dispatch(setLoadingStatus(false))
        }
    };

    return (
        <LoadingScreenStyled>
            <p onAnimationEnd={handleAnimationEnd}>Временный макет загрузки</p>
        </LoadingScreenStyled>
    );
};

export default LoadingScreen;