import { StateSchema } from './types';

export const initialState: StateSchema = {
    selectedTab: 'all',
    allTasks: [
        {
            id: 'DF60KT43fd',
            value: 'Написать прекрасный код',
            completed: false,
        },
        {
            id: 'df73h0erFDD56&^$))HDWH',
            value: 'Покрыть основной функционал тестами',
            completed: true,
        },
        {
            id: 'dsdf&^s334H)_m7',
            value: 'Успешно пройти собеседование в Mindbox',
            completed: false,
        },
        {
            id: 'dsd78%$#oiUI0_23#@',
            value: 'Я в команде Mindbox :)',
            completed: false,
        },
    ],
    currentTasks: [],
    doneTasks: [],
    allTasksCount: 4,
    currentTasksCount: 3,
    doneTasksCount: 1,
};
