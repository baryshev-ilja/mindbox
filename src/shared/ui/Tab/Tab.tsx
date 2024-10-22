import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

export type TabVariant = 'tab' | 'tabActive';

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: TabVariant;
    quantity?: number;
    'data-testid'?: string;
}

const TabStyled = styled.button<{
    tabVariant?: TabVariant,
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    font-family: "CoFo Sans Medium", sans-serif;
    font-size: 14px;
    line-height: 14px;
    border: none;
    padding: 0 8px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease-in-out;

    ${(props) => {
        switch (props.tabVariant) {
        case 'tabActive':
            return css`
                color: white;
                background-color: #292b32;
                border-radius: 6px;
                cursor: default;

                &:hover {
                    background-color: #292b32;
                }
            `;
        default:
            return css`
                color: #292b32;
                background-color: #e8ebee;
                border-radius: 6px;

                &:hover {
                    background-color: #cad3db;
                }
            `;
        }
    }}
`;

const TabQuantity = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
    height: 14px;
    font-family: "CoFo Sans Medium", sans-serif;
    font-size: 10px;
    line-height: 13px;
    padding: 1px 4px;
    background-color: white;
    color: #292b32;
    border-radius: 10px;
`;

export const Tab = (props: TabProps) => {
    const {
        children,
        variant,
        quantity = 0,
        'data-testid': dataTestId = '',
        ...otherProps
    } = props;

    return (
        <TabStyled
            type="button"
            tabVariant={variant}
            {...otherProps}
        >
            {children}
            <TabQuantity data-testid={dataTestId}>
                {quantity}
            </TabQuantity>
        </TabStyled>
    );
};
