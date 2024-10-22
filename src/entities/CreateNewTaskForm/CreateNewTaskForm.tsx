import { nanoid } from 'nanoid';
import { useState } from 'react';
import styled from 'styled-components';

import { useTasksDispatch } from '@/app/provider/hooksContext';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 10px;
`;

export const CreateNewTaskForm = () => {
    const dispatch = useTasksDispatch();
    const [value, setValue] = useState<string>('');

    const addNewTaskHandler = () => {
        dispatch({
            type: 'add',
            payload: {
                id: nanoid(5),
                value,
                completed: false,
            },
        });
        setValue('');
    };

    const inputNewTaskHandler = (newValue: string) => {
        setValue(newValue);
    };

    return (
        <FormWrapper>
            <Input
                value={value}
                onChange={inputNewTaskHandler}
                placeholder="Напишите что нужно сделать?"
                data-testid="inputNewTask"
            />
            <Button
                onClick={addNewTaskHandler}
                data-testid="btnAddTask"
            >
                Создать задачу
            </Button>
        </FormWrapper>
    );
};
