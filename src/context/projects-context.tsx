import React, { createContext, FC, ReactNode, useContext } from 'react'

import { useProjects } from '../hooks'

interface ProjectsInterface {
  name: string
  projectId: string
  userId: string
  docId: string
  activeValue: string
  // selectedProject: string
}
export interface StateInterface {
  projects: ProjectsInterface[]
}

const initialState: StateInterface = {
  projects: [],
}
interface ChildrenInterface {
  children?: ReactNode
  //   value?: any
}
export const ProjectsContext = createContext<StateInterface | any>(initialState)
export const ProjectsProvider: FC<ChildrenInterface> = ({ children }) => {
  const { projects, setProjects } = useProjects()

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  )
}

export const useProjectsValue = () => useContext(ProjectsContext)
