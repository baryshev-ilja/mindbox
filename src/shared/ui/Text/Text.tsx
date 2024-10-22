import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type TextSize = 'sizeS' | 'sizeM' | 'sizeL';
type TextWeight = 'medium' | 'regular';
type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
    children: ReactNode;
    isTitle?: boolean;
    isDone?: boolean;
    align?: TextAlign;
    size?: TextSize;
    fontWeight?: TextWeight;
    'data-testid'?: string;
}

const Title = styled.h1`
    color: #39aa5d;
    font-family: 'CoFo Sans Regular', 'sans-serif';
    font-size: 60px;
    line-height: 60px;
    margin: 0;
`;

const Paragraph = styled.p<{
    isDoneTask?: boolean,
    textAlign?: TextAlign;
    fontSize?: TextSize;
    fontWeight?: TextWeight;
}>`
    color: ${(props) => (props.isDoneTask ? '#E8EBEE' : '#292B32')};
    text-align: ${(props) => props.textAlign};
    text-decoration: ${(props) => (props.isDoneTask ? 'line-through' : 'none')};

    ${(props) => {
        switch (props.fontSize) {
        case 'sizeM':
            return css`
                font-size: 16px;
                line-height: 20px;
            `;
        case 'sizeL':
            return css`
                font-size: 21px;
                line-height: 26px;
                margin: 0;
            `;
        default:
            return css`
                font-size: 14px;
                line-height: 14px;
            `;
        }
    }}

    ${(props) => {
        switch (props.fontWeight) {
        case 'medium':
            return css`
                font-family: 'CoFo Sans Medium', 'sans-serif';
            `;
        default:
            return css`
                font-family: 'CoFo Sans Regular', 'sans-serif';
            `;
        }
    }}
`;

export const Text = (props: TextProps) => {
    const {
        isTitle,
        isDone = false,
        align = 'left',
        size = 'sizeS',
        fontWeight = 'regular',
        children,
        'data-testid': dataTestId = '',
    } = props;

    if (isTitle) {
        return <Title>{children}</Title>;
    }

    return (
        <Paragraph
            isDoneTask={isDone}
            textAlign={align}
            fontSize={size}
            fontWeight={fontWeight}
            data-testid={dataTestId}
        >
            {children}
        </Paragraph>
    );
};
