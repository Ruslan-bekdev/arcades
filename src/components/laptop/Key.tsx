import React, {FC} from 'react';
import styled from '@emotion/styled';

interface KeyWrapperProps {
    isWide?: boolean;
    isActive: boolean;
    isClickable: boolean;
    label: string }

const KeyWrapper = styled.div<KeyWrapperProps>`
    display: inline-block;
    min-width: 60px;
    margin: 0 5px;
    border: 1px solid #999;
    border-radius: 6px;
    text-align: center;
    font-size: 16px;
    user-select: none;
    width: ${({isWide}) => (
        isWide 
            ?'100%' 
            :'60px'
    )};
    height: ${({label}) => (
        label === "▲" || label === "▼" 
            ?'28px' 
            :'60px'
    )};
    line-height: ${({label}) => (
        label === "▲" || label === "▼"
            ?'28px' 
            :'60px'
    )};
    filter: ${({isClickable}) => (
        isClickable
            ?'brightness(1)'
            :'brightness(0.4)'
    )};
    background-color: ${({isActive}) => (
        isActive 
            ?'#999' 
            :'#ccc'
    )};
    box-shadow: ${({isActive}) => (
        isActive 
            ?'inset 1px 1px 3px rgba(0, 0, 0, 0.5)'
            :'2px 2px 5px rgba(0, 0, 0, 0.3)' 
    )};
    transform: ${({isActive}) => (
        isActive 
            ?'scale(0.90)' 
            :'translateX(0) scale(1)'
    )};
`;

interface KeyProps {
    label: string;
    isWide?: boolean;
    isActive: boolean;
    isClickable: boolean;
}

const Key: FC<KeyProps> = ({label, isWide = false, isActive, isClickable}) => {
    return <KeyWrapper
        isWide={isWide}
        isActive={isActive}
        isClickable={isClickable}
        label={label}
    >
        {label}
    </KeyWrapper>;
};

export default Key;
