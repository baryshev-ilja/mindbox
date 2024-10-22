import {
    createContext,
    Dispatch,
    useReducer,
    ReactNode,
} from 'react';

import { tasksReducer } from '../store/tasksReducer';
import { initialState } from '../store/tasksState';
import { UnionActionType, StateSchema } from '../store/types';

export const TasksContext = createContext<StateSchema>(initialState);
export const TasksDispatchContext = createContext<Dispatch<UnionActionType>>(() => {});

interface TasksProviderProps {
    children: ReactNode;
}

export const TasksProvider = (props: TasksProviderProps) => {
    const { children } = props;
    const [tasks, dispatch] = useReducer(tasksReducer, initialState);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
};
