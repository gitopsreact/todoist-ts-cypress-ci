import React, { FC, useEffect } from 'react'

import { collatedTasks } from '../constants'
import { useProjectsValue, useSelectedProjectValue } from '../context'
import { collatedTasksExist, getCollatedTitle, getTitle } from '../helpers'
import { useTasks } from '../hooks'
import { AddTask } from './AddTask'
import { Checkbox } from './Checkbox'

interface TasksInterface {
  archived: boolean
  id: string
  projectId: string
  taskId: string
  taskdate: string
  taskdesc: string
  taskname: string
  userId: string
}

export const Tasks: FC<Partial<TasksInterface>> = () => {
  const { selectedProject } = useSelectedProjectValue()
  const { projects } = useProjectsValue()
  const { tasks } = useTasks(selectedProject)

  let projectName = ''

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`
  })

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map((task: TasksInterface) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} taskDesc={task.taskname} />
            <span>{task.taskname}</span>
          </li>
        ))}
      </ul>

      <AddTask />
    </div>
  )
}
