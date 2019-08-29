import { FC } from 'react'

import { collatedTasks } from '../constants'

interface ProjectsInterface {
  name: string
  projectId: string
  userId: string
  docId: string
  activeValue: string
  find: any
  key: string
}
export const getTitle: FC<ProjectsInterface> = (projects, projectId) =>
  projects.find((project: ProjectsInterface) => project.projectId === projectId)

export const getCollatedTitle: FC<ProjectsInterface> = (projects, key) =>
  projects.find((project: ProjectsInterface) => project.key === key)

export const collatedTasksExist = (selectedProject: string) =>
  collatedTasks.find(task => task.key === selectedProject)

export const generatePushId = (() => {
  const PUSH_CHARS =
    '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz'

  const lastRandChars: number[] = []

  return function() {
    let now = new Date().getTime()

    const timeStampChars = new Array(8)
    for (let i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64)
      now = Math.floor(now / 64)
    }

    let id = timeStampChars.join('')

    for (let i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i])
    }

    return id
  }
})()
