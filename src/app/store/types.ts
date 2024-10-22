export interface Task {
    id: string;
    value: string;
    completed: boolean;
}

export interface DeleteTask {
    id: string;
    completed: boolean;
}

export interface StateSchema {
    selectedTab: 'all' | 'current' | 'done';
    allTasks: Task[];
    currentTasks: Task[];
    doneTasks: Task[];
    allTasksCount: number;
    currentTasksCount: number;
    doneTasksCount: number;
}

export interface ActionAdd {
    type: 'add';
    payload: Task;
}

export interface ActionComplete {
    type: 'complete';
    payload: string;
}

export interface ActionDelete {
    type: 'delete';
    payload: DeleteTask;
}

export interface ActionShowAllCompleted {
    type: 'showAllCompleted';
    selectedTab: 'done';
}

export interface ActionShowAllCurrent {
    type: 'showAllCurrent';
    selectedTab: 'current';
}

export interface ActionShowAll {
    type: 'showAll';
    selectedTab: 'all';
}

export interface ActionDeleteAll {
    type: 'deleteAllCompleted';
}

export type UnionActionType =
    ActionAdd
    | ActionComplete
    | ActionDelete
    | ActionDeleteAll
    | ActionShowAllCompleted
    | ActionShowAllCurrent
    | ActionShowAll;
