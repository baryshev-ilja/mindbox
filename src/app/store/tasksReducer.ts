import {
    addNewTask,
    completeTask,
    deleteAllCompletedTasks,
    deleteTask,
    showAllCompleted,
    showAllCurrent,
    showAll,
} from '../store/tasksActions';
import type { StateSchema, UnionActionType } from '../store/types';

export const tasksReducer = (state: StateSchema, action: UnionActionType): StateSchema => {
    switch (action.type) {
    case 'add':
        return addNewTask(state, action);
    case 'complete':
        return completeTask(state, action);
    case 'delete':
        return deleteTask(state, action);
    case 'deleteAllCompleted':
        return deleteAllCompletedTasks(state);
    case 'showAllCompleted':
        return showAllCompleted(state, action);
    case 'showAllCurrent':
        return showAllCurrent(state, action);
    case 'showAll':
        return showAll(state, action);
    default:
        return state;
    }
};
