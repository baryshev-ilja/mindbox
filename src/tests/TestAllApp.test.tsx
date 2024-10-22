import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from '@/app/App';

describe('Mindbox - Форма ввода задачи', () => {
    it('Должна добавится новая задача и очищаться поле ввода', () => {
        render(<App />);
        fireEvent.change(screen.getByTestId('inputNewTask'), { target: { value: 'Test Todo' } });
        fireEvent.click(screen.getByTestId('btnAddTask'));

        expect(screen.getByTestId('taskList').children.length).toBe(5);
        expect(screen.getByPlaceholderText('Напишите что нужно сделать?')).toBeInTheDocument();
    });
});

describe('Mindbox - Работа с выполнением/удалением задач', () => {
    it('Должен изменяться счетчик у фильтра при выполнении/удалении задачи', () => {
        render(<App />);
        expect(screen.getByTestId('tabAllCompleted').innerHTML).toContain(1);

        fireEvent.click(screen.getByTestId('dsdf&^s334H)_m7-task'));

        expect(screen.getByTestId('tabAllCompleted').innerHTML).toContain(2);
        expect(screen.getByText('Покрыть основной функционал тестами')).toBeInTheDocument();
        expect(screen.getByText('Успешно пройти собеседование в Mindbox')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('df73h0erFDD56&^$))HDWH-clear'));

        expect(screen.getByTestId('tabAllCompleted').innerHTML).toContain(1);
    });

    it('Должен изменяться счетчик у фильтра при удалении всех выполненных задач', () => {
        render(<App />);
        expect(screen.getByTestId('tabAllCompleted').innerHTML).toContain(1);

        fireEvent.click(screen.getByTestId('dsdf&^s334H)_m7-task'));
        fireEvent.click(screen.getByTestId('dsd78%$#oiUI0_23#@-task'));

        expect(screen.getByTestId('tabAllCompleted').innerHTML).toContain(3);
        expect(screen.getByText('Покрыть основной функционал тестами')).toBeInTheDocument();
        expect(screen.getByText('Успешно пройти собеседование в Mindbox')).toBeInTheDocument();
        expect(screen.getByText('Я в команде Mindbox :)')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('btnClearAll'));

        expect(screen.getByTestId('tabAllCompleted').innerHTML).toContain(0);
    });
});

describe('Mindbox - Работа с фильтрами (tabs)', () => {
    it('Должны показываться только выполненные задачи', () => {
        render(<App />);

        expect(screen.getByTestId('tabAllCompleted').innerHTML).toContain(1);
        fireEvent.click(screen.getByTestId('dsdf&^s334H)_m7-task'));
        fireEvent.click(screen.getByTestId('dsd78%$#oiUI0_23#@-task'));
        expect(screen.getByTestId('tabAllCompleted').innerHTML).toContain(3);

        fireEvent.click(screen.getByText('выполненные'));
        expect(screen.getByTestId('taskList').children.length).toBe(3);
    });

    it('Должны показываться только текущие задачи', () => {
        render(<App />);

        expect(screen.getByTestId('tabAllCurrent').innerHTML).toContain(3);
        fireEvent.click(screen.getByTestId('dsdf&^s334H)_m7-task'));
        fireEvent.click(screen.getByTestId('dsd78%$#oiUI0_23#@-task'));
        expect(screen.getByTestId('tabAllCurrent').innerHTML).toContain(1);

        fireEvent.click(screen.getByText('текущие'));
        expect(screen.getByTestId('taskList').children.length).toBe(1);
    });
});
