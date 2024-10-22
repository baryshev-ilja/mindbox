import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

export type ButtonVariant = 'clear' | 'normal' | 'delete';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    'data-testid'?: string;
}

const ButtonStyled = styled.button<{
    buttonVariant?: ButtonVariant,
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color, opacity 0.3s ease-in-out;

    ${(props) => {
        switch (props.buttonVariant) {
        case 'clear':
            return css`
                height: 26px;
                padding: 0 8px;
                font-family: "CoFo Sans Medium", sans-serif;
                font-size: 14px;
                line-height: 14px;
                color: #292b32;
                gap: 4px;
                background-color: transparent;
                border-radius: 6px;

                &:hover {
                    background-color: #e8ebee;
                }
            `;
        case 'delete':
            return css`
                width: 23px;
                height: 23px;
                padding: 4px;
                color: #292b32;
                background-color: transparent;
            `;
        default:
            return css`
                font-family: "CoFo Sans Regular", sans-serif;
                font-size: 16px;
                line-height: 20px;
                padding: 0 16px;
                background-color: #39aa5d;

                &:hover {
                    opacity: 0.8;
                }
            `;
        }
    }}
`;

export const Button = (props: ButtonProps) => {
    const {
        children,
        variant,
        'data-testid': dataTestId = '',
        ...otherProps
    } = props;

    return (
        <ButtonStyled
            type="button"
            buttonVariant={variant}
            data-testid={dataTestId}
            {...otherProps}
        >
            {children}
        </ButtonStyled>
    );
};
