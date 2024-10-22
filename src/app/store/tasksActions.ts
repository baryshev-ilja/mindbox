import type {
    StateSchema,
    ActionAdd,
    ActionComplete,
    ActionDelete,
    ActionShowAll,
    ActionShowAllCurrent,
    ActionShowAllCompleted,
} from '../store/types';

export const addNewTask = (state: StateSchema, action: ActionAdd) => {
    const newTask = action.payload;
    return {
        ...state,
        allTasks: [
            ...state.allTasks,
            newTask,
        ],
        allTasksCount: state.allTasksCount + 1,
        currentTasksCount: state.currentTasksCount + 1,
    };
};

export const completeTask = (state: StateSchema, action: ActionComplete) => {
    const completeId = action.payload;
    let taskCompleted;
    return {
        ...state,
        allTasks: state.allTasks.map((task) => {
            if (task.id === completeId) {
                taskCompleted = task.completed;
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        }),
        currentTasksCount: !taskCompleted
            ? state.currentTasksCount - 1
            : state.currentTasksCount + 1,
        doneTasksCount: !taskCompleted
            ? state.doneTasksCount + 1
            : state.doneTasksCount - 1,
    };
};

export const deleteTask = (state: StateSchema, action: ActionDelete) => {
    const deletedTask = action.payload;
    return {
        ...state,
        allTasks: state.allTasks.filter((task) => task.id !== deletedTask.id),
        allTasksCount: state.allTasksCount - 1,
        currentTasksCount: deletedTask.completed
            ? state.currentTasksCount
            : state.currentTasksCount - 1,
        doneTasksCount: deletedTask.completed
            ? state.doneTasksCount - 1
            : state.doneTasksCount,
    };
};

export const deleteAllCompletedTasks = (state: StateSchema) => {
    const filteredTasks = state.allTasks.filter((task) => !task.completed);

    return {
        ...state,
        allTasks: filteredTasks,
        allTasksCount: filteredTasks.length,
        currentTasksCount: filteredTasks.length,
        doneTasksCount: 0,
    };
};

export const showAllCompleted = (state: StateSchema, action: ActionShowAllCompleted) => {
    const allCompletedTasks = state.allTasks.filter((task) => task.completed);
    return {
        ...state,
        doneTasks: allCompletedTasks,
        selectedTab: action.selectedTab,
    };
};

export const showAllCurrent = (state: StateSchema, action: ActionShowAllCurrent) => {
    const allCompletedTasks = state.allTasks.filter((task) => !task.completed);
    return {
        ...state,
        currentTasks: allCompletedTasks,
        selectedTab: action.selectedTab,
    };
};

export const showAll = (state: StateSchema, action: ActionShowAll) => {
    return {
        ...state,
        selectedTab: action.selectedTab,
    };
};
