import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    'data-testid'?: string;
}

const InputStyled = styled.input`
    display: flex;
    align-items: center;
    font-family: "CoFo Sans Regular", sans-serif;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    border: none;
    height: 40px;
    padding: 0 16px;
    background: white;
    border-radius: 8px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #e8ebee;
    }
`;

export const Input = memo((props: InputProps) => {
    const {
        value,
        onChange,
        placeholder,
        type,
        'data-testid': dataTestId = 'inputForm',
    } = props;

    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value);
    };

    return (
        <InputStyled
            type={type}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            data-testid={dataTestId}
        />
    );
});
