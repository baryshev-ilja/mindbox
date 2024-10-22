import { Task as TaskType } from '@/app/store/types';
import { Task } from '@/shared/ui/Task';

interface TaskListCurrentProps {
    tasks: TaskType[];
}

export const TaskListCurrent = (props: TaskListCurrentProps) => {
    const { tasks } = props;

    return (
        <>
            {
                tasks.map((task) => (
                    <Task
                        id={task.id}
                        key={task.id}
                        completed={task.completed}
                    >
                        {task.value}
                    </Task>
                ))
            }
        </>
    );
};
