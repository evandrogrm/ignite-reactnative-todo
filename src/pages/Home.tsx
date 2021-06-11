import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle) {
      const data: Task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };
      setTasks([ ...tasks, data ]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const ctasks = [ ...tasks ];

    ctasks.filter(t => t.id === id)
      .map(t => t.done = !t.done);

    setTasks(ctasks);
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}
