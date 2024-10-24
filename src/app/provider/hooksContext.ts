import { useContext } from 'react';

import { TasksContext, TasksDispatchContext } from './StoreProvider';

export const useTasks = () => {
    return useContext(TasksContext);
};

export const useTasksDispatch = () => {
    return useContext(TasksDispatchContext);
};
