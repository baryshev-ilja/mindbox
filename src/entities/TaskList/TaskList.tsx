import styled from 'styled-components';

import { TaskListAll } from './TaskListAll';
import { TaskListCompleted } from './TaskListCompleted';
import { TaskListCurrent } from './TaskListCurrent';

import { useTasks } from '@/app/provider/hooksContext';
import { Text } from '@/shared/ui/Text';

const TaskListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

interface TaskListProps {
    'data-testid'?: string;
}

export const TaskList = (props: TaskListProps) => {
    const {
        'data-testid': dataTestId = '',
    } = props;

    const {
        allTasks,
        doneTasks,
        currentTasks,
        selectedTab,
    } = useTasks();

    let content = <Text align="center">Задачи отсутствуют</Text>;

    if (allTasks.length && selectedTab === 'all') {
        content = <TaskListAll tasks={allTasks} />;
    }

    if (currentTasks.length && selectedTab === 'current') {
        content = <TaskListCurrent tasks={currentTasks} />;
    }

    if (doneTasks.length && selectedTab === 'done') {
        content = <TaskListCompleted tasks={doneTasks} />;
    }

    return (
        <TaskListWrapper data-testid={dataTestId}>
            {content}
        </TaskListWrapper>
    );
};
