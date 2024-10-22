import { ReactNode, useCallback, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../Button';
import { Text } from '../Text';

import { useTasksDispatch } from '@/app/provider/hooksContext';
import Approve from '@/shared/assets/approve.svg?react';
import DeleteIcon from '@/shared/assets/delete.svg?react';

interface TaskProps {
    children: ReactNode;
    id: string;
    completed: boolean;
    'data-testid'?: string;
}

const TaskWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border-radius: 8px;
    padding: 0 10px;
    background-color: white;

    &:hover button {
        display: flex;
    }
`;

const TaskInner = styled.span`
    display: flex;
    gap: 10px;
`;

const LabelWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const Checkbox = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    background-color: transparent;
    overflow: hidden;

    &&:checked + label {
        background: #39aa5d;
    }
`;

const Label = styled.label`
    background: #e8ebee;
    width: 19px;
    height: 19px;
    border-radius: 5px;
`;

const ApproveIcon = styled(Approve)`
    position: absolute;
    left: 1px;
    width: 17px;
    height: 17px;
    color: white;
    pointer-events: none;
`;

const DeleteButton = styled(Button)`
    display: none;
`;

export const Task = (props: TaskProps) => {
    const {
        children,
        id,
        completed,
        'data-testid': dataTestId = `${id}-task`,
    } = props;
    const [checked, setChecked] = useState(completed);
    const dispatch = useTasksDispatch();

    const checkedTaskHandler = useCallback(() => {
        setChecked((prev) => !prev);
        dispatch({
            type: 'complete',
            payload: id,
        });
    }, [dispatch, id]);

    const deleteTaskHandler = useCallback(() => {
        dispatch({
            type: 'delete',
            payload: {
                id,
                completed,
            },
        });
    }, [completed, dispatch, id]);

    return (
        <TaskWrapper>

            <TaskInner>
                <LabelWrapper>
                    <Checkbox
                        type="checkbox"
                        id={id}
                        checked={checked}
                        onChange={checkedTaskHandler}
                        data-testid={dataTestId}
                    />
                    <Label htmlFor={id} />
                    {checked && <ApproveIcon />}
                </LabelWrapper>

                <Text isDone={checked}>{children}</Text>
            </TaskInner>

            <DeleteButton
                onClick={deleteTaskHandler}
                variant="delete"
                data-testid={`${id}-clear`}
            >
                <DeleteIcon />
            </DeleteButton>

        </TaskWrapper>
    );
};
