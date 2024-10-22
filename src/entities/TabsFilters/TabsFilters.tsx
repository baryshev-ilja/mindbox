import { useCallback } from 'react';
import styled from 'styled-components';

import { useTasks, useTasksDispatch } from '@/app/provider/hooksContext';
import DeleteIcon from '@/shared/assets/delete.svg?react';
import { Button } from '@/shared/ui/Button';
import { Tab } from '@/shared/ui/Tab';

const TabsFiltersWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const ButtonClearDone = styled(Button).attrs({
    variant: 'clear',
})`
    margin-left: auto;
`;

export const TabsFilters = () => {
    const {
        allTasksCount,
        currentTasksCount,
        doneTasksCount,
        selectedTab,
    } = useTasks();
    const dispatch = useTasksDispatch();

    const clearAllCompletedHandler = useCallback(() => {
        dispatch({
            type: 'deleteAllCompleted',
        });
    }, [dispatch]);

    const showAllCurrentHandler = useCallback(() => {
        dispatch({
            type: 'showAllCurrent',
            selectedTab: 'current',
        });
    }, [dispatch]);

    const showAllCompletedHandler = useCallback(() => {
        dispatch({
            type: 'showAllCompleted',
            selectedTab: 'done',
        });
    }, [dispatch]);

    const showAllHandler = useCallback(() => {
        dispatch({
            type: 'showAll',
            selectedTab: 'all',
        });
    }, [dispatch]);

    return (
        <TabsFiltersWrapper>
            <Tab
                variant={(selectedTab === 'all' ? 'tabActive' : 'tab')}
                quantity={allTasksCount}
                onClick={showAllHandler}
                data-testid="tabAll"
            >
                все задачи
            </Tab>

            <Tab
                variant={(selectedTab === 'current' ? 'tabActive' : 'tab')}
                quantity={currentTasksCount}
                onClick={showAllCurrentHandler}
                data-testid="tabAllCurrent"
            >
                текущие
            </Tab>

            <Tab
                variant={(selectedTab === 'done' ? 'tabActive' : 'tab')}
                quantity={doneTasksCount}
                onClick={showAllCompletedHandler}
                data-testid="tabAllCompleted"
            >
                выполненные
            </Tab>

            <ButtonClearDone
                onClick={clearAllCompletedHandler}
                data-testid="btnClearAll"
            >
                <DeleteIcon />
                удалить выполненные
            </ButtonClearDone>

        </TabsFiltersWrapper>
    );
};
