import React, {FC} from 'react';
import styled from '@emotion/styled';

interface KeyProps {
    label: string;
    size: string;
    position: string;
    isActive: boolean;
    isClickable: boolean;
    isCapsLockOn: boolean;
}

const KeyButton = styled.div<KeyProps>`
    display: inline-block;
    min-width: 60px;
    margin: 0 5px;
    padding: 0 5px;
    box-sizing: border-box;
    border: 1px solid #999;
    border-radius: 6px;
    font-size: 24px;
    user-select: none;
    width: ${({size}) => {
        switch (size) {
            case 'big':
                return '80%';
            case 'max':
                return '100%';
            default: return '60px';
        }
    }};
    height: ${({size}) => {
        switch (size) {
            case 'half':
                return 60/2-2 + 'px';
            default: return '60px';
        }
    }};
    line-height: ${({size}) => {
        switch (size) {
            case 'half':
                return 60/2-2 + 'px';
            default: return '60px';
        }
    }};
    text-align: ${({position}) => position};
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

    ${({label, isCapsLockOn}) => label === 'CapsLk' && `
        position: relative;

        &::after {
            content: '-';
            position: absolute;
            top: 0px;
            right: 2px;
            font-size: 64px;
            line-height: 0;
            color: ${isCapsLockOn ? '#fff' : '#777'};
            filter: 'brightness(3)';
        }
    `}
`;

const Key: FC<KeyProps> = ({label, size, position, isActive, isClickable, isCapsLockOn}) => {
    return <KeyButton
        label={label}
        size={size}
        position={position}
        isActive={isActive}
        isClickable={isClickable}
        isCapsLockOn={isCapsLockOn}
    >
        {label}
    </KeyButton>;
};

export default Key;
